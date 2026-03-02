import express from "express";
import authrouter from "./routes/auth.routes.ts";
import cookieParser from "cookie-parser";
const app=express()
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);



export default app;