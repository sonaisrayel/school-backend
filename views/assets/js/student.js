function validation(e) {
    let student_name = document.getElementById("name");
    console.log(student_name);
    //let hide = document.getElementById("bubu") 

    if (!student_name.value) {
        console.log(student_name.value);
        student_name.style.backgroundColor = "red"
        student_name.value = "Gri anund"
    }
    // student_name.style.backgroundColor ="red"
    // student_name.value = "Gri anund"

    // hide.type = "text"
    // span.style.display = "block"
}




