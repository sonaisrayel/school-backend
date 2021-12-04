function validation() {
    let student_name = document.getElementById("name");

    if (!student_name.value) {
        student_name.style.borderColor = "red"
        student_name.value = "Gri anund"
    }


    let student_surname = document.getElementById("surname");
    console.log(student_surname);


    if (!student_surname.value) {
        student_surname.style.borderColor = "red"
        student_surname.value = "Gri azganunt"
    }

    let student_hayranun = document.getElementById("hayranun");
    console.log(student_hayranun);


    if (!student_hayranun.value) {
        console.log(student_hayranun.value);
        student_hayranun.style.borderColor = "red"
        student_hayranun.value = "Gri der hayranun@"

    }

    let student_tiv = document.getElementById("tiv");
    console.log(student_tiv);


    if (!student_tiv.value) {
        console.log(student_tiv. value);
        student_tiv.style.borderColor = "red"
        student_tiv.value = "Gri der cnndyan tiv@"

    }
    let student_tel = document.getElementById("tel");
    console.log(student_tel);


    if (!student_tel.value) {
        console.log(student_tel. value);
        student_tel.style.borderColor = "red"
        student_tel.value = "Greq dzer heraxosahamar@"

    }
    let student_email = document.getElementById("email");
    if (!student_email.value) {
        console.log(student_email. value);
        student_email.style.borderColor = "red"
        student_email.value = "Greq dzer gmail"

    }

}



