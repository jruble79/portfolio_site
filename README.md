

# Jeff Ruble's Final Project
#### For Code Louisville's Spring 2021 front-end development course

## Project description: 
This is a speculative website that would host creative work from my professional career as a newspaper layout designer and graphic artist/illustrator. It consists of a homepage with a strong visual presense, a resume page and a contact form that would be used to let visitors send messages to me.

### CSS Features
- Flexbox and CSS Grid
    - Index.html moves into a multi-column layout starting at 800px
    - Resume.html goes two columns at 650px
- CSS Animation
    - All pages have sliding animation for text-overlay h1 and h4 elements
    - On contact.html the form dissolves after clicking "Submit" and the inputs are displayed with a sliding animation.

### Javascript Features
- Contact Form
    - Checks for blank inputs or missing @ symbols for email
    - Displays error messages aligned to input fields and colors those fields until corrected
    - Captures input values and displays them by replacing elements
- Create JavaScript loop to dynamically display HTML
    - Resume.html automatically opens details lists when window size matches media queries
- Display three variables
    - Contact.html captures input values and displays them by replacing the form element when "Submit" button is clicked.
- Show/Hide Elements
    - Resume.html automatically opens details lists when window size matches media queries
        - At 650px, listings under the My Experience heading expand.
        - At 800px, My Skills section expands