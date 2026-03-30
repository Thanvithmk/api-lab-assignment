const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 4000;

let books=[
    { id: 1, title: "GraphQL Basics", author: "John" },
    { id: 2, title: "Node.js Guide", author: "Alice" }
]

/*schema*/
const schema=buildSchema(`
    type Book{
    id:ID
    title:String
    author:String
    }

    type Query{
    books:[Book]
    book(id:ID!):Book
    }

    type Mutation{
    addBook(title:String!,author:String!):Book
    deleteBook(id:ID!):Book
    }
`
)

/*resolver*/
const root={
    books:()=>books,
    book:({id})=>{
        return books.find(book=>book.id==id)
    },
    addBook({title,author}){
        const newBook={
            id:books.length+1,
            title,
            author
        }
        books.push(newBook)
        return newBook
    },
    /* not to be written in obs */
    deleteBook({id}){
        const bookIndex=books.findIndex(book=>book.id==id)
        const deletedBook=books[bookIndex]
        books.splice(bookIndex,1)
        return deletedBook
    }
}

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql:true
}))

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/graphql`)
})