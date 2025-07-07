import express from'express';
import cors from 'cors';
import { router } from './routes/user-router.js';
// import { errorHandler } from './middlewares/errorHandler.js';
import { configDotenv } from 'dotenv';
configDotenv()


const app= express()
app.use(express.json())
console.log(process.env.PORT);

app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: process.env.CORS || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}))
const port= process.env.PORT ;

app.use('/api',router);
// app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port} `)
})
export default app;