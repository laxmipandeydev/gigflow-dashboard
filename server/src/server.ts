import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";
import leadRoutes from "./routes/leadRoutes";
import authRoutes from "./routes/authRoutes";


dotenv.config();
const app = express();


connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/leads", leadRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("GigFlow API Running 🚀");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});