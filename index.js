import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employee.routes.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
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

app.get("/about", (req, res) => {
  res.send("About Page  ");
});
