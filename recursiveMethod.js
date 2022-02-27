//Solving factorial using recursive function
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(6));

// Solving factorial using non recursive method
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//         console.log(i + ' = ' + total);
//     }
//     return total;
// }

// console.log(factorial(10));


// Example of recursive function

// function countDown(num){
//     if(num <= 0){
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// FOR loop
// function countDown(num){
//     for(let i = 0; i < num; i++){
//         console.log(i);
//     }
// }

// let count = countDown(10)
// console.log(count);