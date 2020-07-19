
// I worked with my tutor early on and what I was doing didn't make since to me so I found a this youtube video and this makes since for the generator functions - https://www.youtube.com/watch?v=duNmhKgtcsI

// Generator functions - http://www.net-comber.com/charset.html

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