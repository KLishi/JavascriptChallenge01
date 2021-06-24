const f='jo'
const l='ke'
const fl=f+''+l
console.log(fl);
    const p = f-l// shows NaN-not a number
    console.log(p);

    const num1=10;
    const num2=20
    const diff = num1-num2
    console.log(diff)

    // if numbers are taken as strings
     let a='10'
     let b='20'//-10
     let c =a-b;//this works fine as numbers because javascript converts them from strings to numbers
     console.log(c)
     let d= a+b//this doesn't work here js does string concatenation
     console.log(d)//1020
// even if one value is string and other is number it does string concatnation
     let g=10;
     let h='21'
   
     let y=g+h
     console.log(y)//1021
