const faculty = require("../models/profession.json");

async function getFacultys(req, res) {
    res.render('profession', { faculty: faculty })
}

async function getFaculty(req, res) {
    const { id } = req.params;
    const newFaculty = faculty.filter((stu) => {
        return facul.id == id
    })
    res.render('profession', { faculty: newFaculty })
}

module.exports = {
    getFacultys,
    getFaculty
}