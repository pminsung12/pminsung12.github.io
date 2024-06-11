const quizData = [
  {
    question: "저의 MBTI는 뭘까요?",
    choices: ["ESFP", "ENFJ", "INFJ", "ISTP"],
    correct: 3
  },
  {
    question: "저의 고향은 어디일까요?",
    choices: ["서울", "대구", "청주", "인천"],
    correct: 1
  },
  {
    question: "제가 공부하고 있는 분야는 뭘까요?",
    choices: ["백엔드", "프론트엔드", "iOS", "AI"],
    correct: 0
  },
  {
    question: "저의 현재 롤티어는 어디일까요?",
    choices: ["브론즈", "실버", "플레티넘", "에메랄드"],
    correct: 1
  },
  {
    question: "제가 사는곳은 어디일까요?",
    choices: ["종로구", "마포구", "영등포구", "노원구"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const startBox = document.getElementById("start-box");
const startButton = document.getElementById("start-quiz");
const quizBox = document.getElementById("quiz-box");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

startButton.addEventListener("click", () => {
  startBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuiz();
});

function loadQuiz() {
  const currentQuizData = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuizData.question;
  choicesElement.innerHTML = "";

  currentQuizData.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.classList.add("choice");
    button.innerText = choice;
    button.addEventListener("click", () => selectAnswer(index));
    choicesElement.appendChild(button);
  });
}

function selectAnswer(index) {
  const currentQuizData = quizData[currentQuestionIndex];
  const buttons = document.querySelectorAll(".choice");
  const emoji = document.createElement("div");
  emoji.id = "emoji";

  if (index === currentQuizData.correct) {
    score += 20;
    buttons[index].classList.add("correct");
    emoji.innerText = "😊";
  } else {
    buttons[index].classList.add("incorrect");
    buttons[currentQuizData.correct].classList.add("correct");
    emoji.innerText = "😢";
  }

  buttons.forEach(button => button.disabled = true);
  choicesElement.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      showResults();
    }
  }, 1500);
}

function showResults() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreElement.innerText = score;
  let message = "";

  if (score === 100) {
    message = "당신은 박민성 마스터!";
  } else if (score >= 80) {
    message = "거의 완벽하네요! 찐친이군요~";
  } else if (score >= 60) {
    message = "이정도면 친구죠 ㅎㅎ 다음단계는 찐친입니다!";
  } else if (score >= 40) {
    message = "아직은 부족해요. 친해지기 위해 노력해요!!";
  } else if (score >= 20) {
    message = "우리 친해지기 위해 조금 더 노력해봐요ㅠㅠ";
  } else {
    message = "저에 대해 아는 게 없군요 ㅠㅠ 더 친해져요.";
  }

  messageElement.innerText = message;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'F12') {
    event.preventDefault();
  }
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
