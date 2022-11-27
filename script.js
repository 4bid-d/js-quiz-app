const startButton = document.getElementById("start-btn")
const nextButton  = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
log = console.log

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click" , startGame)
nextButton.addEventListener("click" , ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    log("started")
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(()=> Math.random() - .5)
    currentQuestionIndex  = 0 
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach((answer)=>{
        const button = document.createElement("button")
        button.classList.add("btn") 
        button.innerText = answer.text
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click" , selectAnswer )
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
   nextButton.classList.add("hide")
   while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
   }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children)
    .forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    }) 
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add("wrong")
    }
    if(question.length-1 !== currentQuestionIndex){
        nextButton.classList.remove("hide")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const question = [
    {
        question : " what is 2 + 2 ",
        answers:[ 
            { text : "4" , correct:true },
            { text : "3" , correct:false }
        ]
    },
    {
        question : " what is blh + blah ",
        answers:[ 
            { text : "blh blah" , correct:true },
            { text : "blah blah" , correct:false }
        ]
    },
    {
        question : " what is 2 + 2 ",
        answers:[ 
            { text : "4" , correct:true },
            { text : "3" , correct:false }
        ]
    }
]