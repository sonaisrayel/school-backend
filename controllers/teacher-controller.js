const teacher = require("../models/teacher.json");
const fs = require('fs');

async function getTeachers(req, res) {
    res.render('teacher-list', { teacher: teacher })
}

async function getTeacher(req, res) {
    const { id } = req.params;
    const newTeacher = teacher.filter((teach) => {
        return teach.id == id
    });    
    res.render('teacher', { teacher: newTeacher })    
}

async function createTeacherView(req,res){
    res.render('teacher-create')
}

async function createTeacher(req,res){
    let id =  teacher.length + 1 ;
    let newTeacher = req.body;
    newTeacher.id = id;
    teacher.push(newTeacher);
}

module.exports = {
    getTeachers,
    getTeacher,
    createTeacher,
    createTeacherView
}