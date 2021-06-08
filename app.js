// document.write("document.write method");
// alert("alert method");
// console.log("console.log method");
// ------------------------------------------------------------

// statements=sets of instructions like asking computer to print something
// only console can show object
// ----------------------------------------------------------------

// document.write({ name: "objectname" });
// alert({ name: "objectname" });
// console.log({ name: "objectname" });
// console.log({ name: "objectname" });
// console.log({ name: "objectname" });
// console.log("hai");
// -------------------------------------------------------------

// variables - basic building blocks
// variables- store,access,modify === value
// declare,assignment operator, assign value

let name = 'I am a coder';
console.log(name);
let address, zip, state;
address = '1111111 street';
zip = '0000';
state = 'aaaaaa';
console.log(address, zip, state);
name = 'I am a super coder';
console.log(name);

// --------------------------------------------------------------

// variable names can contain digits,letters,underscore, $
// variable names must start with letter, $ or _
// variables cannot start with number

// let 123name="wrong name";
// console.log(123name);
// Wrong variable declaration.......variable name shouldn't start with number
// keywords cannot be variable names
// let let = "name" is wrong since let is a keyword
// variable names are case sensitive- fullname vs Fullname vs fullName vs full_name
// known naming camelCase or under_score........camelCase preferred

let name123$_5 = 'my name';
console.log(name123$_5);
// let vs const vs var
var a = 'value';
a = 'changed value';
//not used in ES6 because of shortcomings.....function scope
let b = 'more value';
b = 'changed more value';
//preferred........block scope
const c = 'cannot change'; // cannot reassign and always need to be declared initially. will be constant.....block scope
console.log(a, b, c);
