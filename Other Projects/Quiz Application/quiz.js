const startButton = document.getElementById(`start-btn`)
const nextButton = document.getElementById(`next-btn`)
const questionContainerElement = document.getElementById(`question__container`)
const questionElement = document.getElementById(`question`)
const answerButtonsElement = document.getElementById(`answer-buttons`)

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener(`click`, startQuiz)
nextButton.addEventListener(`click`, () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz (){
    console.log(`Got started`)
    startButton.classList.add(`hide`);
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove(`hide`)
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement(`button`)
        button.innerText = answer.text
        button.classList.add(`btn`)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener(`click`, selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add(`hide`)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach (button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove(`hide`)
    } else {
        startButton.innerText = `Restart`
        startButton.classList.remove(`hide`)
    }
    nextButton.classList.remove(`hide`)
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add(`correct`)
    }
    else {
        element.classList.add(`wrong`)
    }
}

function clearStatusClass (element){
    element.classList.remove(`correct`)
    element.classList.remove(`wrong`)
}

const questions = [
    {
        question: `What is Lovely's favorite color?`,
        answers: [
            {text: `Peach`, correct: true},
            {text: `Black`, correct: false},
            {text: `Blue`, correct: false},
            {text: `Pink`, correct: false}
        ]
    },

    {
        question: `What is Lovely's Dog's name?`,
        answers: [
            {text: `Frankenstein`, correct: false},
            {text: `Dio`, correct: false},
            {text: `Nemo`, correct: true},
            {text: `Ted`, correct: false}
        ]
    },

    {
        question: `What is Lovely's favorite anime?`,
        answers: [
            {text: `HunterxHunter`, correct: false},
            {text: `Black Butler`, correct: true},
            {text: `Psycho-Pass`, correct: false},
            {text: `Baki`, correct: false}
        ]
    },

    {
        question: `Where does lovely really want to go?`,
        answers: [
            {text: `China`, correct: false},
            {text: `Germany`, correct: false},
            {text: `Thailand`, correct: false},
            {text: `Japan`, correct: true}
        ]
    }

]