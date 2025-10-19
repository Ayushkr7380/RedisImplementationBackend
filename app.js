import {config} from "dotenv";
config();
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import students from "./routers/students.route.js"


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cookieParser());

// app.use(cors({
//     credentials:true
// }))

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",  // no trailing slash
  credentials: true,   // Access-Control-Allow-Credentials: true
  optionsSuccessStatus: 200, // fix typo here
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization']   // allowed headers
}

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("Working...");
})

app.use("/studentDetails",students);

export default app;

