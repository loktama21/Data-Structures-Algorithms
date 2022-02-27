/*
 * reverse: Given an array of objects, return an array with the elements in
 * reverse order.
 *
 * Signature: (arr = [Object]) -> [Object]
 *
 * Time/Space Complexity:
 * Standard - O(n)/O(n)
 * In-place - O(n)/O(1)
 *
 * Examples:
 * 1. reverse([1, 2, 3]) = [3, 2, 1]
 * 1. reverse(['a', 'b', 'c']) = ['c', 'b', 'a']
 */

// standard method
// function reverse(arr) {
//     let emp = []  // does it change time complexity?
//     for(var i = 0; i < arr.length; i++){
//         emp.unshift(arr[i]);
//     }
//     return emp;
// }
// console.log(reverse(['a', 'b', 'c']));

// in place method
function reverse(arr) {
    for(let i = 0; i < (arr.length / 2); i++){
        const first = i;
        const last = [arr.length - 1 - i]
        let temp = arr[first]
        arr[i] = arr[last]
        arr[last] = temp
    }
    return arr
}

let result = reverse([1, 2, 3, 4, 5, 6, 7]);
console.log(result);