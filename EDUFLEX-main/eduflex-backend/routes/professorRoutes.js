const express = require('express');
const router = express.Router();
const { createCourse, createAssignment } = require('../controllers/professorController');
const { protect } = require('../middleware/authMiddleware');

router.post('/courses', protect, createCourse);
router.post('/assignments', protect, createAssignment);

module.exports = router;
