
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

// const mediaQueryA = window.matchMedia("(min-width: 650px)");
// const mediaQueryB = window.matchMedia("(min-width: 800px)");
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

// mediaQueryA.addEventListener("change", openDetails);
// openDetails(mediaQuery);


const mediaQueryA = window.matchMedia("(min-width: 650px)");
const mediaQueryB = window.matchMedia("(min-width: 800px)");
const mainDetails = document.querySelectorAll("main details");
const asideDetails = document.querySelectorAll("aside details");

function openMain (e) {
    for (let i = 0; i < mainDetails.length; i++) {
        if (e.matches) {
            mainDetails[i].setAttribute("open", ""); 
        } else {
            mainDetails[i].removeAttribute("open");
        };
    }
}

function openAside (e) {
    for (let i = 0; i < asideDetails.length; i++) {
        if (e.matches) {
            asideDetails[i].setAttribute("open", ""); 
        } else {
            asideDetails[i].removeAttribute("open");
        };
    }
}

mediaQueryA.addEventListener("change", openMain);
openMain(mediaQueryA);

mediaQueryB.addEventListener("change", openAside);
openAside(mediaQueryB);