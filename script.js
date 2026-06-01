// ==========================================
// COMPLETE KOREAN LEARNING PLATFORM
// ==========================================

// ==========================================
// DATA
// ==========================================

const lessons = {
  vocabulary: {
    "Seoul National 1A - Lesson 1": [
      { kr: "사람", en: "Person" },
      { kr: "학생", en: "Student" },
      { kr: "선생님", en: "Teacher" },
      { kr: "학교", en: "School" },
      { kr: "친구", en: "Friend" },
      { kr: "한국", en: "Korea" },
      { kr: "책", en: "Book" },
      { kr: "물", en: "Water" },
      { kr: "음식", en: "Food" },
      { kr: "집", en: "House" },
    ],

    "Seoul National 1A - Lesson 2": [
      { kr: "가다", en: "Go" },
      { kr: "오다", en: "Come" },
      { kr: "먹다", en: "Eat" },
      { kr: "마시다", en: "Drink" },
      { kr: "공부하다", en: "Study" },
      { kr: "자다", en: "Sleep" },
      { kr: "보다", en: "See" },
      { kr: "듣다", en: "Listen" },
      { kr: "읽다", en: "Read" },
      { kr: "쓰다", en: "Write" },
    ],

    "Seoul National 2A": [
      { kr: "병원", en: "Hospital" },
      { kr: "약국", en: "Pharmacy" },
      { kr: "시장", en: "Market" },
      { kr: "은행", en: "Bank" },
      { kr: "회사", en: "Company" },
      { kr: "버스", en: "Bus" },
      { kr: "지하철", en: "Subway" },
      { kr: "비행기", en: "Airplane" },
    ],

    "Seoul National 3A": [
      { kr: "문화", en: "Culture" },
      { kr: "경험", en: "Experience" },
      { kr: "약속", en: "Promise" },
      { kr: "취미", en: "Hobby" },
      { kr: "여행", en: "Travel" },
      { kr: "계획", en: "Plan" },
      { kr: "건강", en: "Health" },
    ],

    "Seoul National 4A": [
      { kr: "경제", en: "Economy" },
      { kr: "사회", en: "Society" },
      { kr: "정치", en: "Politics" },
      { kr: "환경", en: "Environment" },
      { kr: "기술", en: "Technology" },
      { kr: "발전", en: "Development" },
    ],
  },

  // ==========================================
  // GRAMMAR
  // ==========================================

  grammar: {
    "Basic Grammar": [
      { kr: "은/는", en: "Topic Particle" },
      { kr: "이/가", en: "Subject Particle" },
      { kr: "을/를", en: "Object Particle" },
      { kr: "에", en: "Location Particle" },
      { kr: "에서", en: "Place of action" },
    ],

    "Verb Endings": [
      { kr: "-아요/어요", en: "Present Tense" },
      { kr: "-았어요/었어요", en: "Past Tense" },
      { kr: "-(으)ㄹ 거예요", en: "Future Tense" },
      { kr: "-고 싶어요", en: "Want to" },
      { kr: "-(으)세요", en: "Please do" },
    ],

    "Intermediate Grammar": [
      { kr: "-(으)면", en: "If" },
      { kr: "-아/어서", en: "Because" },
      { kr: "-지만", en: "But" },
      { kr: "-(으)려고", en: "In order to" },
      { kr: "-아/어 보다", en: "Try doing" },
    ],
  },

  // ==========================================
  // DAILY CONVERSATION
  // ==========================================

  daily: {
    "Daily Conversation": [
      { kr: "안녕하세요", en: "Hello" },
      { kr: "감사합니다", en: "Thank you" },
      { kr: "죄송합니다", en: "Sorry" },
      { kr: "괜찮아요", en: "It's okay" },
      { kr: "어디예요?", en: "Where is it?" },
      { kr: "얼마예요?", en: "How much is it?" },
      { kr: "도와주세요", en: "Please help me" },
      { kr: "배고파요", en: "I'm hungry" },
      { kr: "화장실 어디예요?", en: "Where is the restroom?" },
      { kr: "좋아요", en: "Good" },
    ],

    "Travel Korean": [
      { kr: "공항", en: "Airport" },
      { kr: "호텔", en: "Hotel" },
      { kr: "택시", en: "Taxi" },
      { kr: "지도", en: "Map" },
      { kr: "기차역", en: "Train Station" },
      { kr: "예약", en: "Reservation" },
    ],
  },

  // ==========================================
  // ALPHABETS
  // ==========================================

  alphabet: {
    "Hangul Basic": [
      { kr: "가", en: "ga" },
      { kr: "나", en: "na" },
      { kr: "다", en: "da" },
      { kr: "라", en: "ra" },
      { kr: "마", en: "ma" },
      { kr: "바", en: "ba" },
      { kr: "사", en: "sa" },
      { kr: "아", en: "a" },
    ],

    "English Alphabet": [
      { kr: "A", en: "Apple" },
      { kr: "B", en: "Ball" },
      { kr: "C", en: "Cat" },
      { kr: "D", en: "Dog" },
      { kr: "E", en: "Egg" },
      { kr: "F", en: "Fish" },
      { kr: "G", en: "Girl" },
      { kr: "H", en: "House" },
    ],
  },
};

