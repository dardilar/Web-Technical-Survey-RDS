const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
    {
        question: "I have the costumer information needed to proactively help customers achieve their goals with Oracle",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
    },
];

//Constants
const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 10;

startSurvey = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //Go to end page
        return window.location.assign('/end.html')
    }
    questionCounter++;
    progressText.innerText = "Question: " + questionCounter + "/" + MAX_QUESTIONS;
    //update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach (choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        incrementScore(selectedAnswer);
        getNewQuestion();
       
    });
});

incrementScore = num => {
    score += parseInt(num);
    scoreText.innerText = score;
}

startSurvey();