const Firearms = require('../models/firearms');

const getAll = async (req, res) => {
    try {
        const records = await Firearms.find();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const record = await Firearms.findById(req.params.id);
        if (!record) return res.status(404).json({ message: "Record not found" });
        res.status(200).json(record);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createFirearm = async (req, res) => {
    
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Request body cannot be empty" });
        }
        
        const newFirearm = new Firearms(req.body);
        const savedFirearm = await newFirearm.save();
        res.status(201).json(savedFirearm);
    } catch (err) {
        res.status(400).json({ message: "Error creating record", error: err.message });
    }
};

const updateFirearm = async (req, res) => {


    try {
        const updatedFirearm = await Ammunition.findByIdAndUpdate(
            req.params.id,
            req.body,
        { new: true, runValidators: true}
        );
        if (!updatedFirearm) return res.status(404).json({ message: "Record not found" });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: "Error updating record", error: err.message });
    }
};

const deleteFirearm = async (req, res) => {
    try {
        const deleted = await Firearms.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Record not found" });
        res.status(200).json({ message: "Record deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
  getAll,
  getSingle,
  createFirearm,
  updateFirearm,
  deleteFirearm
};