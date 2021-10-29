const student = require("../models/student-personal.json");

async function getStudents(req, res) {
    res.render('student-personal', { student: student })
}

async function getStudent(req, res) {
    const { id } = req.params;
    const newStudent = student.filter((stu) => {
        return stu.id == id
    })
    res.render('student-personal', { student: newStudent })

    
}

module.exports = {
    getStudents,
    getStudent
}