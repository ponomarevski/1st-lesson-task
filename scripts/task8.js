'use strict';

let arr = [ {a:1}, {b:2}, {c:6}, {a:1}, {c:4}, {c:6} ];

let newArr = [];

function unique(arr) {

    let counter = 0;

    for( let i = 0; i < arr.length; i++){
        
        for( let j = 0; j < arr.length; j++) {
           
            if ( compare(arr[i], arr[j]) ) {
                counter++;         
           } 
        }
        
        if( counter === 1) {
            newArr.push(arr[i]);
        }
        counter = 0;
    }    
}

unique(arr);

console.log(newArr);


function compare(obj1, obj2) {
        if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}






