import express from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/", createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.delete("/:id", deleteEmployee);
router.put("/:id", updateEmployee);

export default router;
