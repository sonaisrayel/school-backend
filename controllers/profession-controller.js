const Profession = require('../models/profession-model.js');

async function getProfessions(req, res) {
  const profession = await Profession.find();
  res.render('profession/profession-list', { profession: profession });
}

async function getProfession(req, res) {
  const { id } = req.params;
  const profession = await Profession.findOne({ id });
  res.render('profession/profession', { profession: profession });
}

async function createProfessionView(req, res) {
  res.render('profession/profession-create');
}

async function createProfession(req, res) {
  const { profession, faculty, pay, study_year } = req.body;
  await Profession.create({ profession, faculty, pay, study_year });
  let professions = await Profession.find();
  res.render('profession/profession-list', { profession: professions });
}

async function deleteProfession(req, res) {
  const { id } = req.params;
  let profession = profession.filter((prof) => prof.id == id);
}

async function editProfessionView(req, res) {
  const { id } = req.params;
  let profession = await Profession.find({ id });
  res.render('profession/profession-edit', { profession: profession });
}

async function editProfession(req, res) {
  //console.log(req.body);
}

module.exports = {
  getProfessions,
  getProfession,
  createProfessionView,
  createProfession,
  deleteProfession,
  editProfessionView,
  editProfession,
};
