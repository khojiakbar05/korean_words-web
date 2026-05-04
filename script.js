// ==========================================
// 1. TO'LIQ LUG'AT (1A dan 6B gacha - Ingliz tilida)
// ==========================================
const books = {
    "1A": {
        "Lesson 1": [{kr: "오", en: "five"}, {kr: "이", en: "two/tooth"}, {kr: "아우", en: "younger sibling"}, {kr: "아이", en: "child"}, {kr: "오이", en: "cucumber"}, {kr: "가수", en: "singer"}, {kr: "고기", en: "meat"}, {kr: "구두", en: "shoes"}, {kr: "나라", en: "country"}, {kr: "나무", en: "tree"}, {kr: "다리", en: "leg/bridge"}, {kr: "라디오", en: "radio"}, {kr: "머리", en: "head"}, {kr: "바나나", en: "banana"}, {kr: "바지", en: "pants"}, {kr: "소", en: "cow"}, {kr: "아기", en: "baby"}, {kr: "어머니", en: "mother"}, {kr: "지도", en: "map"}, {kr: "모자", en: "hat"}, {kr: "아버지", en: "father"}, {kr: "허리", en: "waist"}, {kr: "지하", en: "underground"}, {kr: "야구", en: "baseball"}, {kr: "야자수", en: "palm tree"}, {kr: "이야기", en: "story/conversation"}, {kr: "여자", en: "woman"}, {kr: "벼", en: "rice (plant)"}, {kr: "혀", en: "tongue"}, {kr: "요가", en: "yoga"}, {kr: "요리", en: "cooking"}, {kr: "교수", en: "professor"}, {kr: "유리", en: "glass"}, {kr: "휴지", en: "tissue"}, {kr: "우유", en: "milk"}, {kr: "카드", en: "card"}, {kr: "코", en: "nose"}, {kr: "키", en: "height"}, {kr: "타조", en: "ostrich"}, {kr: "토마토", en: "tomato"}, {kr: "투우수", en: "bullfighter"}, {kr: "파리", en: "Paris/fly"}, {kr: "포도", en: "grape"}, {kr: "우표", en: "stamp"}, {kr: "차", en: "tea/car"}, {kr: "치마", en: "skirt"}, {kr: "고추", en: "pepper"}, {kr: "커피", en: "coffee"}, {kr: "코트", en: "coat"}, {kr: "기차표", en: "train ticket"}, {kr: "까치", en: "magpie"}, {kr: "꼬리", en: "tail"}, {kr: "코끼리", en: "elephant"}, {kr: "따다", en: "to pick"}, {kr: "뜨다", en: "to float/open eyes"}, {kr: "머리띠", en: "headband"}, {kr: "뿌리", en: "root"}, {kr: "뼈", en: "bone"}, {kr: "아빠", en: "dad"}, {kr: "싸다", en: "cheap/to wrap"}, {kr: "쓰다", en: "to write/bitter/wear"}, {kr: "아저씨", en: "uncle"}, {kr: "짜다", en: "salty"}, {kr: "찌다", en: "to steam"}, {kr: "가짜", en: "fake"}, {kr: "개미", en: "ant"}, {kr: "배", en: "boat/pear/stomach"}, {kr: "새", en: "bird"}, {kr: "해", en: "sun"}, {kr: "게", en: "crab"}, {kr: "세수", en: "washing face"}, {kr: "그네", en: "swing"}, {kr: "카메라", en: "camera"}, {kr: "얘기", en: "story"}, {kr: "예쁘다", en: "pretty"}, {kr: "시계", en: "clock"}, {kr: "과자", en: "snack"}, {kr: "사과", en: "apple"}, {kr: "뭐", en: "what"}, {kr: "돼지", en: "pig"}, {kr: "회사", en: "company"}, {kr: "귀", en: "ear"}, {kr: "의사", en: "doctor"}, {kr: "의자", en: "chair"}, {kr: "수박", en: "watermelon"}, {kr: "책", en: "book"}, {kr: "돈", en: "money"}, {kr: "우산", en: "umbrella"}, {kr: "옷", en: "clothes"}, {kr: "꽃", en: "flower"}, {kr: "딸기", en: "strawberry"}, {kr: "물", en: "water"}, {kr: "연필", en: "pencil"}, {kr: "가방", en: "bag"}, {kr: "공", en: "ball"}, {kr: "냉장고", en: "refrigerator"}],
        "Lesson 2": [{kr: "나라", en: "country"}, {kr: "중국", en: "China"}, {kr: "일본", en: "Japan"}, {kr: "미국", en: "USA"}, {kr: "한국", en: "Korea"}, {kr: "프랑스", en: "France"}, {kr: "독일", en: "Germany"}, {kr: "호주", en: "Australia"}, {kr: "영국", en: "UK"}, {kr: "선생님", en: "teacher"}, {kr: "학생", en: "student"}, {kr: "회사원", en: "office worker"}, {kr: "요리사", en: "chef"}, {kr: "기자", en: "journalist"}, {kr: "군인", en: "soldier"}, {kr: "반갑다", en: "glad to meet"}, {kr: "그림", en: "picture"}, {kr: "저", en: "I (humble)"}, {kr: "씨", en: "Mr./Ms."}, {kr: "네", en: "yes"}, {kr: "주부", en: "housewife"}, {kr: "어느", en: "which"}, {kr: "직업", en: "job"}, {kr: "아니요", en: "no"}, {kr: "여러분", en: "everyone"}, {kr: "무엇", en: "what"}, {kr: "친구", en: "friend"}, {kr: "이름", en: "name"}, {kr: "전화번호", en: "phone number"}],
        "Lesson 3": [{kr: "책상", en: "desk"}, {kr: "의자", en: "chair"}, {kr: "책", en: "book"}, {kr: "공책", en: "notebook"}, {kr: "볼펜", en: "ballpoint pen"}, {kr: "연필", en: "pencil"}, {kr: "가방", en: "bag"}, {kr: "지우개", en: "eraser"}, {kr: "시계", en: "clock/watch"}, {kr: "모자", en: "hat"}, {kr: "우산", en: "umbrella"}, {kr: "신문", en: "newspaper"}, {kr: "사전", en: "dictionary"}, {kr: "안경", en: "glasses"}, {kr: "휴대폰", en: "mobile phone"}, {kr: "동전", en: "coin"}, {kr: "차", en: "car/tea"}, {kr: "창문", en: "window"}, {kr: "필통", en: "pencil case"}, {kr: "지갑", en: "wallet"}, {kr: "사과", en: "apple"}, {kr: "오렌지", en: "orange"}, {kr: "우유", en: "milk"}, {kr: "바나나", en: "banana"}, {kr: "침대", en: "bed"}],
        "Lesson 4": [{kr: "자다", en: "to sleep"}, {kr: "공부하다", en: "to study"}, {kr: "일하다", en: "to work"}, {kr: "운동하다", en: "to exercise"}, {kr: "숙제하다", en: "to do homework"}, {kr: "사다", en: "to buy"}, {kr: "보다", en: "to see/watch"}, {kr: "만나다", en: "to meet"}, {kr: "배우다", en: "to learn"}, {kr: "먹다", en: "to eat"}, {kr: "마시다", en: "to drink"}, {kr: "읽다", en: "to read"}, {kr: "도서관", en: "library"}, {kr: "집", en: "house/home"}, {kr: "시장", en: "market"}, {kr: "공원", en: "park"}, {kr: "극장", en: "theater"}, {kr: "학교", en: "school"}, {kr: "식당", en: "restaurant"}, {kr: "지금", en: "now"}, {kr: "오늘", en: "today"}, {kr: "어디", en: "where"}],
        "Lesson 5": [{kr: "공항", en: "airport"}, {kr: "우체국", en: "post office"}, {kr: "은행", en: "bank"}, {kr: "약국", en: "pharmacy"}, {kr: "병원", en: "hospital"}, {kr: "앞", en: "front"}, {kr: "뒤", en: "back/behind"}, {kr: "옆", en: "beside"}, {kr: "안", en: "inside"}, {kr: "아래", en: "under"}, {kr: "위", en: "above/on"}, {kr: "교실", en: "classroom"}, {kr: "시내", en: "downtown"}, {kr: "구경하다", en: "to look around/sightsee"}, {kr: "사진", en: "photo"}, {kr: "매일", en: "everyday"}, {kr: "서점", en: "bookstore"}, {kr: "화장실", en: "restroom"}],
        "Lesson 6": [{kr: "월요일", en: "Monday"}, {kr: "화요일", en: "Tuesday"}, {kr: "수요일", en: "Wednesday"}, {kr: "목요일", en: "Thursday"}, {kr: "금요일", en: "Friday"}, {kr: "토요일", en: "Saturday"}, {kr: "일요일", en: "Sunday"}, {kr: "주말", en: "weekend"}, {kr: "날짜", en: "date"}, {kr: "시험", en: "exam"}, {kr: "언제", en: "when"}, {kr: "생일", en: "birthday"}, {kr: "약속", en: "appointment/promise"}, {kr: "어제", en: "yesterday"}, {kr: "선물", en: "present/gift"}, {kr: "산책하다", en: "to take a walk"}, {kr: "내일", en: "tomorrow"}],
        "Lesson 7": [{kr: "샌드위치", en: "sandwich"}, {kr: "스파게티", en: "spaghetti"}, {kr: "피자", en: "pizza"}, {kr: "햄버거", en: "hamburger"}, {kr: "귤", en: "tangerine"}, {kr: "딸기", en: "strawberry"}, {kr: "사과", en: "apple"}, {kr: "수박", en: "watermelon"}, {kr: "앉다", en: "to sit"}, {kr: "주다", en: "to give"}, {kr: "기다리다", en: "to wait"}, {kr: "빵", en: "bread"}, {kr: "맛있다", en: "delicious"}, {kr: "비싸다", en: "expensive"}, {kr: "얼마", en: "how much"}],
        "Lesson 8": [{kr: "흐리다", en: "cloudy"}, {kr: "맑다", en: "clear (weather)"}, {kr: "덥다", en: "hot"}, {kr: "춥다", en: "cold"}, {kr: "따뜻하다", en: "warm"}, {kr: "시원하다", en: "cool"}, {kr: "봄", en: "spring"}, {kr: "여름", en: "summer"}, {kr: "가을", en: "autumn"}, {kr: "겨울", en: "winter"}, {kr: "쉽다", en: "easy"}, {kr: "어렵다", en: "difficult"}, {kr: "맵다", en: "spicy"}, {kr: "날씨", en: "weather"}, {kr: "하늘", en: "sky"}, {kr: "만들다", en: "to make"}]
    },
    "1B": {
        "Lesson 9": [{kr: "할머니", en: "grandmother"}, {kr: "할아버지", en: "grandfather"}, {kr: "어머니", en: "mother"}, {kr: "아버지", en: "father"}, {kr: "누나", en: "older sister (for males)"}, {kr: "형", en: "older brother (for males)"}, {kr: "언니", en: "older sister (for females)"}, {kr: "오빠", en: "older brother (for females)"}, {kr: "여동생", en: "younger sister"}, {kr: "남동생", en: "younger brother"}, {kr: "아내", en: "wife"}, {kr: "남편", en: "husband"}, {kr: "딸", en: "daughter"}, {kr: "아들", en: "son"}, {kr: "열", en: "10"}, {kr: "스물", en: "20"}, {kr: "서른", en: "30"}, {kr: "마흔", en: "40"}, {kr: "쉰", en: "50"}, {kr: "예순", en: "60"}, {kr: "일흔", en: "70"}, {kr: "여든", en: "80"}, {kr: "아흔", en: "90"}, {kr: "백", en: "100"}, {kr: "이름/성함", en: "name"}, {kr: "집/댁", en: "house"}, {kr: "사람/명/분", en: "person"}, {kr: "나이/연세", en: "age"}, {kr: "있다/계시다", en: "to exist/be"}, {kr: "먹다/마시다/드시다", en: "to eat/drink"}, {kr: "자다/주무시다", en: "to sleep"}, {kr: "상자", en: "box"}, {kr: "꺼내다", en: "to take out"}, {kr: "운전", en: "driving"}, {kr: "수학", en: "mathematics"}, {kr: "인사하다", en: "to greet"}, {kr: "이쪽", en: "this side/way"}, {kr: "한테서", en: "from (a person)"}, {kr: "뭘요", en: "not at all/you're welcome"}, {kr: "동아리", en: "club"}, {kr: "같은과", en: "same department"}, {kr: "윗사람", en: "elder/superior"}, {kr: "역사", en: "history"}, {kr: "이분", en: "this person"}, {kr: "우리", en: "we/our"}, {kr: "반친구", en: "classmate"}, {kr: "다니다", en: "to attend/commute"}, {kr: "친절하다", en: "kind"}, {kr: "사장님", en: "boss/CEO"}, {kr: "전에", en: "before"}, {kr: "멋있다", en: "cool/handsome"}, {kr: "부모님", en: "parents"}, {kr: "미인", en: "beauty"}, {kr: "대학교", en: "university"}, {kr: "신문사", en: "newspaper company"}, {kr: "중학교", en: "middle school"}, {kr: "공손하다", en: "polite"}, {kr: "강아지", en: "puppy"}, {kr: "가족사진", en: "family photo"}, {kr: "웃다", en: "to laugh/smile"}, {kr: "취미", en: "hobby"}, {kr: "아기", en: "baby"}, {kr: "태어나다", en: "to be born"}, {kr: "다른나라", en: "other country"}, {kr: "되다", en: "to become"}],
        "Lesson 10": [{kr: "새벽", en: "dawn"}, {kr: "아침", en: "morning"}, {kr: "낮", en: "daytime"}, {kr: "저녁", en: "evening"}, {kr: "밤", en: "night"}, {kr: "오전", en: "AM (morning)"}, {kr: "오후", en: "PM (afternoon)"}, {kr: "일어나다", en: "to wake up"}, {kr: "버스를 기다리다", en: "to wait for a bus"}, {kr: "운전하다", en: "to drive"}, {kr: "버스를 타다", en: "to ride a bus"}, {kr: "세수하다", en: "to wash one's face"}, {kr: "청소하다", en: "to clean"}, {kr: "회의하다", en: "to have a meeting"}, {kr: "빨래하다", en: "to do laundry"}, {kr: "전화하다", en: "to call"}, {kr: "컴퓨터를 하다", en: "to use a computer"}, {kr: "요리하다", en: "to cook"}, {kr: "샤워하다", en: "to take a shower"}, {kr: "시", en: "hour (o'clock)"}, {kr: "분", en: "minute"}, {kr: "반", en: "half"}, {kr: "쯤", en: "about/approximately"}, {kr: "아침", en: "breakfast"}, {kr: "저녁", en: "dinner"}, {kr: "수업을 하다", en: "to have class"}, {kr: "시험을 보다", en: "to take an exam"}, {kr: "그리다", en: "to draw"}, {kr: "이번", en: "this time"}, {kr: "방학", en: "vacation"}, {kr: "조금후", en: "after a little while"}, {kr: "주말 잘 보내다", en: "have a good weekend"}, {kr: "데이트하다", en: "to go on a date"}, {kr: "강남", en: "Gangnam"}, {kr: "여의도", en: "Yeouido"}, {kr: "박물관", en: "museum"}, {kr: "연습", en: "practice"}, {kr: "인천", en: "Incheon"}, {kr: "전통", en: "traditional"}, {kr: "이메일", en: "email"}, {kr: "출입국관리사무소", en: "immigration office"}, {kr: "그렇지만", en: "but/however"}],
        "Lesson 11": [{kr: "머리", en: "head/hair"}, {kr: "목", en: "neck/throat"}, {kr: "어깨", en: "shoulder"}, {kr: "팔", en: "arm"}, {kr: "손", en: "hand"}, {kr: "가슴", en: "chest"}, {kr: "배", en: "stomach"}, {kr: "허리", en: "waist"}, {kr: "다리", en: "leg"}, {kr: "무릎", en: "knee"}, {kr: "발", en: "foot"}, {kr: "눈", en: "eye"}, {kr: "코", en: "nose"}, {kr: "입", en: "mouth"}, {kr: "귀", en: "ear"}, {kr: "얼굴", en: "face"}, {kr: "기침을 하다", en: "to cough"}, {kr: "목이 아프다", en: "to have a sore throat"}, {kr: "열이 나다", en: "to have a fever"}, {kr: "콧물이 나다", en: "to have a runny nose"}, {kr: "바쁘다", en: "busy"}, {kr: "배고프다", en: "hungry"}, {kr: "예쁘다", en: "pretty"}, {kr: "편지", en: "letter"}, {kr: "쓰다", en: "to write"}, {kr: "나쁘다", en: "bad"}, {kr: "담배를 피우다", en: "to smoke"}, {kr: "알겠다", en: "I understand"}, {kr: "늦다", en: "late"}, {kr: "감기에 걸리다", en: "to catch a cold"}, {kr: "유행이다", en: "in fashion/trend"}, {kr: "약", en: "medicine"}, {kr: "푹 쉬다", en: "to rest well"}, {kr: "말(을) 하다", en: "to speak"}, {kr: "오래", en: "for a long time"}, {kr: "목욕하다", en: "to take a bath"}, {kr: "술", en: "alcohol"}, {kr: "환자", en: "patient"}, {kr: "의사", en: "doctor"}, {kr: "씻다", en: "to wash"}, {kr: "따뜻한 물", en: "warm water"}, {kr: "얼음물", en: "ice water"}, {kr: "손님", en: "guest/customer"}, {kr: "내년", en: "next year"}, {kr: "결혼하다", en: "to marry"}, {kr: "괜찮다", en: "okay/fine"}, {kr: "다행이다", en: "what a relief"}, {kr: "너무", en: "too much"}, {kr: "무리하다", en: "to overdo it"}, {kr: "생신", en: "birthday (honorific)"}, {kr: "리포트", en: "report"}, {kr: "내다", en: "to submit"}, {kr: "알람", en: "alarm"}, {kr: "끄다", en: "to turn off"}, {kr: "걱정", en: "worry"}, {kr: "발음", en: "pronunciation"}, {kr: "피시방", en: "PC room"}, {kr: "싸우다", en: "to fight"}, {kr: "금연", en: "no smoking"}, {kr: "주차금지", en: "no parking"}, {kr: "파", en: "green onion"}, {kr: "붙이다", en: "to attach/stick"}, {kr: "소금물", en: "salt water"}, {kr: "헹구다", en: "to rinse"}, {kr: "무즙", en: "radish juice"}, {kr: "마사지하다", en: "to massage"}],
        "Lesson 12": [{kr: "전화번호", en: "phone number"}, {kr: "문자를 받다", en: "to receive a text"}, {kr: "문자를 보내다", en: "to send a text"}, {kr: "전화를 받다", en: "to answer the phone"}, {kr: "전화(를)하다", en: "to make a call"}, {kr: "그렇습니다", en: "that's right"}, {kr: "오랜만이에요", en: "long time no see"}, {kr: "일", en: "work/matter"}, {kr: "사무실", en: "office"}, {kr: "뭘요", en: "don't mention it"}, {kr: "맛없다", en: "tasteless"}, {kr: "왜", en: "why"}, {kr: "조금전", en: "a little while ago"}, {kr: "늦잠", en: "oversleeping"}, {kr: "여행사", en: "travel agency"}, {kr: "아까", en: "earlier"}, {kr: "그럼요", en: "of course"}, {kr: "이따", en: "later"}, {kr: "다른", en: "other"}, {kr: "다", en: "all"}, {kr: "장소", en: "place"}, {kr: "몰라서", en: "because I didn't know"}, {kr: "도둑이 들다", en: "a thief broke in"}, {kr: "사고가 나다", en: "an accident happened"}, {kr: "불이 나다", en: "a fire broke out"}],
        "Lesson 13": [{kr: "버스", en: "bus"}, {kr: "기차", en: "train"}, {kr: "비행기", en: "airplane"}, {kr: "배", en: "ship"}, {kr: "택시", en: "taxi"}, {kr: "자전거", en: "bicycle"}, {kr: "지하철", en: "subway"}, {kr: "오토바이", en: "motorcycle"}, {kr: "타다", en: "to ride"}, {kr: "갈아타다", en: "to transfer"}, {kr: "내리다", en: "to get off"}, {kr: "버스 정류장", en: "bus stop"}, {kr: "기차역", en: "train station"}, {kr: "고속 터미널", en: "express bus terminal"}, {kr: "지하철역", en: "subway station"}, {kr: "닫다", en: "to close"}, {kr: "돕다", en: "to help"}, {kr: "칠판", en: "blackboard"}, {kr: "울다", en: "to cry"}, {kr: "쭉", en: "straight"}, {kr: "서울역", en: "Seoul Station"}, {kr: "세우다", en: "to stop/park"}, {kr: "신호등", en: "traffic light"}, {kr: "정문", en: "main gate"}, {kr: "호선", en: "subway line"}, {kr: "구급차", en: "ambulance"}, {kr: "편리하다", en: "convenient"}, {kr: "사용하다", en: "to use"}],
        "Lesson 14": [{kr: "요금", en: "fare/fee"}, {kr: "깎다", en: "to cut/discount"}, {kr: "셔츠", en: "shirt"}, {kr: "모자", en: "hat"}, {kr: "바지", en: "pants"}, {kr: "치마", en: "skirt"}, {kr: "코트", en: "coat"}, {kr: "원피스", en: "dress"}, {kr: "구두", en: "shoes"}, {kr: "운동화", en: "sneakers"}, {kr: "양복", en: "suit"}, {kr: "입다", en: "to wear (clothes)"}, {kr: "신다", en: "to wear (shoes)"}, {kr: "쓰다", en: "to wear (hat)"}, {kr: "크다", en: "big"}, {kr: "작다", en: "small"}, {kr: "길다", en: "long"}, {kr: "짧다", en: "short"}, {kr: "높다", en: "high"}, {kr: "낮다", en: "low"}, {kr: "비싸다", en: "expensive"}, {kr: "싸다", en: "cheap"}, {kr: "두껍다", en: "thick"}, {kr: "얇다", en: "thin"}, {kr: "살다", en: "to live"}, {kr: "놀다", en: "to play"}, {kr: "팔다", en: "to sell"}, {kr: "열다", en: "to open"}, {kr: "유행이다", en: "to be popular"}, {kr: "무섭다", en: "scary"}, {kr: "슬프다", en: "sad"}, {kr: "키", en: "height"}, {kr: "청바지", en: "blue jeans"}, {kr: "마음", en: "heart/mind"}, {kr: "선물하다", en: "to gift"}, {kr: "한복", en: "Hanbok (traditional clothes)"}, {kr: "단순하다", en: "simple"}, {kr: "목도리", en: "scarf"}, {kr: "귀걸이", en: "earrings"}, {kr: "기쁘다", en: "glad/happy"}],
        "Lesson 15": [{kr: "돈을 바꾸다", en: "to exchange money"}, {kr: "비행기표 예매", en: "booking a flight"}, {kr: "여권", en: "passport"}, {kr: "호텔 예약", en: "hotel reservation"}, {kr: "도착하다", en: "to arrive"}, {kr: "돌아오다", en: "to return"}, {kr: "여행하다", en: "to travel"}, {kr: "출발하다", en: "to depart"}, {kr: "경치", en: "scenery"}, {kr: "조용하다", en: "quiet"}, {kr: "반지", en: "ring"}, {kr: "프러포즈", en: "proposal"}, {kr: "떠나다", en: "to leave"}, {kr: "즐겁다", en: "pleasant/enjoyable"}, {kr: "휴가", en: "vacation"}, {kr: "신혼여행", en: "honeymoon"}, {kr: "올라가다", en: "to go up"}, {kr: "보이다", en: "to be seen"}, {kr: "질문", en: "question"}, {kr: "계획하다", en: "to plan"}, {kr: "식사하다", en: "to have a meal"}, {kr: "준비하다", en: "to prepare"}, {kr: "초대하다", en: "to invite"}, {kr: "축하하다", en: "to congratulate"}, {kr: "빨리", en: "quickly"}, {kr: "열심히", en: "hard/diligently"}, {kr: "일찍", en: "early"}, {kr: "천천히", en: "slowly"}, {kr: "이사하다", en: "to move (house)"}, {kr: "돈을 찾다", en: "to withdraw money"}, {kr: "춤을 추다", en: "to dance"}, {kr: "답장", en: "reply"}]
    },
    "2A": {
        "Lesson 1": [
            {kr: "학생 카드", en: "student ID card"}, {kr: "성명", en: "full name"}, {kr: "생년월일", en: "date of birth"}, {kr: "연락처/전화번호", en: "contact number"}, {kr: "주소", en: "address"}, {kr: "성별", en: "gender"}, {kr: "남", en: "male"}, {kr: "여", en: "female"}, {kr: "직업", en: "occupation"}, {kr: "종교", en: "religion"}, {kr: "매일", en: "every day"}, {kr: "매주", en: "every week"}, {kr: "매년", en: "every year"}, {kr: "항상", en: "always"}, {kr: "자주", en: "often"}, {kr: "가끔", en: "sometimes"}, {kr: "부르다", en: "to call/sing"}, {kr: "뵙다", en: "to see/meet (humble)"}, {kr: "그냥", en: "just"}, {kr: "들어가다", en: "to go in"}, {kr: "이유", en: "reason"}, {kr: "국적", en: "nationality"}, {kr: "나이/연세", en: "age"}, {kr: "이름/성함", en: "name"}, {kr: "질문", en: "question"}, {kr: "평일", en: "weekday"}, {kr: "사 오다", en: "to buy and bring"}, {kr: "초대를 받다", en: "to receive an invitation"}, {kr: "코미디 영화", en: "comedy movie"}, {kr: "액션 영화", en: "action movie"}, {kr: "소설책", en: "novel"}, {kr: "시간이 나다", en: "to have free time"}, {kr: "스페인어", en: "Spanish"}, {kr: "언어", en: "language"}, {kr: "문화", en: "culture"}, {kr: "관심", en: "interest"}, {kr: "중남미", en: "Latin America"}, {kr: "정도", en: "degree/extent"}, {kr: "유명하다", en: "famous"}, {kr: "에 대해서", en: "about/regarding"}, {kr: "발표하다", en: "to present/announce"}, {kr: "글자", en: "letter/character"}, {kr: "제일/가장", en: "most"}, {kr: "친하다", en: "to be close (friends)"}, {kr: "성", en: "last name"}, {kr: "빼다", en: "to subtract/remove"}, {kr: "형제들", en: "siblings"}, {kr: "비슷하다", en: "similar"}, {kr: "과제", en: "assignment"}, {kr: "문화 산책", en: "cultural walk"}, {kr: "발음", en: "pronunciation"}, {kr: "규칙", en: "rule"}, {kr: "연습", en: "practice"}, {kr: "준비", en: "preparation"}
        ],
        "Lesson 2": [
            {kr: "취미", en: "hobby"}, {kr: "사진을 찍다", en: "to take a picture"}, {kr: "음악을 듣다", en: "to listen to music"}, {kr: "춤(을) 추다", en: "to dance"}, {kr: "그림을 그리다", en: "to draw a picture"}, {kr: "인형을 모으다", en: "to collect dolls"}, {kr: "인터넷을 하다", en: "to surf the internet"}, {kr: "영화 감상", en: "movie appreciation"}, {kr: "음악 감상", en: "music appreciation"}, {kr: "등산", en: "hiking"}, {kr: "독서", en: "reading"}, {kr: "여행", en: "traveling"}, {kr: "요리", en: "cooking"}, {kr: "낚시", en: "fishing"}, {kr: "운동", en: "exercise"}, {kr: "컴퓨터 게임", en: "computer game"}, {kr: "아주", en: "very"}, {kr: "별로", en: "not really"}, {kr: "전혀", en: "not at all"}, {kr: "야구(를) 하다", en: "to play baseball"}, {kr: "외국어", en: "foreign language"}, {kr: "라틴 댄스", en: "Latin dance"}, {kr: "동호회", en: "club/society"}, {kr: "가입하다", en: "to join"}, {kr: "모으다", en: "to gather/collect"}, {kr: "모이다", en: "to be gathered"}, {kr: "연습실", en: "practice room"}, {kr: "회비", en: "membership fee"}, {kr: "블로그", en: "blog"}, {kr: "참", en: "really"}, {kr: "문화 센터", en: "culture center"}, {kr: "올리다", en: "to post/upload"}, {kr: "여러 가지", en: "various"}
        ],
        "Lesson 3": [
            {kr: "콘서트", en: "concert"}, {kr: "음악회", en: "music festival"}, {kr: "연극", en: "play/theater"}, {kr: "뮤지컬", en: "musical"}, {kr: "전시회", en: "exhibition"}, {kr: "축제", en: "festival"}, {kr: "불꽃놀이", en: "fireworks"}, {kr: "사물놀이", en: "traditional percussion quartet"}, {kr: "배낭여행", en: "backpacking"}, {kr: "아르바이트", en: "part-time job"}, {kr: "번지 점프", en: "bungee jumping"}, {kr: "스쿠버 다이빙", en: "scuba diving"}, {kr: "박물관", en: "museum"}, {kr: "미술관", en: "art gallery"}, {kr: "공연장", en: "concert hall"}, {kr: "놀이공원", en: "amusement park"}, {kr: "시간", en: "time"}, {kr: "달", en: "month/moon"}, {kr: "노래방", en: "karaoke"}, {kr: "삼계탕", en: "ginseng chicken soup"}, {kr: "찜질방", en: "Korean sauna"}, {kr: "한복", en: "Hanbok"}, {kr: "하루", en: "one day"}, {kr: "갔다 오다", en: "to go and come back"}, {kr: "생선회", en: "sliced raw fish"}, {kr: "요가", en: "yoga"}, {kr: "사막", en: "desert"}, {kr: "온천", en: "hot spring"}, {kr: "빌려 주다", en: "to lend"}, {kr: "국제", en: "international"}, {kr: "영화제", en: "film festival"}, {kr: "재즈", en: "jazz"}, {kr: "존경하다", en: "to respect"}, {kr: "왕", en: "king"}, {kr: "한라산", en: "Hallasan Mountain"}, {kr: "닭", en: "chicken"}, {kr: "자리", en: "seat/place"}, {kr: "꼭", en: "surely/must"}, {kr: "출장", en: "business trip"}, {kr: "중요하다", en: "important"}, {kr: "덕수궁", en: "Deoksugung Palace"}, {kr: "글쎄요", en: "well/I'm not sure"}, {kr: "특히", en: "especially"}, {kr: "기억이 남다", en: "to remain in memory"}, {kr: "여러 나라", en: "various countries"}, {kr: "벚꽃", en: "cherry blossom"}, {kr: "감독", en: "director"}, {kr: "배우", en: "actor/actress"}, {kr: "낙타", en: "camel"}, {kr: "유럽", en: "Europe"}, {kr: "말하기 대회", en: "speaking contest"}, {kr: "상을 받다", en: "to receive an award"}, {kr: "경험", en: "experience"}, {kr: "이틀", en: "2 days"}, {kr: "사흘", en: "3 days"}, {kr: "나흘", en: "4 days"}, {kr: "열흘", en: "10 days"}
        ],
        "Lesson 4": [
            {kr: "블라우스", en: "blouse"}, {kr: "스웨터", en: "sweater"}, {kr: "양복", en: "suit"}, {kr: "티셔츠", en: "T-shirt"}, {kr: "청바지", en: "jeans"}, {kr: "넥타이", en: "tie"}, {kr: "장갑", en: "gloves"}, {kr: "스카프", en: "scarf"}, {kr: "입다", en: "to wear (body)"}, {kr: "쓰다", en: "to wear (head)"}, {kr: "끼다", en: "to wear (hands)"}, {kr: "하다", en: "to do/wear (accessories)"}, {kr: "신다", en: "to wear (feet)"}, {kr: "마음에 들다", en: "to be to one's liking"}, {kr: "잘 어울리다", en: "to match well"}, {kr: "좀 크다", en: "a bit big"}, {kr: "잘 맞다", en: "to fit well"}, {kr: "비싸다", en: "expensive"}, {kr: "싸다", en: "cheap"}, {kr: "밝다", en: "bright"}, {kr: "어둡다", en: "dark"}, {kr: "길다", en: "long"}, {kr: "짧다", en: "short"}, {kr: "옷값", en: "price of clothes"}, {kr: "맛", en: "taste"}, {kr: "디자인", en: "design"}, {kr: "유행하다", en: "to be in fashion"}, {kr: "훨씬", en: "much more"}, {kr: "산", en: "mountain"}, {kr: "바다", en: "sea"}, {kr: "건강하다", en: "healthy"}, {kr: "굽이 높다", en: "high heels"}, {kr: "교환하다", en: "to exchange"}, {kr: "환불하다", en: "to refund"}, {kr: "필요하다", en: "necessary"}, {kr: "절약하다", en: "to save/economize"}, {kr: "주문하다", en: "to order"}, {kr: "면접", en: "interview"}, {kr: "싱싱하다", en: "fresh"}, {kr: "고추장", en: "red pepper paste"}, {kr: "사이즈", en: "size"}, {kr: "색깔", en: "color"}
        ],
        "Lesson 5": [
            {kr: "기간", en: "period"}, {kr: "교통편", en: "transportation"}, {kr: "숙소", en: "accommodation"}, {kr: "요금", en: "fare/fee"}, {kr: "일정", en: "schedule/itinerary"}, {kr: "박", en: "night(s) of stay"}, {kr: "항공료", en: "airfare"}, {kr: "식비", en: "food expenses"}, {kr: "입장료", en: "admission fee"}, {kr: "항공권 예약", en: "flight reservation"}, {kr: "왕복", en: "round trip"}, {kr: "편도", en: "one-way"}, {kr: "출발지", en: "point of departure"}, {kr: "도착지", en: "destination"}, {kr: "출국 날짜", en: "departure date"}, {kr: "귀국 날짜", en: "return date"}, {kr: "달력", en: "calendar"}, {kr: "성인", en: "adult"}, {kr: "소아", en: "child"}, {kr: "유아", en: "infant"}, {kr: "좌석", en: "seat"}, {kr: "비즈니스석", en: "business class"}, {kr: "아마", en: "probably"}, {kr: "담배를 끊다", en: "to quit smoking"}, {kr: "전통문화", en: "traditional culture"}, {kr: "느끼다", en: "to feel"}, {kr: "패키지여행", en: "package tour"}, {kr: "공연", en: "performance"}, {kr: "바라다", en: "to wish/hope"}, {kr: "방법", en: "method"}, {kr: "마치다", en: "to finish"}, {kr: "포함되어 있다", en: "to be included"}, {kr: "추천하다", en: "to recommend"}, {kr: "빈방", en: "empty room"}, {kr: "가이드", en: "guide"}, {kr: "건축물", en: "architecture/building"}, {kr: "자연", en: "nature"}, {kr: "다양하다", en: "diverse"}, {kr: "이용하다", en: "to use"}, {kr: "한옥", en: "traditional Korean house"}, {kr: "분위기", en: "atmosphere"}, {kr: "대통령", en: "president"}, {kr: "등록금", en: "tuition fee"}
        ],
        "Lesson 6": [
            {kr: "우표를 붙이다", en: "to attach a stamp"}, {kr: "주소를 쓰다", en: "to write an address"}, {kr: "편지를 부치다", en: "to send a letter"}, {kr: "소포를 포장하다", en: "to pack a parcel"}, {kr: "돈을 찾다", en: "to withdraw money"}, {kr: "돈을 바꾸다", en: "to exchange money"}, {kr: "신분증", en: "ID card"}, {kr: "통장", en: "bankbook"}, {kr: "도장", en: "stamp/seal"}, {kr: "현금 카드", en: "cash card"}, {kr: "길이 막히다", en: "traffic jam"}, {kr: "저울", en: "scale"}, {kr: "상자", en: "box"}, {kr: "오르다", en: "to rise/go up"}, {kr: "빠르다", en: "fast"}, {kr: "모르다", en: "to not know"}, {kr: "다르다", en: "different"}, {kr: "서두르다", en: "to hurry"}, {kr: "외국인등록증", en: "alien registration card"}, {kr: "벌써", en: "already"}, {kr: "차비", en: "transportation fare"}, {kr: "잃어버리다", en: "to lose"}, {kr: "환율", en: "exchange rate"}, {kr: "택배", en: "delivery service"}, {kr: "경비실", en: "security office"}, {kr: "방문하다", en: "to visit"}, {kr: "신청하다", en: "to apply"}, {kr: "우편", en: "mail"}, {kr: "바로", en: "immediately/directly"}, {kr: "의미", en: "meaning"}, {kr: "제비", en: "swallow (bird)"}, {kr: "소식", en: "news"}
        ],
        "Lesson 7": [
            {kr: "사거리", en: "intersection"}, {kr: "신호등", en: "traffic light"}, {kr: "지하철 정류장", en: "subway station"}, {kr: "지하도", en: "underpass"}, {kr: "육교", en: "overpass"}, {kr: "횡단보도", en: "crosswalk"}, {kr: "쭉 가다", en: "to go straight"}, {kr: "왼쪽으로 돌아가다", en: "to turn left"}, {kr: "건너다", en: "to cross"}, {kr: "세우다", en: "to stop/park"}, {kr: "직진하다", en: "to go straight ahead"}, {kr: "좌회전하다", en: "to turn left"}, {kr: "우회전하다", en: "to turn right"}, {kr: "근처", en: "nearby"}, {kr: "출구", en: "exit"}, {kr: "친구를 사귀다", en: "to make friends"}, {kr: "한참", en: "for a long time"}, {kr: "경찰서", en: "police station"}, {kr: "잊다", en: "to forget"}, {kr: "지나다", en: "to pass by"}, {kr: "걸어오다", en: "to walk here"}, {kr: "약도", en: "rough map"}, {kr: "광장", en: "square/plaza"}, {kr: "동상", en: "statue"}, {kr: "장군", en: "general"}, {kr: "기념하다", en: "to commemorate"}
        ],
        "Lesson 8": [
            {kr: "기분이 좋다", en: "to feel good"}, {kr: "기쁘다", en: "glad/happy"}, {kr: "슬프다", en: "sad"}, {kr: "외롭다", en: "lonely"}, {kr: "창피하다", en: "embarrassed"}, {kr: "속상하다", en: "upset"}, {kr: "답답하다", en: "frustrated/stuffy"}, {kr: "긴장되다", en: "nervous"}, {kr: "걱정되다", en: "worried"}, {kr: "화가 나다", en: "angry"}, {kr: "짜증이 나다", en: "annoyed"}, {kr: "무섭다", en: "scary"}, {kr: "재미있다", en: "interesting"}, {kr: "퇴원하다", en: "to be discharged from hospital"}, {kr: "고장이 나다", en: "to break down"}, {kr: "큰 소리로", en: "loudly"}, {kr: "잘못", en: "mistake/wrong"}, {kr: "운이 없다", en: "unlucky"}, {kr: "잠이 들다", en: "to fall asleep"}, {kr: "놓치다", en: "to miss"}, {kr: "넘어지다", en: "to fall down"}, {kr: "졸다", en: "to doze off"}, {kr: "종점", en: "last stop"}, {kr: "외우다", en: "to memorize"}, {kr: "스트레스를 풀다", en: "to relieve stress"}, {kr: "대답하다", en: "to answer"}, {kr: "당황하다", en: "to be flustered/panicked"}, {kr: "설명하다", en: "to explain"}
        ],
        "Lesson 9": [
            {kr: "전화를 걸다", en: "to make a phone call"}, {kr: "전화를 바꾸다", en: "to transfer the call"}, {kr: "통화를 하다", en: "to talk on the phone"}, {kr: "문자를 지우다", en: "to delete a text"}, {kr: "대상", en: "target/subject"}, {kr: "참가비", en: "participation fee"}, {kr: "문의", en: "inquiry"}, {kr: "부탁하다", en: "to request/ask a favor"}, {kr: "국악", en: "Korean traditional music"}, {kr: "무료", en: "free"}, {kr: "체험", en: "experience"}, {kr: "참가하다", en: "to participate"}, {kr: "궁금하다", en: "curious"}, {kr: "통역하다", en: "to interpret"}, {kr: "치료를 받다", en: "to receive treatment"}, {kr: "정보를 얻다", en: "to get information"}
        ]
    },
    "2B": {
        "Lesson 10": [
            {kr: "달다", en: "sweet"}, {kr: "짜다", en: "salty"}, {kr: "쓰다", en: "bitter"}, {kr: "시다", en: "sour"}, {kr: "맵다", en: "spicy"}, {kr: "맛", en: "taste"}, {kr: "값", en: "price"}, {kr: "교통", en: "traffic/transportation"}, {kr: "서비스", en: "service"}, {kr: "분위기", en: "atmosphere"}, {kr: "동갑", en: "same age"}, {kr: "선배", en: "senior"}, {kr: "후배", en: "junior"}, {kr: "오랜만에", en: "after a long time"}, {kr: "미리", en: "in advance"}, {kr: "자유 여행", en: "free travel"}, {kr: "시키다", en: "to order"}, {kr: "1인분", en: "1 portion"}, {kr: "입에 맞다", en: "to suit one's taste"}, {kr: "추천", en: "recommendation"}, {kr: "이상", en: "more than"}, {kr: "후식", en: "dessert"}, {kr: "판", en: "slice/pizza piece"}, {kr: "갖다 주다", en: "to bring"}, {kr: "배달되다", en: "to be delivered"}, {kr: "맛집", en: "good restaurant"}, {kr: "한정식", en: "Korean table d'hote"}, {kr: "직원", en: "employee"}, {kr: "상", en: "table"}, {kr: "야채", en: "vegetables"}, {kr: "돈이 아깝다", en: "waste of money"}, {kr: "추천하다", en: "to recommend"}, {kr: "케밥", en: "kebab"}, {kr: "높임말", en: "honorific language"}, {kr: "말을 놓다", en: "to speak casually"}
        ],
        "Lesson 11": [
            {kr: "속이 안 좋다", en: "to have an upset stomach"}, {kr: "몸살이 나다", en: "to ache all over (body ache)"}, {kr: "다리를 다치다", en: "to hurt one's leg"}, {kr: "소화가 안 되다", en: "to have indigestion"}, {kr: "배탈이 나다", en: "to have a stomachache"}, {kr: "토하다", en: "to vomit"}, {kr: "어지럽다", en: "dizzy"}, {kr: "멀미를 하다", en: "to have motion sickness"}, {kr: "얼굴에 뭐가 나다", en: "to have a breakout on the face"}, {kr: "기운이 없다", en: "to have no energy"}, {kr: "잠을 잘 못 자다", en: "can't sleep well"}, {kr: "내과", en: "internal medicine"}, {kr: "소아과", en: "pediatrics"}, {kr: "치과", en: "dentistry"}, {kr: "피부과", en: "dermatology"}, {kr: "정형외과", en: "orthopedics"}, {kr: "이비인후과", en: "ENT (Ear, Nose, Throat)"}, {kr: "감기약", en: "cold medicine"}, {kr: "두통약", en: "headache medicine"}, {kr: "멀미약", en: "motion sickness medicine"}, {kr: "소화제", en: "digestive medicine"}, {kr: "해열제", en: "fever reducer"}, {kr: "안약", en: "eye drops"}, {kr: "파스", en: "pain relief patch"}, {kr: "연고", en: "ointment"}, {kr: "낫다", en: "to get better"}, {kr: "기침이 나다", en: "to cough"}, {kr: "붓다", en: "to swell"}, {kr: "짓다", en: "to build/name/make"}, {kr: "젓다", en: "to stir"}, {kr: "식후", en: "after meal"}, {kr: "증상", en: "symptom"}, {kr: "진료를 받다", en: "to receive medical treatment"}, {kr: "싱겁다", en: "bland"}, {kr: "생활비", en: "living expenses"}, {kr: "화해하다", en: "to reconcile"}, {kr: "특별히", en: "especially"}, {kr: "고민", en: "worry/trouble"}, {kr: "습관", en: "habit"}, {kr: "영양제", en: "nutritional supplement"}, {kr: "예방하다", en: "to prevent"}, {kr: "만지다", en: "to touch"}, {kr: "첫인상", en: "first impression"}
        ],
        "Lesson 12": [
            {kr: "눈이 크다", en: "big eyes"}, {kr: "눈썹이 진하다", en: "thick eyebrows"}, {kr: "쌍꺼풀", en: "double eyelid"}, {kr: "코가 높다", en: "high nose"}, {kr: "입술이 두껍다", en: "thick lips"}, {kr: "이마가 넓다", en: "broad forehead"}, {kr: "활발하다", en: "active/outgoing"}, {kr: "내성적이다", en: "introverted"}, {kr: "꼼꼼하다", en: "meticulous/careful"}, {kr: "남성적이다", en: "masculine"}, {kr: "여성적이다", en: "feminine"}, {kr: "성격이 급하다", en: "hasty/impatient"}, {kr: "멋있다", en: "cool"}, {kr: "똑똑하다", en: "smart"}, {kr: "날씬하다", en: "slim"}, {kr: "생기다", en: "to look like/appear"}, {kr: "모델", en: "model"}, {kr: "자매", en: "sisters"}, {kr: "졸업식", en: "graduation ceremony"}, {kr: "정확하다", en: "accurate"}, {kr: "이상형", en: "ideal type"}, {kr: "외모", en: "appearance"}, {kr: "파마를 하다", en: "to get a perm"}, {kr: "염색을 하다", en: "to dye hair"}, {kr: "제스처", en: "gesture"}, {kr: "정리를 하다", en: "to organize"}, {kr: "스트레스가 쌓이다", en: "stress builds up"}, {kr: "붕어빵", en: "fish-shaped pastry / look-alike"}
        ],
        "Lesson 13": [
            {kr: "기숙사", en: "dormitory"}, {kr: "아파트", en: "apartment"}, {kr: "주택", en: "house"}, {kr: "원룸", en: "studio apartment"}, {kr: "거실", en: "living room"}, {kr: "부엌", en: "kitchen"}, {kr: "현관", en: "entrance/porch"}, {kr: "방이 넓다", en: "spacious room"}, {kr: "시설", en: "facilities"}, {kr: "교통이 편리하다", en: "convenient transportation"}, {kr: "주변이 조용하다", en: "quiet neighborhood"}, {kr: "전망이 좋다", en: "good view"}, {kr: "집주인", en: "landlord"}, {kr: "집세", en: "rent"}, {kr: "관리비", en: "maintenance fee"}, {kr: "부동산", en: "real estate agency"}, {kr: "하숙집", en: "boarding house"}, {kr: "구하다", en: "to look for/seek"}, {kr: "월세", en: "monthly rent"}, {kr: "계약", en: "contract"}, {kr: "보증금", en: "deposit"}, {kr: "결정하다", en: "to decide"}, {kr: "위치", en: "location"}, {kr: "매매", en: "buying and selling"}, {kr: "유학", en: "studying abroad"}, {kr: "조건", en: "condition"}, {kr: "룸메이트", en: "roommate"}, {kr: "입학", en: "admission to school"}
        ],
        "Lesson 14": [
            {kr: "반말을 하다", en: "to speak informally"}, {kr: "높임말", en: "honorifics"}, {kr: "양보하다", en: "to yield/offer seat"}, {kr: "다리를 꼬다", en: "to cross one's legs"}, {kr: "고개를 숙이다", en: "to bow one's head"}, {kr: "금연", en: "no smoking"}, {kr: "주차 금지", en: "no parking"}, {kr: "실수하다", en: "to make a mistake"}, {kr: "예절", en: "manners/etiquette"}, {kr: "야단 맞다", en: "to be scolded"}, {kr: "칭찬하다", en: "to praise"}, {kr: "자신", en: "confidence/oneself"}, {kr: "나이가 들다", en: "to get older"}, {kr: "할인", en: "discount"}, {kr: "참다", en: "to endure/hold back"}
        ],
        "Lesson 15": [
            {kr: "태어나다", en: "to be born"}, {kr: "사랑에 빠지다", en: "to fall in love"}, {kr: "졸업하다", en: "to graduate"}, {kr: "취직하다", en: "to get a job"}, {kr: "결혼하다", en: "to get married"}, {kr: "아기를 낳다", en: "to have a baby"}, {kr: "승진하다", en: "to be promoted"}, {kr: "은퇴하다", en: "to retire"}, {kr: "발전하다", en: "to develop"}, {kr: "익숙하다", en: "to be used to"}, {kr: "고생하다", en: "to suffer/go through hardship"}, {kr: "다행이다", en: "what a relief"}, {kr: "변화", en: "change"}, {kr: "봉사 활동", en: "volunteer work"}, {kr: "인구", en: "population"}
        ],
        "Lesson 16": [
            {kr: "한복", en: "Hanbok (Korean traditional clothes)"}, {kr: "세배", en: "New Year's bow"}, {kr: "성묘", en: "visiting ancestral graves"}, {kr: "차례", en: "ancestral rites"}, {kr: "윷놀이", en: "Yut game"}, {kr: "설거지", en: "dishwashing"}, {kr: "연휴", en: "long weekend/holiday"}, {kr: "명절", en: "national holiday"}, {kr: "조상", en: "ancestor"}, {kr: "추수하다", en: "to harvest"}, {kr: "이웃", en: "neighbor"}, {kr: "나누다", en: "to share"}, {kr: "보름달", en: "full moon"}, {kr: "소원을 빌다", en: "to make a wish"}
        ],
        "Lesson 17": [
            {kr: "잃어버리다", en: "to lose"}, {kr: "놓치다", en: "to miss"}, {kr: "부딪히다", en: "to bump into"}, {kr: "떨어뜨리다", en: "to drop"}, {kr: "불이 나다", en: "fire breaks out"}, {kr: "하얀색", en: "white"}, {kr: "까만색", en: "black"}, {kr: "빨간색", en: "red"}, {kr: "노란색", en: "yellow"}, {kr: "파란색", en: "blue"}, {kr: "녹색", en: "green"}, {kr: "분홍색", en: "pink"}, {kr: "갈색", en: "brown"}, {kr: "보라색", en: "purple"}, {kr: "줄무늬", en: "striped pattern"}, {kr: "체크무늬", en: "checkered pattern"}, {kr: "정신이 없다", en: "to be out of one's mind/frantic"}, {kr: "유실물 센터", en: "lost and found"}, {kr: "수첩", en: "pocketbook/diary"}, {kr: "추억", en: "memory"}, {kr: "소중하다", en: "precious"}, {kr: "돌잔치", en: "first birthday party"}
        ],
        "Lesson 18": [
            {kr: "그립다", en: "to miss/long for"}, {kr: "아쉽다", en: "to feel sorry/regretful"}, {kr: "정이 들다", en: "to become attached"}, {kr: "후회가 되다", en: "to regret"}, {kr: "꽃이 피다", en: "flowers bloom"}, {kr: "건조하다", en: "dry"}, {kr: "장마", en: "rainy season"}, {kr: "태풍", en: "typhoon"}, {kr: "습도", en: "humidity"}, {kr: "단풍이 들다", en: "leaves change color"}, {kr: "쌀쌀하다", en: "chilly"}, {kr: "얼음이 얼다", en: "to freeze"}, {kr: "영하", en: "below zero"}, {kr: "홈스테이", en: "homestay"}, {kr: "실력이 늘다", en: "skills improve"}
        ]
    },
    "3A": {
        "Lesson 1": [
            {kr: "입학식", en: "entrance ceremony"}, {kr: "오리엔테이션", en: "orientation"}, {kr: "신입생 환영회", en: "welcoming party for freshmen"}, {kr: "동아리", en: "club"}, {kr: "축제", en: "festival"}, {kr: "졸업식", en: "graduation ceremony"}, {kr: "강의", en: "lecture"}, {kr: "과목", en: "subject"}, {kr: "전공", en: "major"}, {kr: "성적", en: "grade"}, {kr: "학점", en: "credit"}, {kr: "장학금", en: "scholarship"}, {kr: "지원하다", en: "to apply"}, {kr: "신청하다", en: "to register"}, {kr: "합격하다", en: "to pass"}, {kr: "가입하다", en: "to join"}, {kr: "참석하다", en: "to attend"}, {kr: "게시판", en: "bulletin board"}, {kr: "기회", en: "opportunity"}, {kr: "상금", en: "prize money"}, {kr: "도움이 되다", en: "to be helpful"}, {kr: "주차장", en: "parking lot"}, {kr: "학기", en: "semester"}, {kr: "인기가 많다", en: "to be popular"}, {kr: "사회생활", en: "social life"}
        ],
        "Lesson 2": [
            {kr: "손톱을 깨물다", en: "to bite one's nails"}, {kr: "다리를 떨다", en: "to shake one's leg"}, {kr: "코를 골다", en: "to snore"}, {kr: "한숨을 쉬다", en: "to sigh"}, {kr: "머리를 긁다", en: "to scratch one's head"}, {kr: "잠꼬대를 하다", en: "to talk in one's sleep"}, {kr: "다리를 꼬다", en: "to cross legs"}, {kr: "이를 갈다", en: "to grind one's teeth"}, {kr: "불평을 하다", en: "to complain"}, {kr: "야단을 맞다", en: "to be scolded"}, {kr: "잔소리를 하다", en: "to nag"}, {kr: "조언을 하다", en: "to advise"}, {kr: "버릇을 고치다", en: "to fix a habit"}, {kr: "습관을 기르다", en: "to develop a habit"}, {kr: "실천하다", en: "to put into practice"}, {kr: "포기하다", en: "to give up"}, {kr: "밤새도록", en: "all night long"}, {kr: "옮기다", en: "to move"}, {kr: "어쩔 수가 없다", en: "cannot be helped"}, {kr: "실패하다", en: "to fail"}, {kr: "성공하다", en: "to succeed"}, {kr: "미루다", en: "to delay"}, {kr: "부지런하다", en: "diligent"}
        ],
        "Lesson 3": [
            {kr: "소나기가 오다", en: "sudden shower"}, {kr: "폭우가 내리다", en: "heavy rain"}, {kr: "폭설", en: "heavy snow"}, {kr: "태풍", en: "typhoon"}, {kr: "홍수", en: "flood"}, {kr: "가뭄", en: "drought"}, {kr: "안개가 끼다", en: "to be foggy"}, {kr: "번개가 치다", en: "lightning strikes"}, {kr: "천둥", en: "thunder"}, {kr: "쓰러지다", en: "to collapse"}, {kr: "무너지다", en: "to fall apart"}, {kr: "살을 빼다", en: "to lose weight"}, {kr: "관광객", en: "tourist"}, {kr: "챙기다", en: "to pack/take care of"}, {kr: "그치다", en: "to stop (rain)"}, {kr: "특이하다", en: "unique/unusual"}, {kr: "수족관", en: "aquarium"}, {kr: "빛나다", en: "to shine"}, {kr: "일교차", en: "daily temperature range"}, {kr: "반드시", en: "without fail/surely"}, {kr: "꽁꽁", en: "frozen solid"}
        ],
        "Lesson 4": [
            {kr: "간장", en: "soy sauce"}, {kr: "고추장", en: "red pepper paste"}, {kr: "설탕", en: "sugar"}, {kr: "참기름", en: "sesame oil"}, {kr: "다듬다", en: "to trim/clean"}, {kr: "썰다", en: "to chop/slice"}, {kr: "다지다", en: "to mince"}, {kr: "볶다", en: "to fry/roast"}, {kr: "찌다", en: "to steam"}, {kr: "삶다", en: "to boil"}, {kr: "굽다", en: "to bake/grill"}, {kr: "끓이다", en: "to boil (liquid)"}, {kr: "바르다", en: "to apply/spread"}, {kr: "출출하다", en: "to feel a bit hungry"}, {kr: "간단하다", en: "simple"}, {kr: "간식", en: "snack"}, {kr: "익다", en: "to be cooked/ripe"}, {kr: "매콤하다", en: "somewhat spicy"}, {kr: "꿀", en: "honey"}, {kr: "반죽", en: "dough"}, {kr: "뒤집다", en: "to flip"}, {kr: "역시", en: "as expected"}
        ],
        "Lesson 5": [
            {kr: "딱 맞다", en: "to fit perfectly"}, {kr: "꽉 끼다", en: "to be tight"}, {kr: "적당하다", en: "appropriate/moderate"}, {kr: "헐렁하다", en: "loose"}, {kr: "굽이 높다", en: "high heels"}, {kr: "금액", en: "amount (of money)"}, {kr: "일시불", en: "lump-sum payment"}, {kr: "할부", en: "installment"}, {kr: "배송비", en: "shipping fee"}, {kr: "구입하다", en: "to purchase"}, {kr: "결제하다", en: "to make a payment"}, {kr: "반품하다", en: "to return a product"}, {kr: "망설이다", en: "to hesitate"}, {kr: "줄이다", en: "to reduce"}, {kr: "얼룩", en: "stain"}, {kr: "고객", en: "customer"}, {kr: "튀다", en: "to stand out/splatter"}, {kr: "상태", en: "condition"}, {kr: "불만", en: "complaint"}
        ],
        "Lesson 6": [
            {kr: "한산하다", en: "quiet/not crowded"}, {kr: "붐비다", en: "crowded"}, {kr: "깔끔하다", en: "neat/clean"}, {kr: "평범하다", en: "ordinary"}, {kr: "다양하다", en: "diverse"}, {kr: "저렴하다", en: "inexpensive"}, {kr: "신선하다", en: "fresh"}, {kr: "지키다", en: "to keep/protect"}, {kr: "어기다", en: "to violate/break"}, {kr: "마중 나오다", en: "to come out to meet"}, {kr: "맞은편", en: "opposite side"}, {kr: "보이다", en: "to be seen"}, {kr: "닫히다", en: "to be closed"}, {kr: "숙박", en: "lodging"}, {kr: "후기", en: "review"}, {kr: "전체", en: "whole/entire"}, {kr: "평가", en: "evaluation"}, {kr: "휴식", en: "rest"}
        ],
        "Lesson 7": [
            {kr: "전화가 끊기다", en: "call is disconnected"}, {kr: "화면", en: "screen"}, {kr: "액정이 나가다", en: "screen is broken"}, {kr: "종이가 걸리다", en: "paper jam"}, {kr: "빠뜨리다", en: "to drop (into something)"}, {kr: "쏟다", en: "to spill"}, {kr: "먼지가 끼다", en: "to get dusty"}, {kr: "켜다 / 끄다", en: "to turn on / turn off"}, {kr: "꽂다 / 빼다", en: "to plug in / pull out"}, {kr: "분명히", en: "clearly/certainly"}, {kr: "수리 기사", en: "repair technician"}, {kr: "우선", en: "first of all"}, {kr: "복사하다", en: "to copy"}, {kr: "해결", en: "solution"}, {kr: "사용 설명서", en: "user manual"}, {kr: "흔들리다", en: "to shake/sway"}, {kr: "닳다", en: "to wear out"}
        ],
        "Lesson 8": [
            {kr: "안전벨트", en: "seat belt"}, {kr: "과속하다", en: "to speed"}, {kr: "신호를 어기다", en: "to violate traffic light"}, {kr: "음주 운전", en: "drunk driving"}, {kr: "갇히다", en: "to be trapped"}, {kr: "미끄러지다", en: "to slip"}, {kr: "삐다", en: "to sprain"}, {kr: "부러지다", en: "to break/fracture"}, {kr: "깁스를 하다", en: "to get a cast"}, {kr: "수술하다", en: "to perform surgery"}, {kr: "입원하다", en: "to be hospitalized"}, {kr: "문병", en: "visiting a sick person"}, {kr: "들키다", en: "to be caught"}, {kr: "부딪치다", en: "to crash/bump"}, {kr: "신고하다", en: "to report"}, {kr: "사망하다", en: "to die"}, {kr: "주의", en: "caution"}, {kr: "필수", en: "essential/required"}
        ],
        "Lesson 9": [
            {kr: "어린이날", en: "Children's Day"}, {kr: "어버이날", en: "Parents' Day"}, {kr: "스승의 날", en: "Teachers' Day"}, {kr: "식목일", en: "Arbor Day"}, {kr: "광복절", en: "Liberation Day"}, {kr: "기념하다", en: "to commemorate"}, {kr: "독립하다", en: "to become independent"}, {kr: "통일하다", en: "to unify"}, {kr: "국기를 달다", en: "to hang a national flag"}, {kr: "기억나다", en: "to remember"}, {kr: "공휴일", en: "public holiday"}, {kr: "진심", en: "sincerity/true heart"}, {kr: "묵념", en: "silent tribute"}, {kr: "수상자", en: "winner"}, {kr: "위로", en: "consolation"}, {kr: "격려", en: "encouragement"}, {kr: "투표", en: "voting"}, {kr: "성년식", en: "coming-of-age ceremony"}
        ]
    },
    "3B": {
        "Lesson 10": [
            {kr: "소개팅하다", en: "to go on a blind date"}, {kr: "첫눈에 반하다", en: "to fall in love at first sight"}, {kr: "사귀다", en: "to date/go out"}, {kr: "사랑에 빠지다", en: "to fall in love"}, {kr: "고백하다", en: "to confess"}, {kr: "연애하다", en: "to date"}, {kr: "선보다", en: "to have an arranged meeting"}, {kr: "청혼하다", en: "to propose marriage"}, {kr: "조건이 맞다", en: "conditions match"}, {kr: "매력이 있다", en: "attractive"}, {kr: "인상이 좋다", en: "good impression"}, {kr: "마음씨가 착하다", en: "good-hearted"}, {kr: "가슴이 두근거리다", en: "heart is pounding"}, {kr: "신혼여행", en: "honeymoon"}, {kr: "청첩장", en: "wedding invitation"}, {kr: "예식장", en: "wedding hall"}, {kr: "이성", en: "opposite sex"}, {kr: "헤어지다", en: "to break up"}, {kr: "천생연분", en: "match made in heaven"}, {kr: "배우자", en: "spouse"}
        ],
        "Lesson 11": [
            {kr: "아르바이트", en: "part-time job"}, {kr: "근무 시간", en: "working hours"}, {kr: "연령", en: "age"}, {kr: "시급", en: "hourly wage"}, {kr: "업무", en: "task/duty"}, {kr: "성실하다", en: "sincere/diligent"}, {kr: "꼼꼼하다", en: "meticulous"}, {kr: "최선을 다하다", en: "to do one's best"}, {kr: "대인 관계", en: "interpersonal relationships"}, {kr: "부장", en: "department head"}, {kr: "과장", en: "section chief"}, {kr: "신입 사원", en: "new employee"}, {kr: "동료", en: "colleague"}, {kr: "대기업", en: "large corporation"}, {kr: "연봉", en: "annual salary"}, {kr: "승진", en: "promotion"}, {kr: "복권", en: "lottery"}, {kr: "일자리", en: "job opening"}, {kr: "취업 박람회", en: "job fair"}
        ],
        "Lesson 12": [
            {kr: "살이 찌다/빠지다", en: "to gain weight / lose weight"}, {kr: "자세", en: "posture"}, {kr: "목을 돌리다", en: "to roll one's neck"}, {kr: "가슴을 펴다", en: "to stick one's chest out"}, {kr: "숨이 차다", en: "to be out of breath"}, {kr: "땀이 나다", en: "to sweat"}, {kr: "지치다", en: "to be exhausted"}, {kr: "상쾌하다", en: "refreshing"}, {kr: "근육이 생기다", en: "to build muscle"}, {kr: "꾸준히", en: "steadily/consistently"}, {kr: "권유하다", en: "to advise/recommend"}, {kr: "부족하다", en: "lacking/insufficient"}, {kr: "날씬하다", en: "slim"}, {kr: "윗몸 일으키기", en: "sit-ups"}, {kr: "줄넘기", en: "jump rope"}, {kr: "예방", en: "prevention"}
        ],
        "Lesson 13": [
            {kr: "집들이", en: "housewarming party"}, {kr: "돌잔치", en: "first birthday party"}, {kr: "송년회", en: "year-end party"}, {kr: "동창회", en: "alumni gathering"}, {kr: "상을 차리다", en: "to set the table"}, {kr: "대접하다", en: "to treat/serve"}, {kr: "충분하다", en: "enough/sufficient"}, {kr: "모자라다", en: "to lack/be short of"}, {kr: "사회자", en: "MC/host"}, {kr: "유창하다", en: "fluent"}, {kr: "덕분에", en: "thanks to"}, {kr: "채식", en: "vegetarian diet"}, {kr: "뷔페", en: "buffet"}, {kr: "멸종 위기", en: "endangered"}, {kr: "상영하다", en: "to screen (a movie)"}, {kr: "의식", en: "ceremony/consciousness"}
        ],
        "Lesson 14": [
            {kr: "여유가 있다", en: "to have room/time"}, {kr: "활기차다", en: "lively"}, {kr: "평화롭다", en: "peaceful"}, {kr: "공해", en: "pollution"}, {kr: "따분하다", en: "boring"}, {kr: "편의 시설", en: "convenience facilities"}, {kr: "농사", en: "farming"}, {kr: "심다", en: "to plant"}, {kr: "가꾸다", en: "to cultivate/grow"}, {kr: "사라지다", en: "to disappear"}, {kr: "변하다", en: "to change"}, {kr: "상상하다", en: "to imagine"}, {kr: "논 / 밭", en: "rice paddy / field"}, {kr: "나이가 들다", en: "to get older"}, {kr: "과수원", en: "orchard"}, {kr: "환경", en: "environment"}, {kr: "나무꾼", en: "woodcutter"}, {kr: "바둑을 두다", en: "to play Go"}
        ],
        "Lesson 15": [
            {kr: "전기가 나가다", en: "power outage"}, {kr: "변기가 막히다", en: "toilet is clogged"}, {kr: "물이 새다", en: "water is leaking"}, {kr: "소음", en: "noise"}, {kr: "계약서", en: "contract"}, {kr: "보증금", en: "deposit"}, {kr: "공과금", en: "utility bills"}, {kr: "연체료", en: "late fee"}, {kr: "포함되다", en: "to be included"}, {kr: "지출 / 수입", en: "expenditure / income"}, {kr: "아끼다 / 절약하다", en: "to save/economize"}, {kr: "낭비하다", en: "to waste"}, {kr: "저축하다", en: "to save money"}, {kr: "자취", en: "living independently"}, {kr: "고지서", en: "bill/notice"}, {kr: "황사", en: "yellow dust"}, {kr: "면세점", en: "duty-free shop"}, {kr: "목표", en: "goal/target"}, {kr: "풍습", en: "custom"}
        ],
        "Lesson 16": [
            {kr: "신이 나다", en: "to be excited"}, {kr: "마음이 설레다", en: "heart flutters"}, {kr: "악기를 누르다", en: "to press an instrument"}, {kr: "불다", en: "to blow"}, {kr: "튕기다", en: "to pluck (strings)"}, {kr: "뾰족하다", en: "sharp/pointed"}, {kr: "딱딱하다", en: "hard"}, {kr: "부드럽다", en: "soft"}, {kr: "평평하다", en: "flat"}, {kr: "매끄럽다", en: "smooth"}, {kr: "거칠다", en: "rough"}, {kr: "야경", en: "night view"}, {kr: "폭포", en: "waterfall"}, {kr: "빙어 낚시", en: "ice fishing"}, {kr: "천국", en: "heaven"}, {kr: "성수기 / 비수기", en: "peak season / off-season"}, {kr: "포장하다", en: "to pack/wrap"}, {kr: "보관", en: "storage"}
        ],
        "Lesson 17": [
            {kr: "소문이 나다", en: "a rumor spreads"}, {kr: "그럴 리가 없다", en: "it can't be true"}, {kr: "틀림없다", en: "certain/without a doubt"}, {kr: "우연히", en: "by chance"}, {kr: "자세히", en: "in detail"}, {kr: "솔직히", en: "honestly"}, {kr: "실망하다", en: "to be disappointed"}, {kr: "다투다", en: "to argue"}, {kr: "오해하다", en: "to misunderstand"}, {kr: "화해하다", en: "to reconcile"}, {kr: "실제로", en: "in reality"}, {kr: "흥미롭다", en: "interesting"}, {kr: "출신", en: "origin/background"}, {kr: "상식", en: "common sense"}, {kr: "발전시키다", en: "to develop"}, {kr: "마침내", en: "finally"}, {kr: "말조심", en: "being careful with words"}
        ],
        "Lesson 18": [
            {kr: "연극", en: "play/theater"}, {kr: "무대", en: "stage"}, {kr: "관객", en: "audience"}, {kr: "대본", en: "script"}, {kr: "대사", en: "lines/dialogue"}, {kr: "숨기다", en: "to hide"}, {kr: "빼앗다", en: "to take away"}, {kr: "깨뜨리다", en: "to break"}, {kr: "거울", en: "mirror"}, {kr: "신기하다", en: "amazing/marvelous"}, {kr: "도대체", en: "what on earth"}, {kr: "시어머니", en: "mother-in-law"}, {kr: "며느리", en: "daughter-in-law"}, {kr: "영감", en: "old man"}, {kr: "바닥", en: "floor"}, {kr: "장롱", en: "wardrobe"}
        ]
    },
    "4A": {
        "Lesson 1": [
            {kr: "손재주가 좋다", en: "to be good with one's hands"}, {kr: "설득력이 있다", en: "persuasive"}, {kr: "책임감이 강하다", en: "strong sense of responsibility"}, {kr: "적성에 맞다", en: "to suit one's aptitude"}, {kr: "전공을 살리다", en: "to utilize one's major"}, {kr: "사교적", en: "sociable"}, {kr: "꿈을 이루다", en: "to achieve a dream"}, {kr: "법과대학", en: "law school"}, {kr: "경영대학", en: "business school"}, {kr: "공과대학", en: "engineering college"}, {kr: "의과대학", en: "medical school"}
        ],
        "Lesson 2": [
            {kr: "눈이 침침하다", en: "eyes are dim"}, {kr: "목이 뻣뻣하다", en: "stiff neck"}, {kr: "속이 거북하다", en: "stomach is upset"}, {kr: "과로", en: "overwork"}, {kr: "과식", en: "overeating"}, {kr: "예방하다", en: "to prevent"}, {kr: "치료하다", en: "to treat (medical)"}, {kr: "붕대를 감다", en: "to wrap a bandage"}, {kr: "깁스를 하다", en: "to wear a cast"}, {kr: "침을 놓다", en: "to do acupuncture"}, {kr: "진맥을 하다", en: "to feel the pulse"}
        ],
        "Lesson 3": [
            {kr: "득점을 하다", en: "to score a point"}, {kr: "결승전에 진출하다", en: "to advance to the finals"}, {kr: "막상막하이다", en: "neck and neck"}, {kr: "자신만만하다", en: "full of confidence"}, {kr: "흥미진진하다", en: "very exciting"}, {kr: "역전패하다", en: "to lose after leading"}, {kr: "비기다", en: "to tie/draw"}, {kr: "응원하다", en: "to cheer for"}, {kr: "최선을 다하다", en: "to do one's best"}, {kr: "씨름", en: "Korean wrestling"}
        ],
        "Lesson 4": [
            {kr: "눈치가 없다", en: "to lack tact/clueless"}, {kr: "고집이 세다", en: "stubborn"}, {kr: "자존심이 강하다", en: "strong pride"}, {kr: "당황스럽다", en: "embarrassing/baffling"}, {kr: "실제", en: "reality/actual"}, {kr: "원만하다", en: "amiable/smooth"}, {kr: "의논하다", en: "to discuss"}, {kr: "침착하다", en: "calm/composed"}, {kr: "뛰어나다", en: "outstanding/excellent"}
        ],
        "Lesson 5": [
            {kr: "시작이 반이다", en: "well begun is half done"}, {kr: "입이 가볍다", en: "to have a loose tongue"}, {kr: "눈이 높다", en: "to have high standards"}, {kr: "발이 넓다", en: "to have a wide circle of acquaintances"}, {kr: "제대로", en: "properly"}, {kr: "죽마고우", en: "childhood friend"}, {kr: "안타깝다", en: "pitiful/regrettable"}, {kr: "정신이 없다", en: "to be out of one's mind/frantic"}
        ],
        "Lesson 6": [
            {kr: "감동적이다", en: "touching/moving"}, {kr: "가슴이 찡하다", en: "heart is touched"}, {kr: "볼거리", en: "things to see"}, {kr: "존경하다", en: "to respect"}, {kr: "화려하다", en: "fancy/splendid"}, {kr: "인상적이다", en: "impressive"}, {kr: "우아하다", en: "elegant"}, {kr: "공포 영화", en: "horror movie"}, {kr: "새롭다", en: "new/fresh"}
        ],
        "Lesson 7": [
            {kr: "말도 안 되다", en: "nonsense/ridiculous"}, {kr: "논란이 되다", en: "to become a controversy"}, {kr: "배려를 하다", en: "to be considerate"}, {kr: "방해가 되다", en: "to be a hindrance"}, {kr: "항의", en: "protest/complaint"}, {kr: "금지하다", en: "to prohibit"}, {kr: "당장", en: "right away"}, {kr: "임금님", en: "king"}, {kr: "백성", en: "common people"}
        ],
        "Lesson 8": [
            {kr: "공통점이 있다", en: "to have something in common"}, {kr: "독특하다", en: "unique"}, {kr: "벼룩시장", en: "flea market"}, {kr: "야시장", en: "night market"}, {kr: "다양하다", en: "diverse"}, {kr: "사투리", en: "dialect"}, {kr: "보존하다", en: "to preserve"}, {kr: "자기 주장을 내세우다", en: "to assert one's opinion"}
        ],
        "Lesson 9": [
            {kr: "꿈만 같다", en: "like a dream"}, {kr: "심장이 터질 것 같다", en: "heart feels like bursting"}, {kr: "실감이 안 나다", en: "doesn't feel real"}, {kr: "주목을 받다", en: "to receive attention"}, {kr: "기립 박수", en: "standing ovation"}, {kr: "솔직하다", en: "honest/frank"}, {kr: "주인공", en: "main character"}, {kr: "효도", en: "filial piety"}
        ]
    },
    "4B": {
        "Lesson 11 (Legends)": [
            {kr: "진열하다", en: "to display"}, {kr: "모범생", en: "model student"}, {kr: "철이 없다", en: "immature"}, {kr: "입장", en: "position/stance"}, {kr: "구멍에 빠지다", en: "to fall into a hole"}, {kr: "신화", en: "myth"}, {kr: "다스리다", en: "to rule/govern"}, {kr: "상징하다", en: "to symbolize"}, {kr: "판단하다", en: "to judge"}
        ],
        "Lesson 12 (Language)": [
            {kr: "도대체", en: "what on earth"}, {kr: "소용이 없다", en: "useless"}, {kr: "콩글리시", en: "Konglish"}, {kr: "일리가 있다", en: "makes sense"}, {kr: "사생활", en: "privacy"}, {kr: "노출되다", en: "to be exposed"}, {kr: "이성적이다", en: "rational"}, {kr: "영향을 미치다", en: "to influence"}
        ],
        "Lesson 13 (Environment)": [
            {kr: "정전이 되다", en: "power outage"}, {kr: "낭비", en: "waste"}, {kr: "재활용센터", en: "recycling center"}, {kr: "오염시키다", en: "to pollute"}, {kr: "해롭다", en: "harmful"}, {kr: "시위를 벌이다", en: "to protest"}, {kr: "빙하", en: "glacier"}, {kr: "흡수하다", en: "to absorb"}
        ],
        "Lesson 14 (Culture)": [
            {kr: "반하다", en: "to fall in love with"}, {kr: "풍경", en: "scenery"}, {kr: "생동감이 있다", en: "lively"}, {kr: "항구", en: "port"}, {kr: "일출", en: "sunrise"}, {kr: "일몰", en: "sunset"}, {kr: "휴양여행", en: "vacation trip"}, {kr: "약자", en: "abbreviation"}
        ],
        "Lesson 15 (Society)": [
            {kr: "쾌활하다", en: "cheerful"}, {kr: "만만치 않다", en: "not easy/formidable"}, {kr: "자격증을 따다", en: "to get a certificate"}, {kr: "조화를 이루다", en: "to achieve harmony"}, {kr: "공경하다", en: "to revere/respect elders"}, {kr: "이상적이다", en: "ideal"}, {kr: "합창단", en: "choir"}
        ],
        "Lesson 16 (Animals)": [
            {kr: "애완동물", en: "pet"}, {kr: "짖다", en: "to bark"}, {kr: "용감하다", en: "brave"}, {kr: "충성심", en: "loyalty"}, {kr: "본능", en: "instinct"}, {kr: "위협하다", en: "to threaten"}, {kr: "위기", en: "crisis"}, {kr: "해몽", en: "dream interpretation"}
        ],
        "Lesson 17 (Future)": [
            {kr: "인류", en: "humanity"}, {kr: "목격하다", en: "to witness"}, {kr: "개발하다", en: "to develop"}, {kr: "유전", en: "heredity/genetics"}, {kr: "우성", en: "dominant (genetics)"}, {kr: "보조개", en: "dimple"}, {kr: "주근깨", en: "freckles"}, {kr: "마찰력", en: "friction"}, {kr: "그림자", en: "shadow"}
        ],
        "Lesson 18 (Life Stories)": [
            {kr: "당첨되다", en: "to win a prize/lottery"}, {kr: "맴돌다", en: "to linger/circle"}, {kr: "미소", en: "smile"}, {kr: "헤매다", en: "to wander"}, {kr: "훈련을 받다", en: "to receive training"}, {kr: "이등병", en: "private (military rank)"}
        ],
        "Lesson 19 (Folktales)": [
            {kr: "마음씨가 고약하다", en: "wicked/mean-hearted"}, {kr: "뻔뻔하다", en: "shameless"}, {kr: "오두막집", en: "hut/cabin"}, {kr: "다급하다", en: "urgent"}, {kr: "하루아침에", en: "overnight"}, {kr: "흥분하다", en: "to be excited"}
        ]
    },
    "5A": {
        "Lesson 1": [
            {kr: "갸름하다", en: "oval (face)"}, {kr: "날카롭다", en: "sharp"}, {kr: "단정하다", en: "neat/tidy"}, {kr: "상냥하다", en: "friendly/kind"}, {kr: "낙관적", en: "optimistic"}, {kr: "비관적", en: "pessimistic"}, {kr: "내성적", en: "introverted"}, {kr: "외향적", en: "extroverted"}, {kr: "차분하다", en: "calm"}
        ],
        "Lesson 2": [
            {kr: "기부하다", en: "to donate"}, {kr: "노숙자", en: "homeless person"}, {kr: "실천하다", en: "to put into practice"}, {kr: "안타깝다", en: "regrettable/sad"}, {kr: "천생연분", en: "match made in heaven"}, {kr: "헌신적이다", en: "devoted"}, {kr: "허둥지둥", en: "in a flurry"}
        ],
        "Lesson 3": [
            {kr: "가부장 제도", en: "patriarchal system"}, {kr: "핵가족", en: "nuclear family"}, {kr: "대가족", en: "extended family"}, {kr: "존중하다", en: "to respect"}, {kr: "저출산", en: "low birth rate"}, {kr: "고령화", en: "aging population"}
        ],
        "Lesson 4": [
            {kr: "유망하다", en: "promising"}, {kr: "연봉", en: "annual salary"}, {kr: "자격증", en: "certificate"}, {kr: "면접", en: "interview"}, {kr: "이력서", en: "resume"}, {kr: "채용", en: "recruitment"}
        ],
        "Lesson 5": [
            {kr: "공교육", en: "public education"}, {kr: "사교육", en: "private education"}, {kr: "의무 교육", en: "compulsory education"}, {kr: "입시 지옥", en: "entrance exam hell"}, {kr: "학력", en: "academic background"}
        ],
        "Proverbs": [
            {kr: "누워서 떡 먹기", en: "a piece of cake (eating rice cake lying down)"}, {kr: "그림의 떡", en: "pie in the sky"}, {kr: "시작이 반이다", en: "well begun is half done"}, {kr: "갈수록 태산", en: "out of the frying pan into the fire"}
        ],
        "Idioms (4-character)": [
            {kr: "작심삼일", en: "short-lived resolution"}, {kr: "부전자전", en: "like father, like son"}, {kr: "설상가상", en: "misfortune on top of misfortune"}
        ]
    },
    "5B": {
        "Lesson 8-9 (Media & Economy)": [
            {kr: "대중 매체", en: "mass media"}, {kr: "경기가 회복되다", en: "economy recovers"}, {kr: "불황", en: "economic recession"}, {kr: "호황", en: "economic boom"}, {kr: "흑자가 나다", en: "to record a surplus"}, {kr: "적자가 나다", en: "to record a deficit"}, {kr: "생필품", en: "daily necessities"}, {kr: "실업률", en: "unemployment rate"}
        ],
        "Lesson 10 (Movies)": [
            {kr: "관객", en: "audience"}, {kr: "조조할인", en: "early bird discount"}, {kr: "주연/조연", en: "leading/supporting role"}, {kr: "줄거리", en: "plot/synopsis"}, {kr: "촬영", en: "filming"}, {kr: "편집", en: "editing"}
        ],
        "Lesson 11 (Ads)": [
            {kr: "생산하다", en: "to produce"}, {kr: "소비하다", en: "to consume"}, {kr: "투자하다", en: "to invest"}, {kr: "허위 광고", en: "false advertising"}, {kr: "혜택", en: "benefit/perk"}
        ],
        "Idioms": [
            {kr: "눈에 안 차다", en: "to not be satisfactory"}, {kr: "한눈을 팔다", en: "to take one's eyes off"}, {kr: "손을 놓다", en: "to stop working on something"}, {kr: "배꼽이 빠지다", en: "to laugh one's head off"}, {kr: "눈을 붙이다", en: "to get some sleep"}
        ],
        "Lesson 12-13 (Food & Home)": [
            {kr: "한옥", en: "Hanbok house"}, {kr: "아늑하다", en: "cozy"}, {kr: "습도", en: "humidity"}, {kr: "무치다", en: "to season with vegetables"}, {kr: "데치다", en: "to blanch in hot water"}, {kr: "고소하다", en: "savory/nutty"}, {kr: "느끼하다", en: "greasy"}
        ]
    },
    "6A": {
        "Lesson 8 (History)": [
            {kr: "조리다", en: "to boil down"}, {kr: "채를 썰다", en: "to julienne"}, {kr: "보수적이다", en: "conservative"}, {kr: "파격적이다", en: "unconventional/shocking"}, {kr: "격식을 차리다", en: "to observe formalities"}
        ],
        "Lesson 9 (City)": [
            {kr: "교통 체증", en: "traffic congestion"}, {kr: "공존하다", en: "to coexist"}, {kr: "복원하다", en: "to restore"}, {kr: "친환경적", en: "eco-friendly"}, {kr: "인구 집중", en: "concentration of population"}
        ],
        "Lesson 10 (Worldview)": [
            {kr: "고정 관념", en: "stereotype"}, {kr: "선입견", en: "prejudice"}, {kr: "발상의 전환", en: "paradigm shift"}, {kr: "관상/사주/손금", en: "physiognomy/fortune telling/palmistry"}, {kr: "호불호", en: "likes and dislikes"}
        ],
        "Lesson 11 (Process)": [
            {kr: "건국", en: "founding a nation"}, {kr: "멸망", en: "downfall/ruin"}, {kr: "주도권을 잃다", en: "to lose the initiative"}, {kr: "통일", en: "unification"}, {kr: "천도", en: "moving the capital"}
        ],
        "Idioms": [
            {kr: "코웃음을 치다", en: "to snort/scoff"}, {kr: "혀를 차다", en: "to click one's tongue"}, {kr: "벽에 부딪치다", en: "to hit a wall"}, {kr: "미역국을 먹다", en: "to fail an exam (idiomatic)"}, {kr: "바가지를 긁다", en: "to nag (usually wife to husband)"}
        ]
    },
    "6B": {
        "Lesson 8-9 (Figures)": [
            {kr: "즉위하다", en: "to ascend to the throne"}, {kr: "검소하다", en: "frugal/thrifty"}, {kr: "모범을 보이다", en: "to set an example"}, {kr: "세계 문화유산", en: "World Cultural Heritage"}, {kr: "웅장하다", en: "magnificent/grand"}, {kr: "지혜롭다", en: "wise"}
        ],
        "Lesson 12 (Tech & Ethics)": [
            {kr: "난치병", en: "incurable disease"}, {kr: "복제", en: "cloning"}, {kr: "부작용", en: "side effect"}, {kr: "존엄성", en: "dignity"}, {kr: "인권 침해", en: "violation of human rights"}, {kr: "시행착오", en: "trial and error"}
        ],
        "Lesson 13-14 (Literature)": [
            {kr: "단편/장편 소설", en: "short story / full-length novel"}, {kr: "필자/화자", en: "writer / speaker"}, {kr: "자살하다", en: "to commit suicide"}, {kr: "동정심", en: "sympathy"}, {kr: "이기심", en: "selfishness"}, {kr: "가슴이 찡하다", en: "to be touched"}
        ],
        "Medical & Assessment": [
            {kr: "애매모호하다", en: "vague/ambiguous"}, {kr: "객관적/주관적", en: "objective / subjective"}, {kr: "메스껍다", en: "nauseous"}, {kr: "뻐근하다", en: "stiff/aching (muscles)"}, {kr: "나른하다", en: "lethargic/drowsy"}
        ]
    }
};

