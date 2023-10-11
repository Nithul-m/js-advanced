
//create an example for spread operator

let arr = [10,20,30];
// let arr2 = arr; //copy by reference // copy by value
let arr2 = [...arr];
let res = Math.max(...arr, ...arr2);
arr2[0] = 100;
console.log(arr);
console.log(arr2);
console.log(res);