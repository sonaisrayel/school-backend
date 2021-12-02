require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use(bodyParser.json())

const port = process.env.port

const mongoDb = require('./libs/db')
mongoDb.connect();
const {  getStudents,createStudent,createStudentView,getStudent } = require("./controllers/student-controller");

const {  getProfessions, getProfession,createProfessionView,deleteProfession, createProfession,  editProfession  } = require("./controllers/profession-controller");

//const { getProfessions, getProfession,createProfessionView,deleteProfession, createProfession } = require("./controllers/profession-controller");
//const { getStudents, getStudent,createStudent,createStudentView,editStudent, editStudentView } = require("./controllers/student-controller");
const { getFaculty, getFaculties, createFacultyView, createFaculty} = require("./controllers/faculty-controller");
const { getTeachers, getTeacher, createTeacher, createTeacherView, editTeacher, editTeacherView } = require("./controllers/teacher-controller.js");

//Middlewares
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));

//routes
app.get('/students', getStudents);
app.get('/students/create', createStudentView);
app.get('/students/:id', getStudent);
//app.get('/students/edit/:id', editStudentView);

app.post('/students',createStudent);
//app.post('/students/edit',editStudent);

//teacher 
app.get('/teachers', getTeachers);
app.get('/teachers/create',createTeacherView);
app.get('/teachers/:id',getTeacher);
app.get('/teachers/edit/:id', editTeacherView);
app.get('/teachers/edit',editTeacher);
app.post('/teachers',createTeacher);

//faculty
app.get('/faculties', getFaculties);
app.get('/faculties/:id', getFaculty);
app.get('/facultiy/create', createFacultyView);
app.post('/faculties', createFaculty)


//profession
app.get('/professions', getProfessions);
app.get('/professions/:id', getProfession);
app.get('/professions/create', createProfessionView);
app.get('/professions/delete/:id', deleteProfession);
app.post('/professions',createProfession);
//app.get('/professions/edit/:id', editProfessionView);
//app.post('/professions/edit',editProfession);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})