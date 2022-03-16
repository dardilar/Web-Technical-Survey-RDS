const finalScore = document.getElementById('finalScore');
const level = document.getElementById('level');
const mostRecentScore = localStorage.getItem('mostRecentScore');

function percentageScore(mostRecentScore) {
    const percent = (100 * mostRecentScore) / 50;
    return percent
};

function typeOfLevel(score) {
    if (score <= 30) {
        return "Basic Level"
    }else if (score > 30 && score <= 70) {
        return "Intermediate Level"
    }else if (score > 70) {
        return "Advance Level"
    }
}

console.log(typeOfLevel(percentageScore(mostRecentScore)));

finalScore.innerText = `Your Score is ${percentageScore(mostRecentScore)}%`;
level.innerText = `You are a ${typeOfLevel(percentageScore(mostRecentScore))} user`;
