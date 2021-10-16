const fs = require('fs');

const profession = ["History", "Education Management", "Pharmacy", "Public Management", "English Language and Literature", "Sociology", "Radiophysics and Electronics", "Informatics and Applied Mathematics", "Psychology", "Journalism", "Human resource management", "Economics", "Public Finance", "Marketing Communications", "Auditing", "Applied Statistics and data science", "Pedagogy and Methodology (elementary education)", "Logopaedics", "Arabic Studies", "Russian Language, Linguistics and Cross-cultural Communication", "Jurisprudence", "Geology", "Biology", "Mechanics", "Economics", "Physics, Nuclear Reactor Physics", "Environmental Chemistry", "Armenian Language and Literature", "Art Studies", "Physical culture and sport", "Kinesiologist"];
const faculty = ["Faculty of History", "Faculty of Chemistry", "Faculty of Physics", "Faculty of Economics and Management", "Faculty of Mathematics and Mechanics", "Faculty of Biology", "Faculty of Geography and Geology", "Faculty of Law", "Faculty of Russian Philology", "Faculty of Oriental Studies", "Faculty of Journalism", "Faculty of Philosophy and Psychology", "Faculty of Informatics and Applied Mathematics", "Faculty of Radiophysics", "Faculty of Sociology", "Faculty of European Languages and Communication", "Faculty of International Relations", "Faculty of Theology", "Institute of Pharmacy", "Pedagogy and Education Development Center", "Faculty of Health Technologies, Sports Tourism and Management", "Coaching and pedagogical faculty", "Faculty of Management", "Faculty of Finance", "Faculty of Special and Inclusive Education", "Faculty of Marketing and Business Management", "Faculty of Computer Science and Statistics", "Faculty of Accounting and Auditing", "Faculty of Primary Education"];
const pay = ["1000000", "300000", "480000", "250000", "560000", "600000", "410000", "550000", "1200000", "200000", "841000", "235470", "400000", "600000", "845100"];
const study_year = ["2017-2018", "2018-2019", "2011-2012", "2020-2021", "2005-2006", "2001-2002", "2002-2003", "2008-2009", "2015-2016", "2016-2017"]

let array = [];

for (let i = 0; i < profession.length; i++) {
    if (profession[i] && faculty[i] && pay[i] && study_year[i]) {
        array.push({
            "id": i + 1,
            "profession": profession[i],
            "faculty": faculty[i],
            "pay": pay[i],
            "study_yea": study_year[i]
        })
    }
}

fs.writeFileSync("models/profession.json", JSON.stringify(array))

