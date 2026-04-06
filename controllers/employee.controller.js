import Employee from "../models/employee.model.js";
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res
      .status(200)
      .json({ message: "Employee created successfully", employee: employee });
    console.log(employee + " Added");
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: error.message });
    console.log("Failed to add employee");
  }
};
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
    console.log("Fetched all employees");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    console.log("Failed to fetch employees");
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json(employee);
      console.log(employee + " Fetched");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    console.log("Failed to fetch employee");
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      res.status(200).json({ message: "Employee deleted successfully" });
      console.log(employee + " Deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    console.log("Failed to delete employee");
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
    console.log(employee + " Updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    console.log("Failed to update employee");
  }
};
export {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
};
