const teacher = require("../models/teacher.json");
const fs = require('fs');

async function getTeachers(req, res) {
    res.render('teacher-list', { teacher: teacher })
}

module.exports = {
    getTeachers,
 
}