'use strict';

let matrix1 = [ [2, 1],
                [-3, 0],
                [4, -1] ];
        
let matrix2 = [ [5, -1, 6],
                [-3, 0, 7] ];

let resultMatrix = [];

for (let i = 0; i < matrix1.length; i++) {

    let row = [];
    
    for (let j = 0; j < matrix2[0].length ; j++){

        let column = [];

        for (let k = 0; k < matrix2.length; k++){

            column.push(matrix2[k][j]);
        }
        
        row.push(multiply(matrix1[i], column));
        
    }

    resultMatrix.push(row);

}

function multiply (row, column) {
    let sum = 0;

    for(let i = 0; i < matrix2.length; i++ ){
        sum += row[i]*column[i];
    }

    return sum;
} 

console.log(resultMatrix);
