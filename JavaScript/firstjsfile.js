let cash = 420;
let price = 420;

if (cash > price){
    console.log (`you paid extra. Here's ${cash - price} change.`)
}

else if (cash === price){
    console.log("You paid exact. Have a nice day")
}

else{
    console.log(`Not enough money. Give me ${price - cash} money`)
}