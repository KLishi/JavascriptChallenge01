// 7 datatypes
//primitive data types - number,string,boolean,null,undefined,symbol(ES6)
//object - arrays,functions,objects
// "typeof" operator to determine the datatype either by name/variable or by value
const number = 15;
const name= "lum";
const value = true;
const negative = false;
const nothing = null;
let unknown;//const cannot be used if there is no value while declaring
console.log(typeof number);
console.log(typeof 15);
console.log(typeof name);
console.log(typeof "lum");
console.log(typeof value);
console.log(typeof false);
console.log(typeof nothing);
console.log(typeof null);//bug in js, null will be shown as object

console.log(typeof unknown);

