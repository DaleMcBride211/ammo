const express = require('express');
const router = express.Router();
const firearmController = require('../controllers/firearmcontroller')
// Assuming you'll create a firearms controller later
// const firearmsController = require('../controllers/firearmscontroller');

// Placeholder GET route
router.get('/', firearmController.getAll);

router.get('/:id', firearmController.getSingle);

router.post('/', firearmController.createFirearm);

router.put('/:id', firearmController.updateFirearm);

router.delete('/:id', firearmController.deleteFirearm);

module.exports = router;