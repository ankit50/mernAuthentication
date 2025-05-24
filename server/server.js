import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/mongodb.js";
import authRouter from "./src/routes/authRoutes.js";
import userRouter from "./src/routes/userRoutes.js";

//app setup
const app = express();
const port = process.env.PORT || 4000;
connectDB();
const allowedOrigins = ["http://localhost:5173"];
//middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//API Endpoint
app.get("/", (req, res) => res.send("API is working fine...."));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

//listen to request
app.listen(port, () => console.log("Server started at port: " + port));
