import fs from 'fs'
import path from 'path'
import Fastify, { FastifyInstance } from 'fastify'
import fastifyCors from 'fastify-cors'
import mercurius, { IResolvers } from 'mercurius'

const server: FastifyInstance = Fastify({})

//storing the todos
let todos = [{
    id: '0',
    title: 'Clean Room',
    complete: false
}]

//resolvers - function that resolves a value for a type or field in a schema
const resolvers: IResolvers = {
    Query: {
        todoList: () => todos
    },
    Mutation: {
        add: (_par: any, args: { title: any }) => {
            let count = todos.length

            const todo = {
                id: `${count}`,
                title: args.title,
                complete: false
            }

            todos.push(todo)
            return todo
        },
        done: (_par: any, args: { id: string }) => {
            const doneTodo = todos.find(todo => todo.id === args.id)
            if (!doneTodo)
                return doneTodo
            doneTodo.complete = !doneTodo.complete
            return doneTodo
        }
    },
    Todo: {
        id: (par: { id: any }) => par.id,
        title: (par: { title: any }) => par.title,
        complete: (par: { complete: any }) => par.complete
    }
}

//fastifyCors as a plugin
server.register(fastifyCors, {
    origin: '*'
})

//mercurius as a plugin
// server.register(mercurius, {
//     schema: fs.readFileSync(
//         path.join(__dirname, 'schema.graphql'),
//         'utf8'
//     ),
//     resolvers,
// })

server.listen(8000, (err, addr) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${addr}`)
})