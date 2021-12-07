const express = require('express');
const router = express.Router();

const {
  getStudents,
  createStudent,
  createStudentView,
  getStudent,
  editStudentView,
} = require('../controllers/student-controller');

//routes
router.get('/', getStudents);
router.get('/create', createStudentView);
router.get('/:id', getStudent);
router.get('/edit/:id', editStudentView);

router.post('/students', createStudent);
//app.post('/students/edit',editStudent);

module.exports = router;
