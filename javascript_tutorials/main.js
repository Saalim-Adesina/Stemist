let x = 10;
console.log(typeof x);

console.log(x ** 2 * Math.sqrt(x));
console.log(56 .toPrecision(4))
console.log(56 .toString(2))

function betterPrecision(num, precision) {
    let input = num.toPrecision(precision)
    let index = input.indexOf('e')
    if (index !== -1){
        var exp = Number(input.slice(index+1))
        if (exp <= 5){
            return Number(input).toString()
        }
        else {
            return 
        }
    }
    return input 

    // 5e4 or 54000

}

console.log(betterPrecision(150.53, 2));
console.log(betterPrecision(150.5355634, 8));
console.log(betterPrecision(150.53, 2));


console.log(Math.round(46.8)) // to the nearest integer
console.log(Math.ceil(46)) // to the nearest higher integer
console.log(Math.floor(45.5)) // to the lower integer
console.log(87.87 .toPrecision(1)) // one significant figure
console.log(87.8898 .toFixed(2)) // to 2 decimal places
console.log(Math.pow(5, 3)) // raised to the power
console.log(5 ** 3) // same code as above
console.log(Math.round(Math.random() * 10)) // multiplies the random to generate number from 1 to 10

function not(x){
    var inverse_string = ''
    for (var i = 0; i < x.length; i++) {
        if (x[i] === '1'){
            inverse_string += '0'
        }
        else {
            inverse_string += '1'
        }
    }
    return inverse_string
}

console.log(not("1010001"))

// REACT SPECIFIC JAVASCRIPT

function DoSomethign() {
    //
}

// another way to write the same function
const DoSomething = () => {
    
}

// anonymous function


// ternary operators
let nationality = 'Nigerian'
let name = (nationality === 'Nigerian') && "Saalim"; // if nationality is nigerian set name to Saalim
let name2 = (nationality === 'Nigerian') || "White Guy"; // if nationality is nigerian set name to Saalim
let name3 = (nationality === 'Nigerian') ? "Saalim" : "Nigerian" ; // if nationality is nigerian set name to Saalim
console.log(name3)

// Using reusable objects (python did this better)
const person = {
    name: "Saalim",
    age: 15
}
const person2 = {...person, name:"White Guy"}

// Arrays function: map, filter
let names = ["Saalim", "Jessica", "Madeline", "Saalim", "Saalim"]

names.map((name) => {
    return name + '1'
})

names.filter((name) => {
    return name !== "Saalim"
})

// Async , Wait , Fetch

let size = 's'
if (size.toLowerCase() === 's') {
    console.log("Size is small")
}
else if (size.toLowerCase() === 'xl') {
    console.log("Size is x large")
}
else if (size.to === 'l') {
    console.log("Size is large")
}

switch (size.toLowerCase()) {
    case 's':
        console.log('Size is small')
        break
    case 'l':
        console.log('Size is large')
        break
    case 'xl':
        console.log('Size is X-Large')
        break
}   

let number = 0
while (number <= 12) {
    console.log(number)
    number += 2
}

// do {
//     yourName = prompt('Who are you? ')
// } while (!yourName);
// console.log(yourName)

console.log("beginning for loop")
for (let x=0; x < 12; x += 1) {
    console.log(x)
}

console.log("beginning while loop")
let y = 0
while (y < 12) {  
    console.log(y)
    y += 1

}

var counter = 0
for (let i = 20; ;i++) {
    if (i % 7 === 0){
        console.log(`This number is divisible by 7: ${i}`)
        break
    }
}