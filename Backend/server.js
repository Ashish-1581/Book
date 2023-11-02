import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import morgan from "morgan";



//configure env

dotenv.config();

//databse config
connectDB();

//rest object
const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


  

app.use("/api/v1/books",bookRoutes);


const port=process.env.PORT || 8000;

app.listen(port,()=>console.log(`Listening on port ${port}...`));