import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes  from "./routes/productRoutes.js";
import userRouters from "./routes/userRoutes.js";
import cookieParser from "cookie-parser"
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

const port = 9090;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use("/api/products", productRoutes)
app.use("/api/users", userRouters);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})

