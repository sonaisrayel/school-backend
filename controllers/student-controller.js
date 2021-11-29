//const student = require("../models/student-personal.json");
const Student = require('../models/student-model');
const fs = require('fs');

async function getStudents(req, res) {
    let student = await Student.find();
    res.render('student-list', { student: student })
}

// async function getStudent(req, res) {
//     //req -  ինչ որ մեզ ուղարկվել է բրաուզերից
//     // res - ինչ որ մենք ենք ուղարկում հետ
//     const { id } = req.params;
//     console.log('id', id);
//     let newStudent = await Student.findOne({ _id: id });
//     res.render('student', { student: newStudent })
// }

//Get request
async function createStudentView(req, res) {
    res.render('student-create')
}

async function createStudent(req, res) {
    const { name, surname, middlename, gender, birthday, mobile, email } = req.body;
    let student = await Student.create({ name, surname, middlename, gender, birthday, mobile, email });
    let students = await Student.find();
    res.render('student-list', { student: students })
}

// async function editStudentView(req, res) {
//     const { id } = req.params;
//     let stu = student.filter(stud => stud.id == id);
//     res.render('student-edit', { student: stu });
// }

// async function editStudent(req, res) {
//     //vercnel tvyal id-ov json-@ ev popoxel tvyalnery
//     console.log(req.body);
// }

module.exports = {
    getStudents,
   //getStudent,
    createStudent,
    createStudentView,
    //  editStudentView,
    //  editStudent
}