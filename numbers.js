// javascript is loosely typed[not strictly typed] - don't declare type
const number = 100.123;
const number2 = 100
const number3 = '100';
let word = 101
word = 'super cool'
console.log(number)
console.log(word)
console.log(number2)//number in blue in console
console.log(number3);// string in black in console
const add= number + number2
const sub = number - number2;
const mul = number * number2;
const div = number / number2;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
//++, --, += , -+, *=, /+, %
let a= 10;
a++;//increments by 1
console.log(a)
a--
a--//decrements by 1
console.log(a);
a += 5;//increments by number
console.log(a);
a-=5
console.log(a);//decrements by number
a*=2
console.log(a);//multiplies by number
a/=2
console.log(a);//divides by number
a%=2//gives the remainder in division
console.log(a);

let d=25;
let b =7
let c = d%b
console.log(c)
//priority
const e = 2+6+3*10
const f = (2+6+3)*10
console.log(e)
console.log(f)




