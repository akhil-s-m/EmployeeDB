import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employee.routes.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.error(err));
const PORT = process.env.PORT || 3000;

const app = express();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About Page  ");
});
