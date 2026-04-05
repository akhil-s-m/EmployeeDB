import express from "express";
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  deleteDepartment,
  updateDepartment,
} from "../controllers/department.controller.js";

const router = express.Router();

router.post("/", createDepartment);
router.get("/", getAllDepartments);
router.get("/:id", getDepartmentById);
router.delete("/:id", deleteDepartment);
router.put("/:id", updateDepartment);

export default router;
