const express = require('express')
const app = express();
const fs = require('fs');
const student = require("./student.json")
const port = 4000

app.get('/student-personal', (req, res) => {
//    fs.writeFileSync('req.json', JSON.stringify(req.query))
   res.send(student)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})