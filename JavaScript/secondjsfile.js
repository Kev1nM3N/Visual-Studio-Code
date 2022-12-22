function toggleDarkMode(){
    document.querySelector(`body`).classList.toggle(`dark-theme`)
}

document.querySelector(`.gotem`).innerHTML += ` Hello my brother`

document.querySelector(`.gotem`).style.color = `blue`

let age = 9;
let accompanied = true;

if (age >= 13){
    console.log(`Let him in`)
}

else if (age <= 12 && accompanied){
    console.log (`Let them in`)
}

else{
    console.log(`Cannot enter`)
}