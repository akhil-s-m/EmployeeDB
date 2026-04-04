import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Status = mongoose.model("Status", statusSchema);

export default Status;
