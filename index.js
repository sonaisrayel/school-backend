const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path')
const pug = require('pug');
// const student = require("./student.json")
const port = 4000



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/student-personal', (req, res) => {
//    fs.writeFileSync('req.json', JSON.stringify(req.query))
   res.render('student-personal')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})