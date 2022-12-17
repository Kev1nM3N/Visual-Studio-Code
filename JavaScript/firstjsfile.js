let grades = [`A+`, `A`, `B`, `FAIL`]

let goodGrades = []

for (let i = 0; i < grades.length; i++){
    if (grades[i] !== `FAIL`){
        goodGrades.push(grades[i])
    }
}

console.log(goodGrades)


let dollars = [1, 5, 10, 3]

cents = []

for (let i = 0; i < dollars.length; i++){
    cents.push(dollars[i] * 100)
}

console.log(cents);