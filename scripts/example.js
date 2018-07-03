'use strict'

let age;
/*
alert(
    
    `Name : ${check('Enter your full name')}
    Age : ${age = validate('How old are you?', '18')}
    Gender : ${confirm('Are you a man?') ? 'Male' : 'Female'}
    Family Status : ${check('Indicate your family status')}
    Foot Size : ${validate ('Enter your foot size', '40')}
    Address : ${check('Enter your address')}
    Maturity : ${age >= 18 ? 'Of age' : 'Uderage'}`);
    */


function check (message) {
    let value;
    do {
        value = prompt(message, '').trim();
    } while ( !value );
    return value;
}

function validate (message, defaultValue) {
    let value;
    do {
        value = prompt(message, defaultValue);
    } while ( isNaN(value) || value <= 0 );
    return value;
}




