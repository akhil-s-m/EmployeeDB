import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      unique: true,
    },
    department: {
      type: String,
    },
  },
  { timestamps: true },
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
