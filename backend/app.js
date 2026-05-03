import e from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const  transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.ADMIN_EMAIL,
        pass:process.env.APP_PASSWORD
    }
})

const router = e.Router();
const app = e();
app.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"]
}))
app.use(e.json())
app.use(e.urlencoded({extended:true}))

export  {router,app,transporter};