/* 
Write a JavaScript function named “printMessage” that prints "I love PHP" in the console.Call the printMessage function to execute it.
// Define the printMessage function

// Call the printMessage function

// Output in the console: 
I love PHP

function printMessage(){
    console.log("I love PHP"); 
}
printMessage(); 


/*
Write a JavaScript function named “printLanguages” that takes an array of languages as an argument.Inside the function, use a for...of loop to iterate over each element in the array.
For each language in the array, print it to the console using console.log().

// Define the printLanguages function

// The array of languages

const languagesArray = ['PHP', 'JavaScript', 'Python'];

// Call the printLanguages function with the array (languagesArray) as argument

// Output in the console:
PHP
JavaScript
Python
*/
// Define the printLanguages function
function printLanguages(languagesArray) {
    for (const language of languagesArray) {
        console.log(language);
    }
}
// The array of languages
const languagesArray = ['PHP', 'JavaScript', 'Python'];
// Call the printLanguages function with the array (languagesArray) as argument
printLanguages(languagesArray);

