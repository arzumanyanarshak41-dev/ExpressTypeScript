import { app } from "./app";
import express from "express";
import cors from "cors";
import morrgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
dotenv.config();
app.use(morrgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(3000, (): void => {
  console.log("Server is Running on port 3000");
});
