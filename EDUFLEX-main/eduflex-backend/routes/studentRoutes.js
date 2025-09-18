const express = require('express');
const router = express.Router();
const { submitAssignment, getAssignments } = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');

router.get('/assignments', protect, getAssignments);
router.post('/assignments/submit', protect, submitAssignment);

module.exports = router;
