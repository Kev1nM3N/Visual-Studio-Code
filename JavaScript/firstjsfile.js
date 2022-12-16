let animals = [`Cat`, `Dog`, `Parrot`, `Snake`, `Hamster`]

let dollars = [1, 5, 10, 3]

let newAnimals = animals.filter(element => element !== `Snake`)

console.log(newAnimals);

cents = []

for(let i = 0; i < dollars.length; i++){
    cents.push(dollars[i] * 100)
}

console.log(cents)