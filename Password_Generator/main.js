
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
    
    if (userLowercase){
        finalResults.push(lowerCase);
    }
    elseif (userLowercase && userUppercase){
        finalResults.push(upperCase);
    }
    else {
        finalResults.push(nums) 
    }

    console.log(finalResults);

    // randomize finalResults



    // pick certain items from finalResults 
    // ex: password length is 5, then you want to loop through finalResults until 5 


    // return the final password

    var length = 8,
        charset = ""
}

generatePassword();