let answerPara = document.querySelector('p');
let inputField = document.querySelector('input[type="text"]');
let pickedBodyPart = document.querySelector('.bodyPart');
let pickedAdjective = document.querySelector('.adjective');
let pickedRandomWord = document.querySelector('.randomWord');

let answeredPhrases = [
    `That's a wonderful idea!`,
    `I wouldn't recommened it.`,
    `Try asking again for better clarification.`,
    `Tails says No.`,
    `In a matter of a few weeks as long as you let go of resistance.`,
    `Absolutely`,
    `It's possible`,
    `Stop asking about that and let things be.`
]


inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitAnswer();
        inputField.value = '';
    }
})

function submitAnswer () {
    if (!inputField.value){
        return alert('Please ask a question first')
    }
    inputField.value = '';
    answerPara.innerHTML = answeredPhrases[Math.floor(Math.random() * answeredPhrases.length)];
}

var bodyParts = ['neck', 'toes', 'dick', 'leg', 'tanline', 'ear', 'knee']
var adjectiveWords = ['stupid', 'smelly', 'awful', 'disgusting', 'grumpy']
var randomWords = ['cat', 'van', 'twitter', 'portrait', 'water bottle', 'fox']
var arrayOfNumbers = [5, 4, 3, 2, 1]

function randomPhrase(params) {
    var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    var randomAdjective = adjectiveWords[Math.floor(Math.random() * adjectiveWords.length)];
    var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

    pickedBodyPart.innerHTML = randomBodyPart;
    pickedAdjective.innerHTML = randomAdjective;
    pickedRandomWord.innerHTML = randomWord;
}

var myDog = {
    legs: 4,
    "full name": 'David Gonzalez',
    "number of lives": 9,
    colors: 'black'
}

var playstation4 = {};
playstation4["active"] = true;
playstation4["games"] = 33;
playstation4["price"] = '$298.00'
playstation4.stillRelevant = true;
playstation4.gamesIWant = false;


console.log(playstation4.gamesIWant);