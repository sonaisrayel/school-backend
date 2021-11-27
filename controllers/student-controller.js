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
   //fs.writeFileSync('students.json',JSON.stringify(student));
}

async function  editStudentView (req,res){
    const { id } = req.params;   
    let stu = student.filter(stud => stud.id == id);
    res.render('student-edit',  { student:stu } );
}

async function editStudent(req,res){
    //vercnel tvyal id-ov json-@ ev popoxel tvyalnery
    console.log(req.body);
} 

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    createStudentView ,
    editStudentView,
    editStudent 
}