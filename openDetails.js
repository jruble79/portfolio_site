
/////////////////////////////////////////////////////////////////////
// DETAILS OPENER
// Opens the resume.html details sections in Main 
// when #Container display is set to "flex"
/////////////////////////////////////////////////////////////////////

// const jobDetails = document.querySelectorAll("main details");
// const container = document.getElementById("container");

// window.addEventListener('load', openDetails);
// window.addEventListener('resize', openDetails);

// function openDetails() {
//     for (let i = 0; i < jobDetails.length; i++) {
//         if (window.getComputedStyle(container).display == "block") {
//             jobDetails[i].removeAttribute("open");
//         } else {
//             jobDetails[i].setAttribute("open", "");
//         };
//     }
// }


/////////////////////////////////////////////////////////////////////
// DETAILS OPENER GRID REFACTOR
// Opens the resume.html details sections in Main 
// when @media (min-width: 800px) is called
/////////////////////////////////////////////////////////////////////

// const mediaQuery = window.matchMedia("(min-width: 800px)");
// const detailsList = document.querySelectorAll("details");

// function openDetails (e) {
//     for (let i = 0; i < detailsList.length; i++) {
//         if (e.matches) {
//             detailsList[i].setAttribute("open", ""); 
//         } else {
//             detailsList[i].removeAttribute("open");
//         };
//     }
// }

// mediaQuery.addListener(openDetails);
// openDetails(mediaQuery);

const mediaQuery = window.matchMedia("(min-width: 800px)");
const detailsList = document.querySelectorAll("details");

function openDetails (e) {
    for (let i = 0; i < detailsList.length; i++) {
        if (e.matches) {
            detailsList[i].setAttribute("open", ""); 
        } else {
            detailsList[i].removeAttribute("open");
        };
    }
}

mediaQuery.addEventListener("change", openDetails);
openDetails(mediaQuery);