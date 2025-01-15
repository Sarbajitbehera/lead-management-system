import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from './routes/userRoutes.js';

// load environment variables
dotenv.config()

const app = express();

app.use(json());

app.use('/user', userRoute)

connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB connect successfully"))
    .catch((err)=>console.log("failed to connect database",err))

app.listen(3000,()=>{
    console.log("server is running.. 3000")
})