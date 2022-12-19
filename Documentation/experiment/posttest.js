
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
      question: "“Stirling cycle is difficult to achieve in practice because it involves heat transfer through a differential temperature difference in all components including the regenerator”. Indicate whether this statement is",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "The Stirling cycle consists of",
      answers: {
        a: "Two isothermal and two constant volume processes",
        b: "Two isentropic and two constant volume processes",
        c: "One isothermal, one isentropic and two constant volume processes",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "In a Stirling cycle, heat addition and rejection does not take place at constant temperature.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "In a Stirling cycle, expansion and compression take place at",
      answers: {
        a: "Constant pressure",
        b: "Constant temperature",
        c: "All of the above",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Given that a Stirling cycle is operating between the temperature limits of 1393K and 351K, what is its efficiency?",
      answers: {
        a: "0.3",
        b: "0.752",
        c: "0.748",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "For ideal Stirling cycle, given: P1=4 kPa, P3=50 kPa, v1=15 m<sup>3</sup>/kg, v3=5 m<sup>3</sup>/kg. Calculate P2, P4, v2, v4",
      answers: {
        a: "P2= 4 kPa, P4=50 kPa, v2=15 m<sup>3</sup>/kg, v4=5 m<sup>3</sup>/kg",
        b: "P2= 12 kPa, P4=16.67 kPa, v2=5 m<sup>3</sup>/kg, v4=15 m<sup>3</sup>/kg",
        c: "P2= 12.25 kPa, P4=10.70 kPa, v2=15 m<sup>3</sup>/kg, v4=5 m<sup>3</sup>/kg",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "For ideal Stirling cycle, given: P1=4 kPa, P3=50 kPa, v1=15 m<sup>3</sup>/kg, v3=5 m<sup>3</sup>/kg. Calculate Qin (heat added), Qout (heat rejected) and Wnet (Net work).",
      answers: {
        a: "Qin = 274.65 kJ/kg, Qout =289.34 kJ/kg, Wnet =65.92 kJ/kg",
        b: "Qin = 289.34 kJ/kg, Qout =208.74 kJ/kg, Wnet =65.92 kJ/kg",
        c: "Qin = 274.65 kJ/kg, Qout =65.92 kJ/kg, Wnet =208.74 kJ/kg",
        d: "None of the above"
      },
      correctAnswer: "c"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
