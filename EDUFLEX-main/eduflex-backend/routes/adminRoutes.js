const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

// Only admin can create users
router.post('/create-user', protect, createUser);

module.exports = router;
