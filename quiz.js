const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "What is 4 + 4?",
    answers: ["8", "12", "6", "10"],
    correct: "8",
  },
  // Add more questions here
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
  const output = [];

  quizData.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter]}">
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  quizData.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correct) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length} correct`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
