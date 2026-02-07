const express = require('express');
const router = express.Router();
// Assuming you'll create a firearms controller later
// const firearmsController = require('../controllers/firearmscontroller');

// Placeholder GET route
router.get('/', (req, res) => {
    res.send('Firearms route is working');
});

module.exports = router;