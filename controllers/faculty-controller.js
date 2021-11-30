const faculty = require("../models/faculty.json");
const fs = require('fs');
const Profession = require("../models/faculty-model.js")

async function getFaculties(req, res) {
    res.render('faculty/faculty-list',{ faculty:faculty });
}

async function getFaculty(req, res) {
    const { id } = req.params;
    const newFaculty = faculty.filter((fac) => {
        return fac.id == id
    });    
    res.render('faculty/faculty', { faculty: newFaculty })    
}

async function createFacultyView(req, res){
    res.render('faculty/faculty-create')
}

async function createFaculty (req, res){
    const {profession,faculty,pay,study_year } = req.body
    let proff = await Profession.create({profession,faculty,pay,study_year })
    res.render('profession/profession-list', { profession: proff })
}

module.exports = {
    getFaculties,
    getFaculty,
    createFacultyView,
    createFaculty,
}