
const lowerCase = [...'abcdefghijklmnopqrstuvwxyz']
const upperCase = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()]
const nums = [...'0123456789']
const specialChars = [...'!@#$%^&*()'] 
let finalResults = []

console.log(nums, specialChars)

function generatePassword() {

    let userLowercase = confirm("Would you like to use lowercase letters in your password?");
    let userUppercase = confirm("Would you like to use uppercase letters in your password?");
    let userNums = confirm("Would you like to use numbers in your password?");
    let userSpecialChars = confirm("Would you like to use special characters in your password?");
    console.log(userLowercase)

    if (userLowercase){
        finalResults = [...lowerCase]
    }

    let userUppercase = confirm("Would you like to use uppercase letters in your password?");
    console.log(userUppercase)

    if (userUppercase){
        finalResults = [...upperCase]
    }

    let userNums = confirm("Would you like to use numbers letters in your password?");
    console.log(userNums)

    if (userNums){
        finalResults = [...nums]
    }

    let userUppercase = confirm("Would you like to use uppercase letters in your password?");
    console.log(userUppercase)

    if (userLowercase){
        finalResults = [...upperCase]
    }


    // randomize finalResults



    // pick certain items from finalResults 
    // ex: password length is 5, then you want to loop through finalResults until 5 


    // return the final password

    var length = 8,
        charset = ""
}

generatePassword();