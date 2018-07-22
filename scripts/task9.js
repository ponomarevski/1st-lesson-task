'use strict';

function multiply(a) {

    return function (b) {
        return a * b;
    };
}

alert(multiply(1)(2));
alert(multiply(2)(10));
alert(multiply(3)(0));




let arr = [1, 2, 3, 4];

function inRange(a, b) {
    return function (value) {

        return value >= a && value <= b
    }
};

console.log(arr.filter(inRange(2, 3)));
console.log(arr.filter(inRange(1, 3)));
console.log(arr.filter(inRange(2, 4)));
console.log(arr.filter(inRange(2, 10)));



let str = '50605';

function isPalindrom() {

    let firstEl = 0;
    let lastEl = str.lenth - 1;

    while (firstEl <= lastEl) {

        if (str[firstEl] !== str[lastEl]) {
            return false
        }
        ++firstEl;
        --lastEl;
    }
    return true;
};

console.log(isPalindrom());
