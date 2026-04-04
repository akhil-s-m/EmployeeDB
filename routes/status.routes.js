import express from "express";
import {
  createStatus,
  getAllStatuses,
  getStatusById,
  deleteStatus,
  updateStatus,
} from "../controllers/status.controller.js";

const router = express.Router();

router.post("/", createStatus);
router.get("/", getAllStatuses);
router.get("/:id", getStatusById);
router.delete("/:id", deleteStatus);
router.put("/:id", updateStatus);

export default router;
