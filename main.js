function validateForm() {
    const name = document.getElementById('name').value.trim();
    const doctr = document.getElementById('doctor').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();

    if (name === "" || doctr === "" || date === ""||time==="") {
        alert("All fields are required!");
        return false;
    }

    alert("Thank you for contacting us!");
    return true;
}
