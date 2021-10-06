
const names = ["Armen","Karen","Suren","Hayk","Tigran","Poghos", "Petros", "Artyom", "Gevorg", "Aghvan", "Taron", "Mkhitar", "Stepan"];
const surname = ["Amiryan","Karapetyan","Surenyan", "Poghosyan","Davtyan","Petrosyan", "Grigoryan", "Sargsyan", "Mehrabyan", "Stepanyan", "Mkhitaryan", "Gyozalyan", "Zaqaryan", "Navoyan"];
const age = ["30","20","11", "62","12","31", "5", "72", "14", "44", "37", "50", "22", "80"];

let array = [];


for(let i = 0; i < names.length; i++) {
    let obj = {};
    obj.name = names[i];
    obj.surname = surname[i];
    obj.age = age[i];
    array.push(obj);
}
console.log(array);

const fs = require('fs');

let data = JSON.stringify(array, null, 2);
fs.writeFileSync('student.json', data);