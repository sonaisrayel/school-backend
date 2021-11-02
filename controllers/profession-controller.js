
const student = require("../models/student-personal.json");

async function getProfessions(req, res) {
    res.render('profession', { profession: profession })
}

async function getProfession(req, res) {
    const { id } = req.params;
    const newProfession = profession.filter((pro) => {
        return pro.id == id
    })
    res.render('profession', { profession: newProfession })
}


module.exports = {
    getProfessions,
    getProfession
}