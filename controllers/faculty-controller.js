const faculty = require("../models/profession.json");

async function getFaculties(req, res) {
    res.render('faculty-list',{ faculty:faculty });
}

async function getFaculty(req, res) {
    const { id } = req.params;
    const newFaculty = faculty.filter((fac) => {
        return fac.id == id
    });    
    res.render('faculty', { faculty: newFaculty })    
}

async function createFacultyView(req, res){
    res.render('faculty-create')
}

module.exports = {
    getFaculties,
    getFaculty,
    createFacultyView
}