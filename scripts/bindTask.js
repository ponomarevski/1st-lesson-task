'use strict';

let sum = function() {
    return [].reduce.call(arguments, function(result, current) {
        return result + current;
    }, this.cont);
};

let bind = function(fn, context) {

    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

let bindedSum = bind(sum, {cont:10}, 20, 30);
console.log(bindedSum(40, 50, 60));


function func(a, b, c) {
    console.log(`${a} ${b} ${c}`);
}
let arg = [3, 7, 8]; 
func(...arg); 


let str = 'valeria';
let chars = [...str];
console.log(chars);



let arr = [6, 15, 21, 24, 13];
let max = Math.max(...arr);
console.log(max);
