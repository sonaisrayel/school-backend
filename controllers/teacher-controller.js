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

module.exports = {
    getTeachers,
    getTeacher
}