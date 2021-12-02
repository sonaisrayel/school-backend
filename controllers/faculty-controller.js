//const faculty = require("../models/faculty.json");
const Faculty = require("../models/faculty-model");
const fs = require('fs');


async function getFaculties(req, res) {
    let faculty = await Faculty.find()
    res.render('faculty/faculty-list',{ faculty: faculty });
}

async function getFaculty(req, res) {
    const { id } = req.params;
        let newFaculty = await Faculty.findOne({ _id: id });  
        res.render('faculty/faculty', { faculty: newFaculty })    
}

async function createFacultyView(req, res){
    res.render('faculty/faculty-create')
}

async function createFaculty (req, res){
    const { faculty,fee,year } = req.body
    let fac = await Faculty.create({ faculty,fee,year })
    let faculties = await Faculty.find()
    res.render('faculty/faculty-list', { faculty: faculties })
}

module.exports = {
    getFaculties,
    getFaculty,
    createFacultyView,
    createFaculty,
}