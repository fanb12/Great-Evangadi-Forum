const express= require('express')
const app=express()
const port=5050
const dbconnection=require('./db/dbConfig')
//user route middelware file
const userRoute=require('./routes/userRoute')
//json middleware
app.use(express.json())


//user route middelware
app.use("/api/users",userRoute)


//question route middelware file
const questionRoute=require('./routes/qustionRoute')
//question route middelware

app.use("/api",questionRoute)

//answer route middelware file
const answerRoute=require('./routes/answerRoute')
//answer route middelware

app.use("/api",answerRoute)

async function start(){
    try {
        const result=await dbconnection.execute("select 'text'")
        console.log("Database is connected")
        await app.listen(port)
        console.log(`Listing port ${port}`)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
start()