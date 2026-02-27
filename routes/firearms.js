const express = require('express');
const router = express.Router();
const firearmController = require('../controllers/firearmcontroller');
const { ensureAuth } = require('../middleware/auth');
// Assuming you'll create a firearms controller later
// const firearmsController = require('../controllers/firearmscontroller');

// Placeholder GET route
router.get('/', ensureAuth, firearmController.getAll);

router.get('/:id', ensureAuth, firearmController.getSingle);

router.post('/', ensureAuth, firearmController.createFirearm);

router.put('/:id', ensureAuth, firearmController.updateFirearm);

router.delete('/:id', ensureAuth, firearmController.deleteFirearm);

module.exports = router;