import e from 'express';
import  cors from "cors";

export const app = e();
app.use(cors({
    origin:['127.0.0.1:5500','http://localhost:5500']
}))

app.use(e.json());
app.use(e.urlencoded({extended:true}))

export const router = e.Router();