// ==========================================
// 2. KOREAN GRAMMARS DATA (Yangi bo'lim)
// ==========================================
const grammars = {
    "Beginner": {
        "Grammar 1 (Basic Particles)": [
            {kr: "은/는", en: "Topic marking particle"},
            {kr: "이/가", en: "Subject marking particle"},
            {kr: "을/를", en: "Object marking particle"},
            {kr: "에", en: "To/At/In (Time or location particle)"},
            {kr: "에서", en: "From/At (Action happening at a place)"}
        ],
        "Grammar 2 (Tenses & Endings)": [
            {kr: "-아/어요", en: "Polite present tense ending"},
            {kr: "-았/었어요", en: "Polite past tense ending"},
            {kr: "-(으)ㄹ 거예요", en: "Polite future tense ending"},
            {kr: "-(으)세요", en: "Please do... (Polite request)"},
            {kr: "-고 싶다", en: "I want to..."}
        ]
    },
    "Intermediate": {
        "Grammar 1 (Reasons & Conditions)": [
            {kr: "-아/어서", en: "Because (Sequence or reason)"},
            {kr: "-기 때문에", en: "Because of/Due to"},
            {kr: "-(으)면", en: "If / When"},
            {kr: "-(으)니까", en: "Since/Because (often with commands)"},
            {kr: "-아/어도", en: "Even if / Although"}
        ],
        "Grammar 2 (Experiences & Ability)": [
            {kr: "-아/어 보다", en: "To try doing something"},
            {kr: "-(으)ㄴ 적이 있다", en: "To have experience doing something"},
            {kr: "-(으)ㄹ 수 있다/없다", en: "Can / Cannot do something"},
            {kr: "-(으)ㄹ 줄 알다/모르다", en: "To know/not know how to do something"},
            {kr: "-기 전에 / -(으)ㄴ 후에", en: "Before / After doing"}
        ]
    },
    "Advanced": {
        "Grammar 1 (Complex Sentences)": [
            {kr: "-(으)ㄹ 지경이다", en: "To be on the verge of / to the point of"},
            {kr: "-기 마련이다", en: "It is bound to / natural to happen"},
            {kr: "-(으)ㄹ 뿐만 아니라", en: "Not only... but also"},
            {kr: "-(으)로 말미암아", en: "Due to / caused by (Formal)"},
            {kr: "-는 한편", en: "While / On the other hand"}
        ]
    }
};


