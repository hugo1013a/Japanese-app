// script.js

// Define an array of questions and options
const questions = [
    {
      question: 'Which of the following is the correct spelling of "volleyball"?',
      options: ['ハイキュー', 'ハイキユ', 'ハイキョー'],
      answer: 0 // Index of the correct answer
    },
    {
      question: 'Which of the following option has the meaning of "left"?',
      options: ['レフト', 'レフ', 'レフド'],
      answer: 0 // Index of the correct answer
    }
  ];
  
  let currentQuestion = 0; // Variable to keep track of the current question
  
  // Function to display the current question and options
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestionObj = questions[currentQuestion];
  
    questionElement.textContent = currentQuestionObj.question;
    optionsElement.innerHTML = '';
  
    currentQuestionObj.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(index));
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedIndex) {
    const options = document.getElementsByClassName('option');
  
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('correct', 'incorrect');
    }
  
    if (selectedIndex === questions[currentQuestion].answer) {
      options[selectedIndex].classList.add('correct');
    } else {
      options[selectedIndex].classList.add('incorrect');
      options[questions[currentQuestion].answer].classList.add('correct');
    }
  
    document.getElementById('nextBtn').disabled = false;
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.getElementById('nextBtn').disabled = true;
    } else {
      alert('Congratulations! You have completed all the questions.');
    }
  }
  
  // Event listener for the next button
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  
  // Display the first question
  displayQuestion();