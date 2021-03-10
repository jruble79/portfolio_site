
/////////////////////////////////////////////////////////////////////
// DETAILS OPENER
// Opens the resume.html details sections in Main 
// when #Container display is set to "flex"
/////////////////////////////////////////////////////////////////////

const jobDetails = document.querySelectorAll("main details");
const container = document.getElementById("container");

window.addEventListener('load', openDetails);
window.addEventListener('resize', openDetails);

function openDetails() {
    for (let i = 0; i < jobDetails.length; i++) {
        if (window.getComputedStyle(container).display == "block") {
            jobDetails[i].removeAttribute("open");
        } else {
            jobDetails[i].setAttribute("open", "");
        };
    }
}


/////////////////////////////////////////////////////////////////////
// CONTACT FORM VALIDATION
// XxXxXx 
// XxXxXx
/////////////////////////////////////////////////////////////////////

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const msgInput = document.getElementById("msg");


// Check if input value is blank after leaving focus
// Display error message if true

form.addEventListener("focusout", (event) => {
    if (event.target.value == "") {
        event.target.style.background = "red";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">KJLKJWHLJKW</p>';
    } 
});

emailInput.addEventListener("focusout", (event) => {
    if (emailInput.value.includes("@")) {
        emailInput.style.background = "inherit";
    } else {
        event.target.style.background = "red";
        event.target.nextSibling.nextSibling.innerHTML = '<p class="error">KJLKJWHLJKW</p>';
    }
});

