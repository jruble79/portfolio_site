

# Jeff Ruble's Final Project
#### For Code Louisville's Spring 2021 front-end web development course

---

## Project description: 
This is a speculative website that would host work from my professional career as a newspaper layout designer and graphic artist/illustrator. It consists of a homepage with a strong visual presense, a resume page and a separate contact form that would be used to let visitors send messages to me. 

The three total pages can be accessed via the main navigation links at the top of the designs. Links for the Latest News section currently go nowhere.

The site has been verified to work with Chrome, Safari, Firefox and Edge.

---

### Media Queries
- Index.html
    - @500px Latest News section moves into two column layout.
    - @800px Multi- column/row layout engaged for a more dynamic display.
- Resume.html
    - @650px Two column layout engaged.
- Contact.html
    - @800px Puts Name and Email fields side by side.

### CSS Features
- Navigation Menu
    - Always visible, but moves from a layout where the site name is above the two side-by-side links in a mobile view into a horizontal arrangememt for tablet-sized screens and larger.
- Flexbox and CSS Grid
    - At 500px Latest News section changes layout using CSS Grid. The images and text in those modules switch to a vertical layout using Flexbox.
    - Index.html uses Grid to move into a multi-row/column layout starting at 800px. The Latest News section moves into a four column layout.
    - Resume.html uses Grid to go into two columns at 650px.
    - Contact.html uses Grid to place the Name and Email inputs side by side at 800px.
- CSS Animation
    - Top-of-page navigation text links get an underlining effect.
    - All pages have a sliding animation for the large text overlayed on the main blue image.
    - Footer icons enlarge on hover state.
    - Index.html uses keyframes to crossfade images.
    - On contact.html the form dissolves after clicking "Submit" and the inputs are displayed back to the user with a sliding animation.

### JavaScript Features
- Create JavaScript loop to dynamically display HTML
    - Resume.html loops through Details elements and opens details lists by adding an "open" attribute when window size matches media queries.
- Show/Hide Elements
    - Resume.html automatically opens details lists by adding an "open" attribute when window size matches media queries.
        - At 650px, listings under the My Experience heading expand.
        - At 800px, My Skills section expands
- Contact Form
    - Checks for blank inputs or missing @ symbols for email.
    - Displays error messages aligned to input fields and colors those fields until corrected.
    - Captures input values and displays them back to the user after hitting "Submit".
- Display three variables
    - Contact.html captures the Name, Email and Message values and displays them back to the user by replacing the form element when "Submit" button is clicked.
