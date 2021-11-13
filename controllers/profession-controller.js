
const profession = require("../models/profession.json");

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
    res.render('profession-create')
}

async function deleteProfession(req,res){
    const { id } = req.params;
    let profession  = profession.filter(prof => prof.id == id);


}

module.exports = {
    getProfessions,
    getProfession,
    createProfessionView,
    deleteProfession
}