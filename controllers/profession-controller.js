
const profession = require("../models/profession.json");
const fs = require('fs');

async function getProfessions(req, res) {
    res.render('profession/profession-list', { profession: profession });
}

async function getProfession(req, res) {
    const { id } = req.params;
    const newProfession = profession.filter((pro) => {
        return pro.id == id
    });
    res.render('profession', { profession: newProfession })
}
async function createProfessionView(req, res){
    res.render('profession/profession-create')
}

async function createProfession(req,res){
    const {profession,faculty,pay,study_year } = req.body
   let id =  profession.length + 1 ;
   let newProfession = req.body;
   newProfession.id = id;
   profession.push(req.body);
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
