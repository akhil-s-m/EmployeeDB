import Employee from "../models/employee.model.js";
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res
      .status(200)
      .json({ message: "Employee created successfully", employee: employee });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: error.message });
  }
};
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json(employee);
      console.log(employee);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json({ message: "Employee deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res
        .status(200)
        .json({ message: "Employee updated successfully", employee: employee });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
};
