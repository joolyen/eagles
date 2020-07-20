
// I worked with my tutor early on and what I was doing didn't make since to me so I found a this youtube video and this makes since for the generator functions - https://www.youtube.com/watch?v=duNmhKgtcsI

// DOM Elements
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');

// Object

var password = {
    lower: false,
    upper: false,
    number: false,
    symbol: false,
    length: 0
}

if(generateEl){
     generateEl.addEventListener('click', (e) => {
         e.preventDefault();
         passwordCriteriaHandler();
         console.log(password);
     });
 }



// Generator functions - http://www.net-comber.com/charset.html

function getPasswordLength(){
     password.length = prompt("Please choose a password between 8 and 128 characters long.");
     if(length < 8 || length > 128){
        alert("that's not the right size");
        password.length = prompt("Please choose a password between 8 and 128 characters long.");
     }
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function passwordCriteriaHandler(){
    getPasswordLength();
    confirmLowercase();
    confirmUppercase();
    confirmNumber();
    confirmSymbol();
}

function confirmLowercase(){
    password.lower = confirm("Would you like to include lowercase characters in your password?");
}

function confirmUppercase(){
    password.upper = confirm("Would you like to include uppercase characters in your password?");
}

function confirmNumber(){
    password.number = confirm("Would you like to include numbers in your password?");
}

function confirmSymbol(){
    password.symbol = confirm("Would you like to include special characters in your password?");
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
