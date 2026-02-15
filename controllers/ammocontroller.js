const Ammunition = require('../models/ammunition');

// GET all ammunition
const getAll = async (req, res) => {
  try {
    const records = await Ammunition.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single ammunition by ID
const getSingle = async (req, res) => {
  try {
    const record = await Ammunition.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create new ammunition
const createAmmo = async (req, res) => {
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'New Ammunition Data',
        schema: {
            caliber: "This is a test of this",
            bulletWeight: 124,
            bulletType: "HST JHP",
            brand: "Federal",
            category: "Handgun",
            quantity: 50,
            muzzleVelocity: 1150,
            lotNumber: "L123-A",
            notes: "Self-defense carry ammo",
            ownerId: "user_01"
        }
  } */
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body cannot be empty" });
    }

    const newAmmo = new Ammunition(req.body);
    const savedAmmo = await newAmmo.save();
    res.status(201).json(savedAmmo);
  } catch (err) {
    res.status(400).json({ message: "Error creating record", error: err.message });
  }
};


// PUT update ammunition
const updateAmmo = async (req, res) => {
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Updated Ammunition Data',
        schema: { $ref: '#/definitions/Ammunition' }
  } */
  try {
    const updatedAmmo = await Ammunition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAmmo) return res.status(404).json({ message: "Record not found" });
    res.status(204).send(); // 204 No Content is common for successful updates
  } catch (err) {
    res.status(400).json({ message: "Error updating record", error: err.message });
  }
};


// DELETE ammunition
const deleteAmmo = async (req, res) => {
  try {
    const deleted = await Ammunition.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createAmmo,
  updateAmmo,
  deleteAmmo
};