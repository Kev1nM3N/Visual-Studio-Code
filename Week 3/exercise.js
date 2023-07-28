let str = `Frontend Simplifed`

for (let i = 1; i <= 20; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log(`${i} <--- Frontend Simplifed`)
    }

    else if (i % 5 === 0) {
        console.log(`${i} <--- Simplifed`)
    }

    else if (i % 3 === 0) {
        console.log (`${i} <--- Frontend`)
    }

    else {
        console.log(`${i} <--- ${i}`)
    }
}