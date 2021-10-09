const express = require('express')
const app = express();
require('dotenv').config()
const fs = require('fs');
const path = require('path')
const pug = require('pug');
const port = process.env.port
const student = require("./models/student-personal.json")
const generateProfession = require('./models/generateProfession')
const profession = require('./models/profession.json')


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/student-personal', (req, res) => {
  res.render('student-personal', { student: student })
})

app.get('/profession', (req, res) => {
  res.render('profession', { profession: profession })
})

app.get('/generate', (req, res) => {
  generateProfession
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})