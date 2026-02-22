const Firearms = require('../models/firearms');

const getAll = async (req, res) => {
    // #swagger.tags = ['Firearms']
    // #swagger.description = 'Retrieve all firearms from the database.'
    try {
        const records = await Firearms.find();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingle = async (req, res) => {
    // #swagger.tags = ['Firearms']
    // #swagger.description = 'Retrieve a single firearm by its ID.'
    try {
        const record = await Firearms.findById(req.params.id);
        if (!record) return res.status(404).json({ message: "Record not found" });
        res.status(200).json(record);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createFirearm = async (req, res) => {
    // #swagger.tags = ['Firearms']
    // #swagger.description = 'Create a new firearm entry.'
    /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Firearm Data',
            required: true,
            schema: {
                nickname: "My Primary Rifle",
                manufacturer: "Daniel Defense",
                model: "DDM4 V7",
                serialNumber: "DD123456",
                caliber: "5.56 NATO",
                actionType: "Semi-Auto",
                category: "MSR",
                barrelLength: 16,
                finish: "Black Anodized",
                purchaseDate: "2024-02-21",
                purchasePrice: 1800.00,
                image: "https://example.com/image.jpg",
                notes: "Equipped with LPVO optic",
                ownerId: "user_123"
            }
    } */

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
    // #swagger.tags = ['Firearms']
    // #swagger.description = 'Update an existing firearm by ID.'
    /* #swagger.parameters['body'] = {
            in: 'body',
            description: 'Firearm Data to Update',
            schema: {
                nickname: "Updated Nickname",
                purchasePrice: 1750.00,
                notes: "Added new sling"
            }
    } */

    try {
        // FIXED: Changed Ammunition to Firearms
        const updatedFirearm = await Firearms.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        if (!updatedFirearm) return res.status(404).json({ message: "Record not found" });
        
        // Returning 200 so you can see the updated record in Swagger
        res.status(200).json(updatedFirearm);
    } catch (err) {
        res.status(400).json({ message: "Error updating record", error: err.message });
    }
};

const deleteFirearm = async (req, res) => {
    // #swagger.tags = ['Firearms']
    // #swagger.description = 'Delete a firearm from the database.'
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