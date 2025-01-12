const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const userRoute = require('./routes/userRoutes')

const app= express();

app.use(express.json());

app.use(cors({
   origin:true,
   credentials:true 
}))

app.get('/',(req,res)=>{
    res.send("server is running..")
})

app.use('/user', userRoute)

mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB connect successfully"))
    .catch((err)=>console.log("failed to connect database",err))

app.listen(3000,()=>{
    console.log("server is running.. 3000")
})