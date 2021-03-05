
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