// ==========================================
// 3. BOSHQARUV MANTIQI (Yangilangan)
// ==========================================
let currentCategory = "words"; // 'words' yoki 'grammars'
let currentBook = "1A";
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

// Yangi Asosiy Menyu
function showMainMenu() {
    switchScreen('book-screen');
    const container = document.querySelector('#book-screen .grid-container');
    container.innerHTML = "";

    const btnWords = document.createElement('button');
    btnWords.className = 'main-btn';
    btnWords.innerText = "Vocabulary Words";
    btnWords.onclick = () => {
        currentCategory = "words";
        showBooks();
    };
    container.appendChild(btnWords);

    const btnGrammar = document.createElement('button');
    btnGrammar.className = 'main-btn';
    btnGrammar.innerText = "Korean Grammars";
    btnGrammar.onclick = () => {
        currentCategory = "grammars";
        showGrammarLevels();
    };
    container.appendChild(btnGrammar);
}

// So'zlar Kitoblarini ko'rsatish
function showBooks() {
    const container = document.querySelector('#book-screen .grid-container');
    container.innerHTML = "";
    
    // Orqaga qaytish tugmasi
    const backBtn = document.createElement('button');
    backBtn.className = 'main-btn back-btn';
    backBtn.innerText = "🔙 Back to Menu";
    backBtn.onclick = showMainMenu;
    backBtn.style.gridColumn = "1 / -1"; // Butun qatorni egallashi uchun
    container.appendChild(backBtn);

    Object.keys(books).forEach(bookName => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = `Korean Level ${bookName}`;
        btn.onclick = () => {
            currentBook = bookName;
            showLessons();
        };
        container.appendChild(btn);
    });
}

