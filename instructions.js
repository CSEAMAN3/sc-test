// you should have an array which lists all of the store hours.

// you should be getting your html table element by its ID and storing it in a variable

// if you have a variable named state,  which is an object, that stores an array for all cookie stands delete it.

// you should have a constructor function for creating a new store

// you should have a prototype to calculate customers each hour

// you should have a prototype to calculate cookies each hour

// you should have a prototype to render the store data

// you should have created new instances of your cookie stand for
// Seattle, Tokyo, Dubia, Paris, Lima

// You need to create an array that will store all your cookie stands,
// as we have already hard coded some cookie stands put these in the array

// You should have a function to generate a random number

// you should have a function to create a header row.
// I have taken the code out of the function so it just runs on page load.
// The code is now in the global scope
// This code out of the function should run as follows:
// create a table row and store it in a variable using the let keyword
// create a table header and store it in a variable using the let keyword
// Set the content of the table header to "Location"
// append the table header to the table row

// create a for loop that loops through the hours array
// create a table header
// set the content of the table header to hours[i]
// append the table header to the table row

// outside of the loop you should:
// create a table header
// set the text content to "Totals"
// append the table header to the table row
// append the table row to the table Element

// A for loop should loop through the new array you created for all your stores
// the for loop should then call the render method on each cookie store object in your array.

// you should have a function to create a footer row.
// I have taken the code for the footer row and taken it out of the function
// the code is now in the global scope
// Create a table row element and store it in a variable using the const keyword
// create a function to render the totals
// inside the function:
// You should create a table heading element and store it in a variable using the let keyword
// set the text content for the table heading to "Hourly Totals"
// append the table heading to the table row, this table row was created outside of the render totals function
// declare a variable using the let keyword named total and give it a value of 0
// You should then have a for loop which loops through the hours array.
// inside the loop you should:
// declare a variable using the let keyword  named "hourlyTotal"  and set the value to 0
// run another loop (this loop is inside of the current for loop) which loops through the array with all your stores.
// inside this loop change the "hourlyTotals" to be += to (example) allShops[i].cookiesEachHour[j]
// outside of the inner loop create a table header using the let keyword
// set the text content of this table header to hourlyTotal
// append the table header to the table row
// set the total variable you created to be += hourlyTotal
// close the outter loop

// declare a variable using the let keyword which creates a table header element this should be named something that indicates
// the final total
// set the text content of this table header to the variable total
// append this table header to the table row you created.
// append the table row to the table element - this is the variable you created at the top of the page to get the table by it's id

// call / invoke the function you created to render the totals.

// declare a variable that will get the form by its ID

// create an event listner that will listen for a submit then run a function that will:
// prevent the defualt page reload on submit rememeber event.preventDefault()
// declare a variable for each input that gets the value from the event.target.name
// create a new instance of your cookieStand using the values from the variables you just created.
// reset the table row using innerHTML() and set it to an empty string
// call the render function of your newly created cookieStand
// using document.getElementById get each of the inputs from your form and set the value to an empty string.
// call/invoke your function which renders the totals.
