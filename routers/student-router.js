const express = require('express');
const router = express.Router();

const {
  getStudents,
  createStudent,
  createStudentView,
  getStudent,
  editStudentView,
  editStudent
} = require('../controllers/student-controller');

//routes
router.get('/', getStudents);
router.get('/create', createStudentView);
router.get('/:id', getStudent);
router.post('/edit', editStudent);
router.get('/edit/:id', editStudentView);
router.get('/students/edit/:id', editStudentView);
router.post('/', createStudent);
//app.post('/students/edit',editStudent);

module.exports = router;
