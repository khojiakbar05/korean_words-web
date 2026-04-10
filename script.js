// ==========================================
// 1. TO'LIQ 8 TA DARS LUG'ATI
// ==========================================
const allData = {
    "1과": [
        {kr: "오", uz: "besh"}, {kr: "이", uz: "bu/tish"}, {kr: "아우", uz: "bola"}, {kr: "아이", uz: "bola"}, {kr: "오이", uz: "bodring"}, {kr: "가수", uz: "qo'shiqchi"}, {kr: "고기", uz: "go'sht"}, {kr: "구두", uz: "tufli"}, {kr: "나라", uz: "davlat"}, {kr: "나무", uz: "daraxt"}, {kr: "다리", uz: "oyoq"}, {kr: "라디오", uz: "radio"}, {kr: "머리", uz: "bosh"}, {kr: "바나나", uz: "banan"}, {kr: "바지", uz: "shim"}, {kr: "소", uz: "sigir"}, {kr: "아기", uz: "chaqaloq"}, {kr: "어머니", uz: "ona"}, {kr: "지도", uz: "xarita"}, {kr: "모자", uz: "bosh kiyim"}, {kr: "아버지", uz: "ota"}, {kr: "허리", uz: "bel"}, {kr: "지하", uz: "yer osti"}, {kr: "야구", uz: "beyzbol"}, {kr: "야자수", uz: "palma"}, {kr: "이야기", uz: "suhbat"}, {kr: "여자", uz: "ayol"}, {kr: "벼", uz: "guruch"}, {kr: "혀", uz: "til"}, {kr: "요가", uz: "yoga"}, {kr: "요리", uz: "ovqat pishirish"}, {kr: "교수", uz: "professor"}, {kr: "유리", uz: "shisha"}, {kr: "휴지", uz: "tualet qog'ozi"}, {kr: "우유", uz: "sut"}, {kr: "카드", uz: "karta"}, {kr: "코", uz: "burun"}, {kr: "키", uz: "balandlik"}, {kr: "타조", uz: "tuyaqush"}, {kr: "토마토", uz: "pomidor"}, {kr: "투우수", uz: "matador"}, {kr: "파리", uz: "Parij"}, {kr: "포도", uz: "uzum"}, {kr: "우표", uz: "pochta markasi"}, {kr: "차", uz: "choy"}, {kr: "치마", uz: "yubka"}, {kr: "고추", uz: "qalampir"}, {kr: "커피", uz: "kofe"}, {kr: "코트", uz: "palto"}, {kr: "기차표", uz: "poyezd bilet"}, {kr: "까치", uz: "zog'cha"}, {kr: "꼬리", uz: "dum"}, {kr: "코끼리", uz: "fil"}, {kr: "따다", uz: "uzmoq"}, {kr: "뜨다", uz: "suzmoq"}, {kr: "머리띠", uz: "abadok"}, {kr: "뿌리", uz: "tomir,ildiz"}, {kr: "뼈", uz: "suyak"}, {kr: "아빠", uz: "ota"}, {kr: "싸다", uz: "arzon"}, {kr: "쓰다", uz: "yozmoq"}, {kr: "아저씨", uz: "amaki"}, {kr: "짜다", uz: "sho'r"}, {kr: "찌다", uz: "bug'lamoq"}, {kr: "가짜", uz: "qalbaki"}, {kr: "개미", uz: "chumoli"}, {kr: "배", uz: "qayiq"}, {kr: "새", uz: "qush"}, {kr: "해", uz: "quyosh"}, {kr: "게", uz: "qisqichbaqa"}, {kr: "세수", uz: "yuvinish"}, {kr: "그네", uz: "arg'imchoq"}, {kr: "카메라", uz: "kamera"}, {kr: "얘기", uz: "suhbat"}, {kr: "예쁘다", uz: "chiroyli"}, {kr: "시계", uz: "soat"}, {kr: "과자", uz: "pishiriq"}, {kr: "사과", uz: "olma"}, {kr: "뭐", uz: "nima"}, {kr: "돼지", uz: "cho'chqa"}, {kr: "회사", uz: "firma"}, {kr: "귀", uz: "quloq"}, {kr: "의사", uz: "doktor"}, {kr: "의자", uz: "stul"}, {kr: "수박", uz: "tarvuz"}, {kr: "책", uz: "kitob"}, {kr: "돈", uz: "pul"}, {kr: "우산", uz: "soyabon"}, {kr: "옷", uz: "kiyim"}, {kr: "꽃", uz: "gul"}, {kr: "딸기", uz: "qulupnay"}, {kr: "물", uz: "suv"}, {kr: "연필", uz: "qalam"}, {kr: "가방", uz: "sumka"}, {kr: "공", uz: "koptok"}, {kr: "냉장고", uz: "muzlatkich"}
    ],
    "2과": [
        {kr: "나라", uz: "davlat"}, {kr: "중국", uz: "Xitoy"}, {kr: "일본", uz: "Yaponiya"}, {kr: "미국", uz: "AQSH"}, {kr: "한국", uz: "Koreya"}, {kr: "프랑스", uz: "Fransiya"}, {kr: "독일", uz: "Germaniya"}, {kr: "호주", uz: "Avstraliya"}, {kr: "영국", uz: "Angliya"}, {kr: "선생님", uz: "o'qituvchi"}, {kr: "학생", uz: "o'quvchi"}, {kr: "회사원", uz: "ishchi"}, {kr: "요리사", uz: "oshpaz"}, {kr: "기자", uz: "muxbir"}, {kr: "군인", uz: "askar"}, {kr: "반갑다", uz: "xursand bo'lmoq"}, {kr: "그림", uz: "surat"}, {kr: "저", uz: "men"}, {kr: "씨", uz: "janob/xonim"}, {kr: "네", uz: "ha"}, {kr: "주부", uz: "uy bekasi"}, {kr: "어느", uz: "qaysi"}, {kr: "직업", uz: "kasb"}, {kr: "아니요", uz: "yo'q"}, {kr: "여러분", uz: "sizlar"}, {kr: "무엇", uz: "nima"}, {kr: "친구", uz: "do’st"}, {kr: "이름", uz: "ism"}, {kr: "전화번호", uz: "tel raqam"}
    ],
    "3과": [
        {kr: "책상", uz: "parta"}, {kr: "의자", uz: "stul"}, {kr: "책", uz: "kitob"}, {kr: "공책", uz: "daftar"}, {kr: "볼펜", uz: "ruchka"}, {kr: "연필", uz: "qalam"}, {kr: "가방", uz: "sumka"}, {kr: "지우개", uz: "o'chirg'ich"}, {kr: "시계", uz: "soat"}, {kr: "모자", uz: "bosh kiyim"}, {kr: "우산", uz: "soyabon"}, {kr: "신문", uz: "gazeta"}, {kr: "사전", uz: "lug'at"}, {kr: "안경", uz: "ko'zoynak"}, {kr: "휴대폰", uz: "telefon"}, {kr: "동전", uz: "tanga"}, {kr: "차", uz: "mashina"}, {kr: "창문", uz: "deraza"}, {kr: "필통", uz: "qalamdon"}, {kr: "지갑", uz: "hamyon"}, {kr: "사과", uz: "olma"}, {kr: "오렌지", uz: "apelsin"}, {kr: "우유", uz: "sut"}, {kr: "바나나", uz: "banan"}, {kr: "침대", uz: "kravat"}
    ],
    "4과": [
        {kr: "자다", uz: "uxlamoq"}, {kr: "공부하다", uz: "o'qimoq"}, {kr: "일하다", uz: "ishlamoq"}, {kr: "운동하다", uz: "sport"}, {kr: "숙제하다", uz: "vazifa qilmoq"}, {kr: "사다", uz: "sotib olmoq"}, {kr: "보다", uz: "ko'rmoq"}, {kr: "만나다", uz: "uchrashmoq"}, {kr: "배우da", uz: "o'rganish"}, {kr: "먹다", uz: "yemoq"}, {kr: "마시다", uz: "ichmoq"}, {kr: "읽다", uz: "o'qimoq"}, {kr: "도서관", uz: "kutubxona"}, {kr: "집", uz: "uy"}, {kr: "시장", uz: "bozor"}, {kr: "공원", uz: "park"}, {kr: "극장", uz: "kinoteatr"}, {kr: "학교", uz: "maktab"}, {kr: "식당", uz: "oshxona"}, {kr: "지금", uz: "hozir"}, {kr: "오늘", uz: "bugun"}, {kr: "어디", uz: "qayer"}
    ],
    "5과": [
        {kr: "공항", uz: "aeroport"}, {kr: "우체국", uz: "pochta"}, {kr: "은행", uz: "bank"}, {kr: "약국", uz: "apteka"}, {kr: "병원", uz: "kasalxona"}, {kr: "앞", uz: "oldi"}, {kr: "뒤", uz: "orqasi"}, {kr: "옆", uz: "yoni"}, {kr: "안", uz: "ichi"}, {kr: "아래", uz: "tagi"}, {kr: "위", uz: "usti"}, {kr: "교실", uz: "sinf xona"}, {kr: "시내", uz: "shahar markazi"}, {kr: "구경하다", uz: "tomosha qilmoq"}, {kr: "사진", uz: "rasm"}, {kr: "매일", uz: "har kuni"}, {kr: "서점", uz: "kitob do’koni"}, {kr: "화장실", uz: "hojatxona"}
    ],
    "6과": [
        {kr: "월요일", uz: "dushanba"}, {kr: "화요일", uz: "seshanba"}, {kr: "수요일", uz: "chorshanba"}, {kr: "목요일", uz: "payshanba"}, {kr: "금요일", uz: "juma"}, {kr: "토요일", uz: "shanba"}, {kr: "일요일", uz: "yakshanba"}, {kr: "주말", uz: "hafta oxiri"}, {kr: "날짜", uz: "sana"}, {kr: "시험", uz: "imtixon"}, {kr: "언제", uz: "qachon"}, {kr: "생일", uz: "tug'ilgan kun"}, {kr: "약속", uz: "uchrashuv"}, {kr: "어제", uz: "kecha"}, {kr: "선물", uz: "sovg'a"}, {kr: "산책하다", uz: "sayr qilmoq"}, {kr: "내일", uz: "ertaga"}
    ],
    "7과": [
        {kr: "샌드위치", uz: "sendvich"}, {kr: "스파게티", uz: "spagetti"}, {kr: "피za", uz: "pitsa"}, {kr: "햄버거", uz: "hamburger"}, {kr: "귤", uz: "mandarin"}, {kr: "딸기", uz: "qulupnay"}, {kr: "사과", uz: "olma"}, {kr: "수박", uz: "tarvuz"}, {kr: "앉다", uz: "o'tirmoq"}, {kr: "주다", uz: "bermoq"}, {kr: "기다리다", uz: "kutmoq"}, {kr: "빵", uz: "non"}, {kr: "맛있다", uz: "mazali"}, {kr: "비싸다", uz: "qimmat"}, {kr: "얼마", uz: "qancha"}
    ],
    "8과": [
        {kr: "흐리다", uz: "bulutli"}, {kr: "맑다", uz: "ochiq havo"}, {kr: "덥다", uz: "issiq"}, {kr: "춥다", uz: "sovuq"}, {kr: "따뜻하다", uz: "iliq"}, {kr: "시원하다", uz: "salqin"}, {kr: "봄", uz: "bahor"}, {kr: "여름", uz: "yoz"}, {kr: "가을", uz: "kuz"}, {kr: "겨울", uz: "qish"}, {kr: "쉽다", uz: "oson"}, {kr: "어렵다", uz: "qiyin"}, {kr: "맵다", uz: "achchiq"}, {kr: "날씨", uz: "ob havo"}, {kr: "하늘", uz: "osmon"}, {kr: "만들다", uz: "tayyorlamoq"}
    ]
};

