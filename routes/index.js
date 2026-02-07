const router = require('express').Router();

router.use('/firearms', require('./firearms'));
router.use('/ammo', require('./ammunition'));

module.exports = router;