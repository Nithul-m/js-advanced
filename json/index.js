let student = {
    name:"entri",
    age:30,
    course:"MERN",
    topics:["html","css", "Js"],
}
let res = JSON.stringify(student);
console.log(res);
console.log(typeof res);
// Javascript Object Notation
let val = JSON.parse(res);

console.log( val);
console.log(typeof val);
