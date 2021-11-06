const profession = require('../models/profession.json');

async function getProfessions(req, res) {
    res.render('profession-list', { profession: profession })
}

async function getProfession(req, res) {
    const { id } = req.params;
    const newProfession = profession.filter((pro) => {
        return pro.id == id
    });
    res.render('profession', { profession: newProfession })
}

module.exports = {
    getProfessions,
    getProfession
}