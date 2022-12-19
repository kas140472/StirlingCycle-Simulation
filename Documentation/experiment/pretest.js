
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "Does the Stirling cycle utilize regeneration?",
    answers: {
      a: "Yes",
      b: "No"
    },
    correctAnswer: "a"
  },

  {
    question: "When operating between the same temperature limits, the thermal efficiency of Stirling cycle is",
    answers: {
      a: "Greater than that of Carnot cycle",
      b: "Equal to that of Carnot cycle",
      c: "Lesser than that of Carnot cycle"
    },
    correctAnswer: "b"
  },

  {
    question: "The ideal Stirling cycle is",
    answers: {
      a: "Totally reversible",
      b: "Internally reversible",
      c: "Both of the above",
      d: "None of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "Consider the ideal Otto, Stirling and Carnot cycles operating between the same temperature limits. Which of the following is correct?",
    answers: {
      a: "Efficiency of Otto cycle < Efficiency of Carnot cycle = Efficiency of Stirling cycle",
      b: "Efficiency of Otto cycle > Efficiency of Carnot cycle = Efficiency of Stirling cycle",
      c: "Efficiency of Otto cycle = Efficiency of Carnot cycle = Efficiency of Stirling cycle",
      d: "Efficiency of Otto cycle = Efficiency of Carnot cycle > Efficiency of Stirling cycle"
    },
    correctAnswer: "a"
  },
  {
    question: "Given that a Stirling cycle is operating between the temperature limits of 1900K and 350K, what is its efficiency?",
    answers: {
      a: "0.98",
      b: "5.66",
      c: "0.56",
      d: "0.82"
    },
    correctAnswer: "d"
  },
  {
    question: "Is the Stirling engine an external combustion engine?",
    answers: {
      a: "Yes",
      b: "No"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