// ==========================================
// VARIABLES
// ==========================================

let currentLesson = [];
let quizQueue = [];
let totalAsked = 0;
let score = 0;

let xp = localStorage.getItem("xp") || 240;
let streak = localStorage.getItem("streak") || 12;

// ==========================================
// SCREEN SWITCH
// ==========================================

function switchScreen(id) {
  const screens = ["book-screen", "menu-screen", "quiz-screen", "final-screen"];

  screens.forEach((screen) => {
    document.getElementById(screen).style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {
  const xpEl = document.getElementById("xp-points");
  const streakEl = document.getElementById("streak-days");

  if (xpEl) xpEl.innerText = xp;
  if (streakEl) streakEl.innerText = streak;
}

updateStats();

// ==========================================
// MAIN MENU
// ==========================================

function showMainMenu() {
  switchScreen("book-screen");
}

// ==========================================
// SHOW LESSONS
// ==========================================

function showLessons(category) {
  switchScreen("menu-screen");

  const list = document.getElementById("class-list");

  list.innerHTML = "";

  Object.keys(lessons[category]).forEach((lessonName) => {
    const btn = document.createElement("button");

    btn.className = "main-btn";

    btn.innerText = lessonName;

    btn.onclick = () => {
      currentLesson = lessons[category][lessonName];

      startQuiz();
    };

    list.appendChild(btn);
  });
}

// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {
  switchScreen("quiz-screen");

  score = 0;
  totalAsked = 0;

  quizQueue = [...currentLesson].sort(() => 0.5 - Math.random());

  nextQuestion();
}

// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {
  if (totalAsked >= quizQueue.length) {
    return showFinalResult();
  }

  document.getElementById("next-btn").style.display = "none";

  document.getElementById("live-score").innerText = score;

  const current = quizQueue[totalAsked];

  document.getElementById("word-to-guess").innerText = current.kr;

  document.getElementById("quiz-status").innerText =
    `${totalAsked + 1} / ${quizQueue.length}`;

  document.getElementById("progress-bar").style.width =
    `${((totalAsked + 1) / quizQueue.length) * 100}%`;

  const container = document.getElementById("options-container");

  container.innerHTML = "";

  let options = [current.en];

  let others = currentLesson
    .map((item) => item.en)
    .filter((item) => item !== current.en);

  while (options.length < 4 && others.length > 0) {
    const randomIndex = Math.floor(Math.random() * others.length);

    options.push(others.splice(randomIndex, 1)[0]);
  }

  options.sort(() => 0.5 - Math.random());

  options.forEach((option) => {
    const btn = document.createElement("button");

    btn.className = "option-btn";

    btn.innerText = option;

    btn.onclick = () => {
      document
        .querySelectorAll(".option-btn")
        .forEach((button) => (button.disabled = true));

      if (option === current.en) {
        btn.classList.add("correct");

        score++;
      } else {
        btn.classList.add("wrong");

        document.querySelectorAll(".option-btn").forEach((button) => {
          if (button.innerText === current.en) {
            button.classList.add("correct");
          }
        });
      }

      document.getElementById("live-score").innerText = score;

      document.getElementById("next-btn").style.display = "block";
    };

    container.appendChild(btn);
  });

  totalAsked++;
}

// ==========================================
// FINAL RESULT
// ==========================================

function showFinalResult() {
  switchScreen("final-screen");

  const percent = Math.round((score / quizQueue.length) * 100);

  document.getElementById("final-percent").innerText = percent + "%";

  document.getElementById("final-stat").innerText =
    `You answered ${score} out of ${quizQueue.length} correctly`;

  xp = Number(xp) + score * 5;

  streak = Number(streak) + 1;

  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);

  updateStats();
}

// ==========================================
// DARK MODE
// ==========================================

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ==========================================
// MOTIVATION TEXTS
// ==========================================

const motivations = [
  "Keep learning everyday 🚀",
  "Practice Korean daily 🇰🇷",
  "You are improving everyday 🔥",
  "Consistency is the key ✨",
  "Small progress is still progress 💪",
];

const subtitle = document.querySelector(".subtitle");

if (subtitle) {
  const random = Math.floor(Math.random() * motivations.length);

  subtitle.innerText = motivations[random];
}
