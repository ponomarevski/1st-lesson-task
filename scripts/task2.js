const arr = [];


for (let i=0; i<10; i++) {
    arr.push(getRandomInt(-100, 100))   

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let max = arr[0];
let value = arr[1];
for (let i=1; i < arr.length; i++) {
    if (max < arr[i]){
        max = arr[i];
    } else if (arr[i] > value && arr[i] !=max) {
        value = arr[i];
    }
}
console.log(arr);
console.log(value);