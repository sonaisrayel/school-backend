const express = require('express');
const router = express.Router();

const {
  getFaculty,
  getFaculties,
  createFacultyView,
  createFaculty,
  editFaculty,
  deleteFaculty,
} = require('../controllers/faculty-controller');

router.get('/', getFaculties);
router.get('/:id', getFaculty);
router.get('/create', createFacultyView);
router.get('/edit/:id', editFaculty);
router.post('/', createFaculty);
router.get('/delete/:id', deleteFaculty);

module.exports = router;
