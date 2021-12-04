
const profession = require("../models/profession.json");
const fs = require('fs');
const Profession = require("../models/profession-model.js");

async function getProfessions(req, res) {
    res.render('profession/profession-list', { profession: profession });
}

async function getProfession(req, res) {
    const { id } = req.params;
    const newProfession = profession.filter((prof) => {
    return prof.id == id
    });
    res.render('profession/profession', { profession: newProfession })
}

async function createProfessionView(req,res){
    res.render('profession/profession-create')
}

async function createProfession(req,res){
    const {profession,faculty,pay,study_year } = req.body
    let professionn = await Profession.create({profession,faculty,pay,study_year })
    let professions = await Profession.find();
    res.render('profession/profession-list', { professionn: professions })
}


async function deleteProfession(req,res){
    const { id } = req.params;
    let profession  = profession.filter(prof => prof.id == id);
}
async function editProfessionView(req, res) {
     
    const { id } = req.params;
    let pro = profession.filter(prof => prof.id == id);
    res.render('profession/profession-edit', { profession: pro });
}
    
async function editProfession(req, res) {
console.log(req.body);
}
    

module.exports = {
    getProfessions,
    getProfession,
    createProfessionView,
    createProfession,
    deleteProfession,
    editProfessionView,
    editProfession
}
