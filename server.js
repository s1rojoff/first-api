import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import usersRoute from './routes/usersRoute.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoute.path, usersRoute.router)

connectDB();

app.get("/api/users", async (req, res) => {
  
});

app.post("/api/users", async (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});
