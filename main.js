// Define target parent for selection
const listDiv = document.querySelectorAll(".collapsible-list");

// Loop through constants
for (let i=0; i<listDiv.length; i++) {

    // Select LI Element
    listDiv[i].addEventListener('click', (event) => {
        if (event.target.tagName == 'LI' && event.target.className != 'not-toggle') {
            const collapsible = event.target.querySelector('ul');
            toggle(collapsible);
        }
    });


    // Toggle UL Element
    function toggle(collapsible) {
        if (collapsible.style.display == 'block') {
            collapsible.style.display = 'none';
        } else {
            collapsible.style.display = 'block';
        }
    };

};