// Grammatika Darajalarini ko'rsatish
function showGrammarLevels() {
    const container = document.querySelector('#book-screen .grid-container');
    container.innerHTML = "";

    const backBtn = document.createElement('button');
    backBtn.className = 'main-btn back-btn';
    backBtn.innerText = "🔙 Back to Menu";
    backBtn.onclick = showMainMenu;
    backBtn.style.gridColumn = "1 / -1";
    container.appendChild(backBtn);

    Object.keys(grammars).forEach(level => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = `${level} Grammar`;
        btn.onclick = () => {
            currentBook = level;
            showLessons();
        };
        container.appendChild(btn);
    });
}

// Darslarni ko'rsatish (Words va Grammars uchun umumiy ishlaydi)
function showLessons() {
    switchScreen('menu-screen');
    const list = document.getElementById('class-list');
    list.innerHTML = "";

    // Orqaga qaytish
    const backBtn = document.createElement('button');
    backBtn.className = 'main-btn back-btn';
    backBtn.innerText = "🔙 Back";
    backBtn.onclick = showMainMenu;
    list.appendChild(backBtn);

    const currentData = currentCategory === 'words' ? books[currentBook] : grammars[currentBook];

    Object.keys(currentData).forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = lesson;
        btn.onclick = () => {
            currentLessonWords = currentData[lesson];
            document.getElementById('selected-lesson-name').innerText = `${currentBook} - ${lesson}`;
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
    
    // mode kr-en deb qabul qilamiz (chunki uz ni en ga o'zgartirdik)
    let isKrQ = mode === 'mix' ? Math.random() > 0.5 : mode === 'kr-uz'; // HTML class/ID ni o'zgartirmaslik uchun 'kr-uz' qoldirildi, lekin mantiqan en ishlaydi
    const questionText = isKrQ ? word.kr : word.en;
    const correctAns = isKrQ ? word.en : word.kr;
    document.getElementById('word-to-guess').innerText = questionText;
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    let options = [correctAns];
    let allPossibleChoices = currentLessonWords.map(w => isKrQ ? w.en : w.kr);
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
    document.getElementById('final-stat').innerText = `You got ${score} correct out of ${quizQueue.length}!`;
}

// Dasturni ishga tushirish (Asosiy menyu orqali)
showMainMenu();