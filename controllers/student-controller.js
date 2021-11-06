const student = require("../models/student-personal.json");
const fs = require('fs');

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

//Get request
async function createStudentView(req,res){
    res.render('student-create')
}

async function createStudent(req,res){
    const { name,surname,middle,gender,dates,phone,email } = req.body
   //example
   //const name = req.body.name
   //const surname = req.body.surname
   let id =  student.length + 1 ;
   let newStudent = req.body;
   newStudent.id = id;
   student.push(req.body);
   fs.writeFileSync('students.json',JSON.stringify(student));
}
 

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    createStudentView
    
}