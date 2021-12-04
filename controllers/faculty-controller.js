//const faculty = require("../models/faculty.json");
const Faculty = require("../models/faculty-model");
const fs = require('fs');


async function getFaculties(req, res) {
    let faculty = await Faculty.find()
    res.render('faculty/faculty-list', { faculty: faculty });
};

async function getFaculty(req, res) {
    const { id } = req.params;
    let newFaculty = await Faculty.findOne({ _id: id });
    res.render('faculty/faculty', { faculty: newFaculty })
};

async function createFacultyView(req, res) {
    res.render('faculty/faculty-create')
};

async function createFaculty(req, res) {
    const { faculty , fee , year } = req.body
    await Faculty.create({ faculty , fee , year })
    let faculties = await Faculty.find()
    console.log(faculties)
    res.render('faculty/faculty-list', { faculty: faculties })
};

async function editFaculty(req, res) {
    const { id } = req.params;
    let newFaculty = await Faculty.findOne({ _id: id });
    res.render('faculty/faculty-create', { faculty: newFaculty })
};

async function deleteFaculty( req, res ){
    const { id } = req.params;
    await Faculty.deleteOne({ id })
    let newFaculty = await Faculty.find()
    res.render('faculty/faculty-list', { faculty: newFaculty });
};

module.exports = {
    getFaculties,
    getFaculty,
    createFacultyView,
    createFaculty,
    editFaculty,
    deleteFaculty,
}