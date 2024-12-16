const userNames = ['Lucas', 'Daniela', 'Carlos', 'Flavia', 'Zeca', 'José', 'Fernanda', 'Rafaela'] 

// Loops
let index = 0
while (index < userNames.length) {
    console.log(`Hello, ${userNames[index]}`)
    index++ // or index += 1
}
console.log()

// odd-even example
const numbers = [1, 2, -92, 4, 5, 19, -34, 87, -9, 62, 25, 198]
const evenNumbers = []
const oddNumbers = []
let numIndex = 0

while (numIndex < numbers.length){
    if (numbers[numIndex] % 2 === 0) {
        evenNumbers.push(numbers[numIndex]) // push() adds element to the end of an array
    } else {
        oddNumbers.push(numbers[numIndex])
    }
    numIndex++
}
console.log({evenNumbers})
console.log({oddNumbers})
console.log()

// do-while loop
index = 0 
let userFoud = false
do {
    const user = userNames[index]
    if (user.startsWith('w')) {
        userFoud = true
        console.log(`User found, name: ${user}`)
    } 
    index++
    if (index >= userNames.length) {
        userFoud = true
        console.log('User not found!')
    }
} while (!userFoud)
console.log()

// ************ for-loop **************

// for-of - used for arrays
    // imperative loop
for (let i = 0; i <= numbers.length; i+=10) {
    console.log(numbers[i])
} 
    // declarative loop
for (const number of numbers) {
    console.log(number)
} 
console.log()

// for-in - used for objects
const user = {
    name: 'LuCas sanTos FaRIas',
    email: 'K2d6RTastrAl@mail.com',
    age: 30,
    isDeveloper: true
}

for (const key in user) {    
    console.log(`${key}: ${user[key]}`)
}

for (const key in user) {
    if (key === 'name') {
      const names = user[key].split(' ')
      user[key] = ''
  
      for (const name of names) {
        const normalizedName = name.toLowerCase()
        const [primeiraLetra, ...restoDoNome] = normalizedName
  
        user[key] += primeiraLetra.toUpperCase() + restoDoNome.join('') + ' '
      }
  
      user[key] = user[key].trim()
    }
  
    if (key === 'email') {
      user[key] = user[key].toLowerCase()
    }
}

console.log(user)