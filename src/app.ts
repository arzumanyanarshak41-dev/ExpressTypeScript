import express, { Request, Response } from "express";
export const app = express();
import { router as UsersRouter } from "./routes/usersRoute";
app.use("/", UsersRouter);
