const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT||9000
const app = express()


app.use(bodyParser.json() , cors())


const typeDefinition1 = `
type Query  {
   greeting: String,
   test:Int
}`

const resolverObject1 = {
    Query : {
        greeting: () => "hello",
        test: () => 4
    }
  }


const typeDefinition2 = `
type Query {
    resource1: resource
}
type resource{
    ResourceID: Int,
    ResourceTitle: String
    ResourceLink: String,
    ResourceDescription: String,
    upvoteCount: Int,
    DownvoteCount: Int,
    SaveCount: Int,
    TagOne: Int,
    TagTwo: Int,
    userID: Int
  }`




async function funct(){
    let resolverObject = await getshit("SELECT * FROM [dbo].[Resources]")
    console.log("retrieved data")
    return resolverObject.recordset[0]
}

async function defunct(){
    console.log(await funct())
}
defunct()
const {makeExecutableSchema} = require('graphql-tools')

const schema = makeExecutableSchema({typeDefs:typeDefinition2, resolvers:funct})

const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')

app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.listen(port, () =>  console.log(`server is up and running ${port}`))





async function getshit(query){
    let r;
    var config = {
      server   : 'DESKTOP-MKVCJRF',
      database: 'ExtraCredit',
      user:'admin',
      password:'password',
      trustServerCertificate: true,
      options:{
        trustedConnection: true
    }};
    
    const sql = require("mssql")
    var conn = await sql.connect(config)
        .then((success)=>{
            //console.log(success)
        },(fail)=>{
            console.log("failed to connect")
            //console.log(fail)
        })
 
    await sql.query(query)
        .then((success)=>{
            //console.log(success)
            r = success
        },(fail)=>{
            console.log("failed query")
            //console.log(fail)
        });
    sql.close()
    return r;
    }