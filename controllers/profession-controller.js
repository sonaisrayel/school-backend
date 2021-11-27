
const profession = require("../models/profession.json");
const fs = require('fs');
const Profession = require("../models/profession-model.js")

async function getProfessions(req, res) {
    res.render('profession/profession-list', { profession: profession });
}

async function getProfession(req, res) {
    const { id } = req.params;
    const newProfession = profession.filter((pro) => {
        return pro.id == id
    });
    res.render('profession/profession', { profession: newProfession })
}


async function createProfessionView(req, res){
    res.render('profession/profession-create')
}

async function createProfession(req,res){
    const {profession,faculty,pay,study_year } = req.body
    let proff = await Profession.create({profession,faculty,pay,study_year })
    res.render('profession/profession-list', { profession: proff })
}


async function deleteProfession(req,res){
    const { id } = req.params;
    let profession  = profession.filter(prof => prof.id == id);


}

module.exports = {
    getProfessions,
    getProfession,
    createProfessionView,
    createProfession,
    deleteProfession
}
