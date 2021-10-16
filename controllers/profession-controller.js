

const profession = require('../models/profession.json');
async function getProfessions(req, res)  {
    res.render('profession', { profession: profession })
  }
  module.exports={
      getProfessions
  }