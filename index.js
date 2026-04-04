import express from "express";
import mongoose from "mongoose";
import Employee from "./models/employee.model.js";
import employeeRoutes from "./routes/employee.routes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", employeeRoutes);
mongoose
  .connect(
    "mongodb+srv://akhil:NCUw5GFClAK4v3U2@cluster0.xfcbukv.mongodb.net/?appName=Cluster0",
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/about", (req, res) => {
  res.send("About Page  ");
});
