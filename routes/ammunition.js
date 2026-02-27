const express = require('express');
const router = express.Router();
const ammoController = require('../controllers/ammocontroller');
const { ensureAuth } = require('../middleware/auth');

// GET all ammunition
router.get('/', ensureAuth, ammoController.getAll);

// GET a single ammunition record by ID
router.get('/:id', ensureAuth, ammoController.getSingle);

router.post('/', ensureAuth, ammoController.createAmmo);

router.put('/:id', ensureAuth, ammoController.updateAmmo);

router.delete('/:id', ensureAuth, ammoController.deleteAmmo);

module.exports = router;