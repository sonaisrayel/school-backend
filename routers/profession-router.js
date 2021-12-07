const express = require('express');
const router = express.Router();

const {
  getProfessions,
  getProfession,
  createProfessionView,
  createProfession,
  deleteProfession,
  editProfessionView,
  editProfession,
} = require('../controllers/profession-controller');

router.get('/', getProfessions);
router.get('/create', createProfessionView);
router.post('/edit', editProfession);

router.get('/:id', getProfession);
router.post('/', createProfession);
router.get('/delete/:id', deleteProfession);
router.get('/professions/edit/:id', editProfessionView);

module.exports = router;
