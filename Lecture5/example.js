// I can declare variables with the const keyword

const x = 3;
const y = 4;

// I can print with console.log()

console.log(x) // 3

// If I want variables that I can reassign, I can use the let keyword

let changing = 7
changing = changing + 10

// I can declare functions with the function keyword
function add(num1, num2) {
    const sum = num1 + num2
    return sum
}

// I can also use the arrow syntax
const subtract = (num1, num2) => num1 - num2

// Variables are scoped to the closest block, or closest set of {}
// I can access sum inside of the add function
console.log(sum) // But this fails!

// There are different primitive variable types:
const num = 5.5 // number
const str = "xyz" // string
const bool = false

// There are two ways to represent "nothing" as a variable
// null is like saying "This has no value on purpose"
// undefined is like saying "This has no value because you haven't assigned it"

// There are also some non-primitive variable types:
const arr = [1, 2, 3] // Arrays are like lists from python or vectors from C++
console.log(arr[2]) // 3

const obj = {
    width: 10,
    height: 10
} // Objects in JavaScript don't necessarily need a class to make them!
console.log(obj.width)
console.log(obj["width"])

// We can use basic control flow: if, for, while, etc
if (x > y) {
    console.log("x is bigger!")
} else {
    console.log("x is not bigger...")
}

for (let i = 0; i < x; i++) {
    console.log("Hello!") // Prints "Hello!" 3 times
}

// There are two sets of comparison operators
const threeNum = 3
const threeStr = "3"

if (threeNum == threeStr) {
    console.log("== thinks they're the same!") // <---
} else {
    console.log("== thinks they're different!")
}

if (threeNum === threeStr) {
    console.log("=== thinks they're the same!")
} else {
    console.log("=== thinks they're different!") // <---
}

// Other confusing examples:
console.log(false == 0) // true
console.log(0 == "") // true
console.log(false == "0") // true
// Recommendation: always use === or !==, avoid == and !=