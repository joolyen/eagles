
var lowerCase = [...'abcdefghijklmnopqrstuvwxyz']
var upperCase = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()]
var nums = [...'0123456789']
var specialChars = [...'!@#$%^&*()'] 
var finalResults = []

console.log(nums, specialChars)

function generatePassword() {

    userLowercase = confirm("Would you like to use lowercase letters in your password?");   
    if (userLowercase){
        finalResults.push(lowerCase);
    }
    else {

    }
    userUppercase = confirm("Would you like to use uppercase letters in your password?");
    if (userUppercase){
        finalResults.push(upperCase);
    }
    else {

    }
    userNums = confirm("Would you like to use numbers in your password?");
    if (userNums){
        finalResults.push(nums);
    }
    else {

    }
    userSpecialChars = confirm("Would you like to use special characters in your password?");
    if (userSpecialChars){
        finalResults.push(specialChars);
    }
    else {

    }

    console.log(finalResults);

    // randomize finalResults

    var randomItem = finalResults[Math.floor(Math.random()*finalResults.length)];

    document.body.innerHTML = randomItem;


    // pick certain items from finalResults 
    // ex: password length is 5, then you want to loop through finalResults until 5 


    // return the final password

    var length = 8,
        charset = ""
}

generatePassword();