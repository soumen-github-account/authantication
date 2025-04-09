import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
//import userAuth from './middleware/userauth.js';
const app = express();
const port = process.env.port || 8000

connectDB();
const allowedOrigins = ['https://authantication-1.onrender.com']
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))
// API endpoint
app.get('/',(req,res)=>{
    res.send("api");
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, ()=>{
    console.log(`server started on port : ${port}`)
})