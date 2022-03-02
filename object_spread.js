// **********Array spread **********************
const persons = ["sam", "karl", "ethan"];
const cars = ["toyota", "bmw", "tesla"];

// const sum = persons.concat(cars);
const sum = [...persons, ...cars];
console.log(sum);

// **********Object spread **********************
// const person = {
//   name: "sam",
//   age: 25,
//   city: "Dallas",
// };

// const hobby = {
//   travel: "europe",
//   game: "soccer",
// };

// const result = { ...person, ...hobby };
// Object.assign(person, hobby);
