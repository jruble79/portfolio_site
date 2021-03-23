
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const msgInput = document.getElementById("msg");
const generatedMsg = document.getElementById("generated-msg");
const textOverlay = document.getElementById("text-overlay");
const button = document.getElementById("button");

let userName;
let userEmail;
let userMsg;


/////////////////////////////////////////////////////////////////////
// CONTACT FORM VALIDATION
// Check for blank inputs when focus leaves.
// Add message and color highlight if true.
// Clear color and message when corrected.
/////////////////////////////////////////////////////////////////////

button.disabled = true;
form.addEventListener("input", buttonEnable);


nameInput.addEventListener("focusout", (event) => {
    if (event.target.value == "") {
        event.target.style.background = "rgb(255, 251, 235)";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include your name</p>';
    }
    else {
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
        nameInput.style.background = "rgb(240, 240, 240)";
        userName = nameInput.value;
        buttonEnable();
    }
});

emailInput.addEventListener("focusout", (event) => {
    if (emailInput.value.includes("@")) {
        emailInput.style.background = "rgb(240, 240, 240)";
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
        userEmail = emailInput.value;
        buttonEnable();
    }
    else {
        event.target.style.background = "rgb(255, 251, 235)";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include a valid email address</p>';
    } 
});

msgInput.addEventListener("focusout", (event) => {
    if (event.target.value == "") {
        event.target.style.background = "rgb(255, 251, 235)";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">Please include a message</p>';
    } else {
        event.target.nextSibling.nextSibling.innerHTML = '<p></p>';
        msgInput.style.background = "rgb(240, 240, 240)";
        userMsg = msgInput.value;
        buttonEnable();
    }
});

function buttonEnable() {
    if (nameInput.value != "" && emailInput.value != "" && msgInput.value != "") {
        clearInputColor();
        button.disabled = false;
    }
}

function clearInputColor() {
    if (event.target.style.background == "red") {
        event.target.style.background = "white";
    } 
}

/////////////////////////////////////////////////////////////////////
// CONTACT FORM SUBMISSION
// Replace elements on page with a thank you message.
// Display a copy of the message.
/////////////////////////////////////////////////////////////////////



function displayThanks() {
    textOverlay.innerHTML = 
        `
        <h1>Thank you!</h1>
        <h4>A copy of your message is below.</h4>
        `;
    removeForm();
}

function removeForm() {
    form.addEventListener("click", () => form.style.opacity = '0');
    form.addEventListener("transitionend", () => form.remove());
    displayMsg();
}

function displayMsg() {
    generatedMsg.innerHTML = 
    `
    <h4>Name: ${userName}</h4>
    <h4>Email: ${userEmail}</h4>
    <p>${userMsg}</p>
    `;
}