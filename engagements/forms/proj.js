document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    

    const personname = document.getElementById('personname').value;
    const shmemail = document.getElementById('shmemail').value;
    const pash = document.getElementById('pash').value;
    const datt = document.getElementById('datt').value;

    if (!personname || !shmemail || !pash) {
        alert("You need a name and Email and password");
        return;
    }

    if (pash.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }


    const formData = {
        name: personname,
        email: shmemail,
        password: pash,
        age: datt
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);

            message.textContent = response.message;

            alert("Form submitted!");

            document.getElementById('myForm').reset();

        } else if (xhr.readyState === 4) {
            alert("Didn't work");
        }
    };

    xhr.send(JSON.stringify(formData));
    alert('Worked: ${personname}');
    alert("Form Submitted");


});