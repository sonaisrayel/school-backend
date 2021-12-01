const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
    profession: String,
    faculty: String,
    pay: String,
    study_year: String,
});

const FacultyModel = mongoose.model('Faculty', FacultySchema);
module.exports = FacultyModel