
/////////////////////////////////////////////////////////////////////
// CONTACT FORM VALIDATION
// Check for blank inputs when focus leaves
// Add message and color highlight if true
// Clear color and message when corrected
/////////////////////////////////////////////////////////////////////

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const msgInput = document.getElementById("msg");

nameInput.addEventListener("focusout", (event) => {
    if (event.target.value == "") {
        event.target.style.background = "red";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include your name</p>';
    } else {
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
        nameInput.style.background = "rgb(240, 240, 240)";
    }
});

emailInput.addEventListener("focusout", (event) => {
    if (emailInput.value.includes("@")) {
        emailInput.style.background = "rgb(240, 240, 240)";
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
    } else {
        event.target.style.background = "red";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include a valid email address</p>';
    } 
});

msgInput.addEventListener("focusout", (event) => {
    if (event.target.value == "") {
        event.target.style.background = "red";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include a message</p>';
    } else {
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
        msgInput.style.background = "rgb(240, 240, 240)";
    }
});

function clearInputColor(form) {
    if (form.target.style.background == "red") {
        form.target.style.background = "inherit";
    }
}