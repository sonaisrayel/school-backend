
const names = ["Armen","Karen","Suren"];
const surname = ["Amiryan","Karapetyan","Surenyan"];
const age = ["30","20","11"];

let array = [];

for (let i = 0; i < names.length; i++) {
    array.push(
        {
            "id": i+1,
            "name":names[i],
            "age": age[i],
            "surname":surname[i]
        }
    )
}

