const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT||9000
const app = express()


app.use(bodyParser.json() , cors())


const typeDefinition = `
type Query  {
   greeting: String,
   test:Int
}`

const  resolverObject = {
   Query : {
      greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
      test: () => getshit()
   }
}

function rand(){
    return Math.floor(Math.random() * 100);
}



const {makeExecutableSchema} = require('graphql-tools')

const schema = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject})

const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')

app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.listen(port, () =>  console.log(`server is up and running ${port}`))

