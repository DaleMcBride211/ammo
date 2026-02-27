const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', authController.login);

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', authController.callback);

// @desc    Logout user
// @route   GET /auth/logout
router.get('/logout', authController.logout);

module.exports = router;