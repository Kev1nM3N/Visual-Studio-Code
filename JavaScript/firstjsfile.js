let cash = 38;
let price = 40;

if (cash > price){
    console.log(`You paid extra, here is ${cash - price} of change.`)
}

else if(cash === price){
    console.log(`You paid exact. Have a nice day.`)
}

else{
    console.log(`You still owe ${price - cash} of money.`)
}