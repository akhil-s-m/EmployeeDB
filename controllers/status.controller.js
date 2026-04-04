import Status from "../models/status.model.js";

// CREATE
const createStatus = async (req, res) => {
  try {
    const status = await Status.create(req.body);

    res.status(200).json({
      message: "Status created successfully",
      status: status,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
const getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.find({});

    res.status(200).json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
const getStatusById = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id);

    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }

    res.status(200).json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByIdAndDelete(req.params.id);

    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }

    res.status(200).json({
      message: "Status deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateStatus = async (req, res) => {
  try {
    const status = await Status.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      status: status,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export {
  createStatus,
  getAllStatuses,
  getStatusById,
  deleteStatus,
  updateStatus,
};
