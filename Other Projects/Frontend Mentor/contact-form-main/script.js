let leftBox = document.querySelector(`.left-box`);
let radioButton = document.querySelector(`input[type=radio]`);
let secondRadio = document.getElementById('radioSecond')


radioButton.addEventListener("click", function(){
    if (radioButton.checked === true){
        leftBox.style.backgroundColor = "hsl(148, 38%, 91%)"
    }
})

secondRadio.addEventListener("click", function() {
    if (secondRadio.checked === true){
        leftBox.style.backgroundColor = "hsl(148, 38%, 91%)"
    }
})