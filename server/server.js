import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

//app setup
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("API is working fine...."));

//listen to request
app.listen(port, () => console.log("Server started at port: " + port));
