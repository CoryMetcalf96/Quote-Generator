// Document Notes:
// Adding a title to an HTML element gives it hover text.
// rgba allows you to control the alpha transparency.
// Add 'box-shadow' to have your element cast a shadow.
// ReM stands for releative size to root (the html, a default of 16) so using rem helps with responsive design.
// Using Flexbox, you can space two buttons across an element equaly using space-between for justify-content.
// In CSS, use cursor: pointer; to signify when an element is able to be clicked.
// increase the brightness to signify a button hover that's clickable.
//  To show a button being pressed, use the button:active selection in CSS and transform: translate(0, 0.3rem) to have it push in with the button press.
// To have a variable wait until there's data readily available: const apiurl = 'https://type.fit/api/quotes';

//  Variables
let apiQuotes = [];


// Get Quotes From API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch (apiUrl)
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (error) {
        //handle your error
    }
}

// On load
getQuotes();