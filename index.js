const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const port = process.env.port;
const bodyParser = require('body-parser');
const generateProfession = require('./models/generateProfession');
const { getProfessions, getProfession } = require("./controllers/profession-controller");
const { getStudents, getStudent } = require("./controllers/student-controller");
const { getFaculty, getFaculties } = require("./controllers/faculty-controller");


app.use(bodyParser.json())

//Middlewares
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


http://localhost:4000/students

//routes
app.get('/students', getStudents)
app.get('/students/:id', getStudent)

app.get('/faculties', getFaculties)
app.get('/faculties/:id', getFaculty)

app.get('/professions', getProfessions)
app.get('/professions/:id', getProfession)

app.get('/generate', (req, res) => {
  generateProfession
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})