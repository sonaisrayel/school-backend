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
router.get('/edit/:id', editProfessionView);
router.get('/delete/:id', deleteProfession);

module.exports = router;
