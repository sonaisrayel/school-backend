const faculty = require("../models/profession.json");

async function getFaculties(req, res) {
    console.log(faculty);
    res.render('faculty',{ faculty:faculty });
}

async function getFaculty(req, res) {
    const { id } = req.params;
    const newFaculty = faculty.filter((facul) => {
        return facul.id == id
    })

    res.render('faculty', { faculty: newFaculty })
}

module.exports = {
    getFaculties,
    getFaculty
}