const express = require('express');
const router = express.Router();
const ammoController = require('../controllers/ammocontroller');

// GET all ammunition
router.get('/', ammoController.getAll);

// GET a single ammunition record by ID
router.get('/:id', ammoController.getSingle);

router.post('/', ammoController.createAmmo);

router.put('/:id', ammoController.updateAmmo);

router.delete('/:id', ammoController.deleteAmmo);

module.exports = router;