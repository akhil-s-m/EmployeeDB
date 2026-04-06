import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employee.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import statusRoutes from "./routes/status.routes.js";
import dotenv from "dotenv";
import authenticateApiKey from "./middleware/auth.middleware.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/employees", authenticateApiKey, employeeRoutes);
app.use("/api/departments", authenticateApiKey, departmentRoutes);
app.use("/api/statuses", authenticateApiKey, statusRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
