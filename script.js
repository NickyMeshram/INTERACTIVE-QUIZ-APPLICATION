const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Transfer Mod Language"],
    answer: 0
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "React", "Angular", "Vue"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optionsEl.appendChild(btn);
  });

  resultEl.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer(selected, btn) {
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach(b => b.disabled = true);

  if (selected === q.answer) {
    btn.classList.add("correct");
    resultEl.textContent = "Correct!";
    score++;
  } else {
    btn.classList.add("wrong");
    resultEl.textContent = "Wrong!";
    buttons[q.answer].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
};

function showFinalScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Your Score: ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
}

loadQuestion();