// ==========================================
// 2. MANTIQ (O'ZGARTIRMANG)
// ==========================================
let currentLessonWords = [];
let quizQueue = [];
let totalAsked = 0;
let score = 0;
let limit = 10;
let mode = 'mix';

function switchScreen(id) {
    const screens = ['book-screen', 'menu-screen', 'settings-screen', 'quiz-screen', 'final-screen'];
    screens.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.style.display = (s === id ? 'block' : 'none');
    });
}

function showBooks() { switchScreen('book-screen'); }

function showLessons() {
    switchScreen('menu-screen');
    const list = document.getElementById('class-list');
    list.innerHTML = "";
    Object.keys(allData).forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = lesson;
        btn.onclick = () => {
            currentLessonWords = allData[lesson];
            document.getElementById('selected-lesson-name').innerText = lesson;
            switchScreen('settings-screen');
        };
        list.appendChild(btn);
    });
}

function setLimit(n, btn) {
    limit = n;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function setMode(m, btn) {
    mode = m;
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function startQuizNow() {
    score = 0;
    totalAsked = 0;
    // Agarda tanlangan darsda so'zlar limitdan kam bo'lsa, borini oladi
    let maxWords = Math.min(limit, currentLessonWords.length);
    quizQueue = [...currentLessonWords].sort(() => 0.5 - Math.random()).slice(0, maxWords);
    
    switchScreen('quiz-screen');
    nextQuestion();
}

function nextQuestion() {
    if (totalAsked >= quizQueue.length) return showFinalResult();

    totalAsked++;
    document.getElementById('quiz-status').innerText = `${totalAsked} / ${quizQueue.length}`;
    document.getElementById('live-score').innerText = score;
    document.getElementById('progress-bar').style.width = `${(totalAsked / quizQueue.length) * 100}%`;
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('result-message').innerText = "";

    const word = quizQueue[totalAsked - 1];
    let isKrQ;
    if(mode === 'kr-uz') isKrQ = true;
    else if(mode === 'uz-kr') isKrQ = false;
    else isKrQ = Math.random() > 0.5;
    
    const questionText = isKrQ ? word.kr : word.uz;
    const correctAns = isKrQ ? word.uz : word.kr;

    document.getElementById('word-to-guess').innerText = questionText;
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    // Variantlar yasash (Xatolik tuzatilgan qismi)
    let options = [correctAns];
    let allPossibleChoices = currentLessonWords.map(w => isKrQ ? w.uz : w.kr);
    allPossibleChoices = [...new Set(allPossibleChoices)].filter(c => c !== correctAns);

    while(options.length < 4 && allPossibleChoices.length > 0) {
        let randomIndex = Math.floor(Math.random() * allPossibleChoices.length);
        options.push(allPossibleChoices.splice(randomIndex, 1)[0]);
    }

    options.sort(() => 0.5 - Math.random()).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            if(opt === correctAns) {
                score++;
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
                document.querySelectorAll('.option-btn').forEach(b => {
                    if(b.innerText === correctAns) b.classList.add('correct');
                });
            }
            document.getElementById('next-btn').style.display = "block";
        };
        container.appendChild(btn);
    });
}

function showFinalResult() {
    switchScreen('final-screen');
    const p = Math.round((score / quizQueue.length) * 100);
    document.getElementById('final-percent').innerText = p + "%";
    document.getElementById('final-stat').innerText = `${quizQueue.length} tadan ${score} ta to'g'ri topdingiz!`;
}

showBooks();