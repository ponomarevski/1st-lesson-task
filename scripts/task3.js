'use strict';

let a = prompt ('Введите a', '');
let b = prompt ('Введите b', '');
let c = prompt ('Введите c', '');

calculate(a, b, c);

function calculate (a, b, c) {
    let d = b * b - 4 * a * c;
    if (d > 0) {
       let x1 = (-b + Math.sqrt(d) ) / 2 * a;
       let x2 = (-b - Math.sqrt(d) ) / 2 * a;
        alert ('x1 равен:' + x1 + '\nx2 равен:' + x2);
    } else if (d === 0) {
       let x = -b / (2 * a);
        alert ('x равен:' + x);
    } else if (a === 0) {
        let x3 = -c / b;
        alert ('x3 равен:' + x3); 
    } else {
        alert ('Корней уравнения не найдено');
    }
}
