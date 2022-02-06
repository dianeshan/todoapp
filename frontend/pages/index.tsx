import Head from 'next/head';
import { Button, TextField, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { StarBorder, Delete, SettingsBackupRestore, Description } from '@material-ui/icons';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { fetchQuery, graphql, useMutation, useQuery } from 'relay-hooks';
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';
import { pagesTodoListQuery } from './__generated__/pagesTodoListQuery.graphql';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { createEnvironment } from '../lib/relay';
import { GetServerSideProps, NextPage } from 'next';

//get todos 
const todoListQuery = graphql`
query pagesTodoListQuery {
  todoList {
    id
    title
    complete
  }
}
`

//update when todo is complete
const todoDoneMutation = graphql`
mutation pagesTodoDoneMutation($input: ID!) {
  done(id: $input) {
    id
    title
    complete
  }
}
`

//add todos
const addTodoMutation = graphql`
mutation pagesAddTodoMutation($input: String!) {
  add(title: $input) {
    id
    title
    complete
  }
}
`

interface HomeProps {
  lists: RecordMap
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const env = createEnvironment(List)
  await fetchQuery(env, todoListQuery, {}).toPromise()

  return {
    props: {
      lists: env.getStore().getSource().toJSON()
    }
  }

}

export default function Home(lists: any) {
  const [todo, setTodo] = useState({ id: "", title: "", complete: false });
  // const [todoList, setTodoList] = useState([{
  //   id: "0",
  //   title: "Clean Room",
  //   complete: false
  // }])

  //store value that we get from query
  const res = useQuery<pagesTodoListQuery>(todoListQuery, {}, {})

  //complete todos mutation
  const [doneMutation] = useMutation(todoDoneMutation)

  //add todos
  const [addMutation, { loading }] = useMutation(
    addTodoMutation,
    {
      update: (store: { getRoot: () => any; getRootField: (arg0: string) => any; }, payload: any) => {
        const root = store.getRoot()
        const newTodo = store.getRootField('add')
        const newTodoList = [...root.getLinkedRecords('todoList'), newTodo]
        root.setLinkedRecords(newTodoList, 'todoList')
      }
    }
  )

  //update title of new task when there is text
  const handleChange = ({ target }) => {
    const { value } = target
    setTodo(prevTodo => ({ ...prevTodo, title: value }))
  }

  //keep track of the finished todos
  const handleToggle = (id: String) => {
    doneMutation({ variables: { input: id } })
  }

  const handleAdd = (title: String) => {
    if (todo.title) {
      addMutation({
        variables: {
          input: todo.title
        },
      })
      setTodo({ id: "", title: "", complete: false })
    }
  }

  return (
    <RelayEnvironmentProvider environment={createEnvironment(lists)}>
      <div className={styles.container}>
        <Head>
          <title>ToDo App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>
            TODOS!
          </h1>

          <p className={styles.description}>
            Get started by adding a todo
          </p>

          <div>
            <TextField id="outlined-basic" label="Add ToDo" variant="outlined" value={todo.title} onChange={handleChange} />
            <Button variant="contained" onClick={() => handleAdd(todo.title)}>Add</Button>
          </div>

          <div>
            <List>
              {res.data?.todoList.map(({ id, title, complete }) => (
                <ListItem key={id} onClick={() => handleToggle(id)} className="todoitems">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText>
                    {title}
                  </ListItemText>
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </div>

        </main>

      </div>
    </RelayEnvironmentProvider>
  )
}

// export const getServerSideProp: GetServerSideProps<HomeProps> = async () => {
//   const env = createEnvironment()
//   await fetchQuery(env, todoListQuery, {}).toPromise()


// }
