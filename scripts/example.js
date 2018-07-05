'use strict'

let age;

alert(
    
    `   Name : ${validate('Enter your full name', '', checkSrting)}
    Age : ${age = validate('How old are you?', '18', checkNumber )}
    Gender : ${confirm('Are you a man?') ? 'Male' : 'Female'}
    Family Status : ${validate('Indicate your family status', '', checkSrting)}
    Foot Size : ${validate ('Enter your foot size', '40', checkNumber)}
    Address : ${validate('Enter your address', '', checkSrting)}
    Maturity : ${age >= 18 ? 'Of age' : 'Uderage'}`);


function validate (message, defaultValue, additionalCheck = () => true) {
    let value;
    do {
        value = prompt(message, defaultValue);
    } while ( !value || !additionalCheck(value) );
    return value;
}


function checkNumber (value) {
    return !isNaN(value) && value > 0;
}

function checkSrting(value) {
    value = value.trim();
    let isString = value ? true : false;
    return isString;
}

