const num1 = 20 // constant
let num2 = 30 // variable
const helloWord = 'Hello' // string
const negNum = -4 

console.log(num1)
console.log(num2)
console.log({helloWord})
console.log()

const sum = num1 + num2
const subt = num1 - num2
const mult = num1 * num2
const div = num1 / num2
const power = Math.pow(2, 3) // or use: (num1 ** num2)
const mod = num1 % num2
const sum2 = num1 + helloWord
const absoluteNum = Math.abs(negNum)

console.log({sum})
console.log({subt})
console.log({mult})
console.log({div})
console.log({power})
console.log({mod})
console.log({sum2})
console.log(absoluteNum)
console.log()

const grades = [10, 30, 5.5]
console.log(grades)
const ex = [10, '30', 5.5, 'sansj', true] // try using only the same type
console.log(ex)
console.log()

// Condicionals
if (num1 > num2) {
    console.log('num1 is greater than num2')
} else {
    console.log('num1 is equal to or less than num2')
}
console.log()

// truthy and falsy
console.log(!![], !!{}, !!1, !!'afasf', true); // all truthy
console.log(!!null, !!undefined, !!0, !!'', !!NaN); // all falsy
console.log()

// if ([] && {} && 1 && 'afasf' && true) {
//   console.log('tudo é truthy'); 
// }

{
    const age = 19;
    const license = true;
    
    const abletoDrive = age >= 18 && license;
    
    if (abletoDrive) {
      console.log('This person is able to drive')
      console.log()
    } else {
      console.log('This person is not able to drive')
      console.log()
    }
    
    const numOfPassagers = abletoDrive ? 4 : 0; // ternary
    console.log({numOfPassagers});
    console.log()

}

//objects - key: value pairs (like python dictionaries)
const animal = {
    name: 'dog',
    age: 2,
    color: 'black',
    'type of': 'canine', 
    isTerrestrial: true
}
console.log(animal)
console.log(animal['type of'])
console.log()