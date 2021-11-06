const student = require("../models/student-personal.json");

async function getStudents(req, res) {
    res.render('student-list', { student: student })
}

async function getStudent(req, res) {
    //req -  ինչ որ մեզ ուղարկվել է բրաուզերից
    // res - ինչ որ մենք ենք ուղարկում հետ
    const { id } = req.params;
    const newStudent = student.filter((stu) => {
        return stu.id == id
    });
    
    res.render('student', { student: newStudent })    
}

async function createStudent(req,res){
    res.render('student-create')
}
 

module.exports = {
    getStudents,
    getStudent,
    createStudent
    
}