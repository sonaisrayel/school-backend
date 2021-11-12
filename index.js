const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')
const port = process.env.port
const bodyParser = require('body-parser')

const { getProfessions, getProfession } = require("./controllers/profession-controller");
const { getStudents, getStudent,createStudent,createStudentView } = require("./controllers/student-controller");
const { getFaculty, getFaculties, createFacultyView} = require("./controllers/faculty-controller");

const { getTeachers } = require("./controllers/teacher-controller.js");
app.use(bodyParser.json())

//Middlewares
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({
  extended: true
}))

//routes
app.get('/students', getStudents);
app.get('/students/create', createStudentView);
app.get('/students/:id', getStudent);
app.post('/students',createStudent);


//teacher 
app.get('/teachers', getTeachers);


app.get('/faculties', getFaculties)
app.get('/faculties/:id', getFaculty)
app.get('/faculty/create', createFacultyView)

app.get('/professions', getProfessions)
app.get('/professions/:id', getProfession)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})