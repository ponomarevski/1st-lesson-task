'use strict';

let number = parseInt(prompt('Enter your number', '') );

function sum (number) {
    if (number <= 0){
        return 0;
    }
    return number % 10 + sum( parseInt(number/10) );   
}
alert( sum( number ) );





const arr = [];

for (let i = 2; i < 300; i++) {
    arr.push(i);
}


for (let i = 0; i < arr.length ; i++) {
    
    if( arr[i] > 1){
        let check = 0 ;

        for( let j = 1; j <= arr[i] && check < 3; j++){

            if(arr[i] % j === 0){
                check++;
            }
        }

        if(check === 2){
            console.log(arr[i]);
        }
    }
}