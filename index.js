const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')
const port = process.env.port
const bodyParser = require('body-parser')

const { getProfessions, getProfession,createProfessionView,deleteProfession } = require("./controllers/profession-controller");
const { getStudents, getStudent,createStudent,createStudentView,editStudent, editStudentView } = require("./controllers/student-controller");
const { getFaculty, getFaculties, createFacultyView} = require("./controllers/faculty-controller");

const { getTeachers, getTeacher, createTeacher, createTeacherView } = require("./controllers/teacher-controller.js");
app.use(bodyParser.json())

//Middlewares
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));

//routes
app.get('/students', getStudents);
app.get('/students/create', createStudentView);
app.get('/students/:id', getStudent);
app.get('/students/edit/:id', editStudentView);

app.post('/students',createStudent);
app.post('/students/edit',editStudent);

//teacher 
app.get('/teachers', getTeachers);
app.get('/teachers/create',createTeacherView);
app.get('/teachers/:id',getTeacher);

app.post('/teachers',createTeacher);


app.get('/faculties', getFaculties);
app.get('/faculties/:id', getFaculty);
app.get('/faculty/create', createFacultyView);

app.get('/professions', getProfessions);
app.get('/professions/:id', getProfession);
app.get('/professions/create', createProfessionView);
app.get('/professions/delete/:id', deleteProfession);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})