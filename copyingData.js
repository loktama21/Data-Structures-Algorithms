// Copying array
let arr = ['cool', 'awesome', 'fabulous', 'gucci', 'fascinating'];
let arrCopy = arr.slice(2) //slice method
let arrCopy = ['fantastic', ...arr, 'bushing'] // spread operator method
let arrCopy = ['bushing'].concat(arr.concat(['fantastic'])); //using concat method
console.log(arrCopy);
console.log(arr);

//Copying string
// let str = 'My name is Okley. ';
// let strCopy = str.slice(11, 16) + '. I am 8 years old'; //slice method
// let strCopy = str.substring(11, 16); //substring method
// console.log(str);
// console.log(strCopy);

//copying object

// let obj = {
//     name: 'lok',
//     age: 25,
//     home: 'nepal'
// }
// let objCopy = Object.assign({color: 'Green'}, obj); //Object.assign method
// console.log(obj);
// console.log(objCopy);