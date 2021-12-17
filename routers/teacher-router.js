const express = require('express');
const router = express.Router();

const {
  getTeachers,
  getTeacher,
  createTeacher,
  createTeacherView,
  editTeacher,
  editTeacherView,
  deleteTeacher
} = require('../controllers/teacher-controller.js');

router.get('/', getTeachers);
router.get('/create', createTeacherView);
router.get('/:id', getTeacher);
router.get('/edit', editTeacher);
router.get('/edit/:id', editTeacherView);
router.get('/delete/:id', deleteTeacher);
router.post('/', createTeacher);

module.exports = router;
