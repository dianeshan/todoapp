import Head from 'next/head';
import { Button, TextField, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { randomUUID } = require('crypto');
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([{
    id: "0",
    title: "Clean Room",
    complete: false
  }])

  //add todos
  const handleAdd = () => {
    if (todo) {
      let uuid = self.crypto.randomUUID();
      setTodoList([
        {
          id: uuid,
          title: todo,
          complete: false
        },
        ...todoList
      ])

      setTodo("");
    }
  }

  return (
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
          <TextField id="outlined-basic" label="Add ToDo" variant="outlined" value={todo} onChange={(el) => setTodo(el.target.value)} />
          <Button variant="contained" onClick={handleAdd}>Add</Button>
        </div>

        <div>
          <List>
            {todoList.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  {title}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>

      </main>

    </div>
  )
}
