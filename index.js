const express = require('express')
const app = express();
const fs = require('fs');
const student = require("./student.json")
const personal = require("./student-personal.json")
const profesion = require("./profesion.json")

const port = 3000

app.get('/student', (req, res) => {
   //    fs.writeFileSync('req.json', JSON.stringify(req.query))
   res.send(student)
})

app.get('/student-personal', (req, res) => {
   //    fs.writeFileSync('req.json', JSON.stringify(req.query))
   res.send(personal)
})

app.get('/profesion', (req, res) => {
   //    fs.writeFileSync('req.json', JSON.stringify(req.query))
   res.send(profesion)
})


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})