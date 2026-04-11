// ==========================================
// 1. TO'LIQ LUG'AT (1A va 1B)
// ==========================================
const books = {
    "1A": {
        "1과": [{kr: "오", uz: "besh"}, {kr: "이", uz: "bu/tish"}, {kr: "아우", uz: "bola"}, {kr: "아이", uz: "bola"}, {kr: "오이", uz: "bodring"}, {kr: "가수", uz: "qo'shiqchi"}, {kr: "고기", uz: "go'sht"}, {kr: "구두", uz: "tufli"}, {kr: "나라", uz: "davlat"}, {kr: "나무", uz: "daraxt"}, {kr: "다리", uz: "oyoq"}, {kr: "라디오", uz: "radio"}, {kr: "머리", uz: "bosh"}, {kr: "바나나", uz: "banan"}, {kr: "바지", uz: "shim"}, {kr: "소", uz: "sigir"}, {kr: "아기", uz: "chaqaloq"}, {kr: "어머니", uz: "ona"}, {kr: "지도", uz: "xarita"}, {kr: "모자", uz: "bosh kiyim"}, {kr: "아버지", uz: "ota"}, {kr: "허리", uz: "bel"}, {kr: "지하", uz: "yer osti"}, {kr: "야구", uz: "beyzbol"}, {kr: "야자수", uz: "palma"}, {kr: "이야기", uz: "suhbat"}, {kr: "여자", uz: "ayol"}, {kr: "벼", uz: "guruch"}, {kr: "혀", uz: "til"}, {kr: "요가", uz: "yoga"}, {kr: "요리", uz: "ovqat pishirish"}, {kr: "교수", uz: "professor"}, {kr: "유리", uz: "shisha"}, {kr: "휴지", uz: "tualet qog'ozi"}, {kr: "우유", uz: "sut"}, {kr: "카드", uz: "karta"}, {kr: "코", uz: "burun"}, {kr: "키", uz: "balandlik"}, {kr: "타조", uz: "tuyaqush"}, {kr: "토마토", uz: "pomidor"}, {kr: "투우수", uz: "matador"}, {kr: "파리", uz: "Parij"}, {kr: "포도", uz: "uzum"}, {kr: "우표", uz: "pochta markasi"}, {kr: "차", uz: "choy"}, {kr: "치마", uz: "yubka"}, {kr: "고추", uz: "qalampir"}, {kr: "커피", uz: "kofe"}, {kr: "코트", uz: "palto"}, {kr: "기차표", uz: "poyezd bilet"}, {kr: "까치", uz: "zog'cha"}, {kr: "꼬리", uz: "dum"}, {kr: "코끼리", uz: "fil"}, {kr: "따다", uz: "uzmoq"}, {kr: "뜨다", uz: "suzmoq"}, {kr: "머리띠", uz: "abadok"}, {kr: "뿌리", uz: "tomir,ildiz"}, {kr: "뼈", uz: "suyak"}, {kr: "아빠", uz: "ota"}, {kr: "싸다", uz: "arzon"}, {kr: "쓰다", uz: "yozmoq"}, {kr: "아저씨", uz: "amaki"}, {kr: "짜다", uz: "sho'r"}, {kr: "찌다", uz: "bug'lamoq"}, {kr: "가짜", uz: "qalbaki"}, {kr: "개미", uz: "chumoli"}, {kr: "배", uz: "qayiq"}, {kr: "새", uz: "qush"}, {kr: "해", uz: "quyosh"}, {kr: "게", uz: "qisqichbaqa"}, {kr: "세수", uz: "yuvinish"}, {kr: "그네", uz: "arg'imchoq"}, {kr: "카메라", uz: "kamera"}, {kr: "얘기", uz: "suhbat"}, {kr: "예쁘다", uz: "chiroyli"}, {kr: "시계", uz: "soat"}, {kr: "과자", uz: "pishiriq"}, {kr: "사과", uz: "olma"}, {kr: "뭐", uz: "nima"}, {kr: "돼지", uz: "cho'chqa"}, {kr: "회사", uz: "firma"}, {kr: "귀", uz: "quloq"}, {kr: "의사", uz: "doktor"}, {kr: "의자", uz: "stul"}, {kr: "수박", uz: "tarvuz"}, {kr: "책", uz: "kitob"}, {kr: "돈", uz: "pul"}, {kr: "우산", uz: "soyabon"}, {kr: "옷", uz: "kiyim"}, {kr: "꽃", uz: "gul"}, {kr: "딸기", uz: "qulupnay"}, {kr: "물", uz: "suv"}, {kr: "연필", uz: "qalam"}, {kr: "가방", uz: "sumka"}, {kr: "공", uz: "koptok"}, {kr: "냉장고", uz: "muzlatkich"}],
        "2과": [{kr: "나라", uz: "davlat"}, {kr: "중국", uz: "Xitoy"}, {kr: "일본", uz: "Yaponiya"}, {kr: "미국", uz: "AQSH"}, {kr: "한국", uz: "Koreya"}, {kr: "프랑스", uz: "Fransiya"}, {kr: "독일", uz: "Germaniya"}, {kr: "호주", uz: "Avstraliya"}, {kr: "영국", uz: "Angliya"}, {kr: "선생님", uz: "o'qituvchi"}, {kr: "학생", uz: "o'quvchi"}, {kr: "회사원", uz: "ishchi"}, {kr: "요리사", uz: "oshpaz"}, {kr: "기자", uz: "muxbir"}, {kr: "군인", uz: "askar"}, {kr: "반갑다", uz: "xursand bo'lmoq"}, {kr: "그림", uz: "surat"}, {kr: "저", uz: "men"}, {kr: "씨", uz: "janob/xonim"}, {kr: "네", uz: "ha"}, {kr: "주부", uz: "uy bekasi"}, {kr: "어느", uz: "qaysi"}, {kr: "직업", uz: "kasb"}, {kr: "아니요", uz: "yo'q"}, {kr: "여러분", uz: "sizlar"}, {kr: "무엇", uz: "nima"}, {kr: "친구", uz: "do’st"}, {kr: "이름", uz: "ism"}, {kr: "전화번호", uz: "tel raqam"}],
        "3과": [{kr: "책상", uz: "parta"}, {kr: "의자", uz: "stul"}, {kr: "책", uz: "kitob"}, {kr: "공책", uz: "daftar"}, {kr: "볼펜", uz: "ruchka"}, {kr: "연필", uz: "qalam"}, {kr: "가방", uz: "sumka"}, {kr: "지우개", uz: "o'chirg'ich"}, {kr: "시계", uz: "soat"}, {kr: "모자", uz: "bosh kiyim"}, {kr: "우산", uz: "soyabon"}, {kr: "신문", uz: "gazeta"}, {kr: "사전", uz: "lug'at"}, {kr: "안경", uz: "ko'zoynak"}, {kr: "휴대폰", uz: "telefon"}, {kr: "동전", uz: "tanga"}, {kr: "차", uz: "mashina"}, {kr: "창문", uz: "deraza"}, {kr: "필통", uz: "qalamdon"}, {kr: "지갑", uz: "hamyon"}, {kr: "사과", uz: "olma"}, {kr: "오렌지", uz: "apelsin"}, {kr: "우유", uz: "sut"}, {kr: "바나나", uz: "banan"}, {kr: "침대", uz: "kravat"}],
        "4과": [{kr: "자다", uz: "uxlamoq"}, {kr: "공부하다", uz: "o'qimoq"}, {kr: "일하다", uz: "ishlamoq"}, {kr: "운동하다", uz: "sport"}, {kr: "숙제하다", uz: "vazifa qilmoq"}, {kr: "사다", uz: "sotib olmoq"}, {kr: "보다", uz: "ko'rmoq"}, {kr: "만나다", uz: "uchrashmoq"}, {kr: "배우다", uz: "o'rganmoq"}, {kr: "먹다", uz: "yemoq"}, {kr: "마시다", uz: "ichmoq"}, {kr: "읽다", uz: "o'qimoq"}, {kr: "도서관", uz: "kutubxona"}, {kr: "집", uz: "uy"}, {kr: "시장", uz: "bozor"}, {kr: "공원", uz: "park"}, {kr: "극장", uz: "kinoteatr"}, {kr: "학교", uz: "maktab"}, {kr: "식당", uz: "oshxona"}, {kr: "지금", uz: "hozir"}, {kr: "오늘", uz: "bugun"}, {kr: "어디", uz: "qayer"}],
        "5과": [{kr: "공항", uz: "aeroport"}, {kr: "우체국", uz: "pochta"}, {kr: "은행", uz: "bank"}, {kr: "약국", uz: "apteka"}, {kr: "병원", uz: "kasalxona"}, {kr: "앞", uz: "oldi"}, {kr: "뒤", uz: "orqasi"}, {kr: "옆", uz: "yoni"}, {kr: "안", uz: "ichi"}, {kr: "아래", uz: "tagi"}, {kr: "위", uz: "usti"}, {kr: "교실", uz: "sinf xona"}, {kr: "시내", uz: "shahar markazi"}, {kr: "구경하다", uz: "tomosha qilmoq"}, {kr: "사진", uz: "rasm"}, {kr: "매일", uz: "har kuni"}, {kr: "서점", uz: "kitob do’koni"}, {kr: "화장실", uz: "hojatxona"}],
        "6과": [{kr: "월요일", uz: "dushanba"}, {kr: "화요일", uz: "seshanba"}, {kr: "수요일", uz: "chorshanba"}, {kr: "목요일", uz: "payshanba"}, {kr: "금요일", uz: "juma"}, {kr: "토요일", uz: "shanba"}, {kr: "일요일", uz: "yakshanba"}, {kr: "주말", uz: "hafta oxiri"}, {kr: "날짜", uz: "sana"}, {kr: "시험", uz: "imtixon"}, {kr: "언제", uz: "qachon"}, {kr: "생일", uz: "tug'ilgan kun"}, {kr: "약속", uz: "uchrashuv"}, {kr: "어제", uz: "kecha"}, {kr: "선물", uz: "sovg'a"}, {kr: "산책하다", uz: "sayr qilmoq"}, {kr: "내일", uz: "ertaga"}],
        "7과": [{kr: "샌드위치", uz: "sendvich"}, {kr: "스파게티", uz: "spagetti"}, {kr: "피za", uz: "pitsa"}, {kr: "햄버거", uz: "hamburger"}, {kr: "귤", uz: "mandarin"}, {kr: "딸기", uz: "qulupnay"}, {kr: "사과", uz: "olma"}, {kr: "수박", uz: "tarvuz"}, {kr: "앉다", uz: "o'tirmoq"}, {kr: "주다", uz: "bermoq"}, {kr: "기다리다", uz: "kutmoq"}, {kr: "빵", uz: "non"}, {kr: "맛있다", uz: "mazali"}, {kr: "비싸다", uz: "qimmat"}, {kr: "얼마", uz: "qancha"}],
        "8과": [{kr: "흐리다", uz: "bulutli"}, {kr: "맑다", uz: "ochiq havo"}, {kr: "덥다", uz: "issiq"}, {kr: "춥다", uz: "sovuq"}, {kr: "따뜻하다", uz: "iliq"}, {kr: "시원하다", uz: "salqin"}, {kr: "봄", uz: "bahor"}, {kr: "여름", uz: "yoz"}, {kr: "가을", uz: "kuz"}, {kr: "겨울", uz: "qish"}, {kr: "쉽다", uz: "oson"}, {kr: "어렵다", uz: "qiyin"}, {kr: "맵다", uz: "achchiq"}, {kr: "날씨", uz: "ob havo"}, {kr: "하늘", uz: "osmon"}, {kr: "만들다", uz: "tayyorlamoq"}]
    },
    "1B": {
        "9과": [{kr: "할머니", uz: "buva"}, {kr: "할아버지", uz: "buvi"}, {kr: "어머니", uz: "ona"}, {kr: "아버지", uz: "ota"}, {kr: "누나", uz: "opa(o’g’il)"}, {kr: "형", uz: "aka (o’g’il)"}, {kr: "언니", uz: "opa (qiz)"}, {kr: "오빠", uz: "aka(qiz)"}, {kr: "여동생", uz: "singil"}, {kr: "남동생", uz: "uka"}, {kr: "아내", uz: "xotin"}, {kr: "남편", uz: "er"}, {kr: "딸", uz: "qiz farzand"}, {kr: "아들", uz: "o’g’il farzand"}, {kr: "열", uz: "10"}, {kr: "스물", uz: "20"}, {kr: "서른", uz: "30"}, {kr: "마흔", uz: "40"}, {kr: "쉰", uz: "50"}, {kr: "예순", uz: "60"}, {kr: "일흔", uz: "70"}, {kr: "여든", uz: "80"}, {kr: "아흔", uz: "90"}, {kr: "백", uz: "100"}, {kr: "이름/성항", uz: "ism"}, {kr: "집/댁", uz: "uy"}, {kr: "사람/명/분", uz: "odam"}, {kr: "나이/연세", uz: "yosh"}, {kr: "있다/계시다", uz: "bor bo’lmoq"}, {kr: "먹다/마시다/드시다", uz: "yemoq"}, {kr: "자다/주무시다", uz: "uxlamoq"}, {kr: "상자", uz: "quti"}, {kr: "꺼내다", uz: "sug’urmoq"}, {kr: "운전", uz: "haydamoq"}, {kr: "수학", uz: "matematika"}, {kr: "인사하다", uz: "salomlashmoq"}, {kr: "이쪽", uz: "bu"}, {kr: "한테서", uz: "-dan"}, {kr: "뭘요", uz: "unchalik emas"}, {kr: "동아리", uz: "to’garak"}, {kr: "같은과", uz: "o’xshash daraja"}, {kr: "윗사람", uz: "o’zidan katta odam"}, {kr: "역사", uz: "tarix"}, {kr: "이분", uz: "bu kishi"}, {kr: "우리", uz: "biz/bizning"}, {kr: "반친구", uz: "xonadosh"}, {kr: "다니다", uz: "qatnamoq"}, {kr: "친절하다", uz: "mehribon"}, {kr: "사장님", uz: "direktor"}, {kr: "전에", uz: "oldin"}, {kr: "멋있다", uz: "kelishgan"}, {kr: "부모님", uz: "ota-ona"}, {kr: "미인", uz: "chiroyli ayol"}, {kr: "대학교", uz: "universitet"}, {kr: "신문사", uz: "bosmaxona"}, {kr: "중학교", uz: "o’rta maktab"}, {kr: "공손하다", uz: "kamtar"}, {kr: "강아지", uz: "kuchukcha"}, {kr: "가족사진", uz: "oilaviy rasm"}, {kr: "웃다", uz: "kulmoq"}, {kr: "취미", uz: "hobby"}, {kr: "아기", uz: "chaqaloq"}, {kr: "태어나다", uz: "tug’ilmoq"}, {kr: "다른나라", uz: "boshqa davlat"}, {kr: "되다", uz: "bo’lmoq"}],
        "10과": [{kr: "새벽", uz: "sahar"}, {kr: "아침", uz: "ertalab"}, {kr: "낮", uz: "kunduzi"}, {kr: "저녁", uz: "kechki payt"}, {kr: "밤", uz: "tun"}, {kr: "오전", uz: "obeddan oldin"}, {kr: "오후", uz: "obeddan keyin"}, {kr: "일어나다", uz: "uyg’onmoq"}, {kr: "버스를 기다리다", uz: "avtobus kutmoq"}, {kr: "운천하다", uz: "mashina minmoq"}, {kr: "버스를 타다", uz: "avtobusga minmoq"}, {kr: "세수하다", uz: "yuvinmoq"}, {kr: "청소하다", uz: "uy tozalamoq"}, {kr: "회의하다", uz: "majliz o’tkizmoq"}, {kr: "빨래하다", uz: "kir yuvmoq"}, {kr: "전화하다", uz: "telefon qilmoq"}, {kr: "컴퓨터를 하다", uz: "kompyuterda ishlamoq"}, {kr: "요리하다", uz: "ovqat pishirmoq"}, {kr: "샤워하다", uz: "dush qabul qilmoq"}, {kr: "시", uz: "soat"}, {kr: "분", uz: "minut"}, {kr: "반", uz: "yarim"}, {kr: "쯤", uz: "taxminan"}, {kr: "아침", uz: "nonushta"}, {kr: "저녁", uz: "kechki ovqat"}, {kr: "수업을 하다", uz: "dars qilmoq"}, {kr: "시험을 보다", uz: "imtixon topshirmoq"}, {kr: "그리다", uz: "rasm chizmoq"}, {kr: "이번", uz: "bu safar"}, {kr: "방학", uz: "ta’til"}, {kr: "조금후", uz: "birozdan so’ng"}, {kr: "주말 잘 보내다", uz: "dam olish kunini yaxshi o’tkazmoq"}, {kr: "데이트하다", uz: "uchrashuvga chiqmoq"}, {kr: "강남", uz: "Gangnam"}, {kr: "여의도", uz: "Yoyido"}, {kr: "박물관", uz: "muzey"}, {kr: "연습", uz: "mashq"}, {kr: "인천", uz: "Inchon"}, {kr: "전통", uz: "milliy"}, {kr: "이메일", uz: "e-mail"}, {kr: "출입국관라사무소", uz: "muhojirlar markazi"}, {kr: "그렇지만", uz: "lekin"}],
        "11과": [{kr: "머리", uz: "bosh"}, {kr: "목", uz: "bo’yin"}, {kr: "어깨", uz: "yelka"}, {kr: "팔", uz: "qo’l"}, {kr: "손", uz: "qo’l"}, {kr: "가슴", uz: "ko’krak"}, {kr: "배", uz: "qorin"}, {kr: "허리", uz: "bel"}, {kr: "다리", uz: "oyoq"}, {kr: "무릎", uz: "tizza"}, {kr: "발", uz: "oyoq"}, {kr: "눈", uz: "ko’z"}, {kr: "코", uz: "burun"}, {kr: "입", uz: "og’iz"}, {kr: "귀", uz: "quloq"}, {kr: "얼굴", uz: "yuz,aft,bet"}, {kr: "기침을 하다", uz: "yo’talmoq"}, {kr: "목이 아프다", uz: "tomog’I og’rimoq"}, {kr: "열이 나다", uz: "isitma chiqmoq"}, {kr: "콧물이 나다", uz: "burun oqmoq"}, {kr: "바쁘다", uz: "band bo’lmoq"}, {kr: "배고프다", uz: "qorni ochmoq"}, {kr: "예쁘다", uz: "chiroyli"}, {kr: "편지", uz: "xat"}, {kr: "쓰다", uz: "yozmoq"}, {kr: "나쁘다", uz: "yomon"}, {kr: "담배를 피우다", uz: "sigaret chekmoq"}, {kr: "알겠다", uz: "tushunarli"}, {kr: "늦다", uz: "kechikmoq"}, {kr: "감기에 걸리다", uz: "shamollamoq"}, {kr: "유행이다", uz: "urf bol’moq"}, {kr: "약", uz: "dori"}, {kr: "푹 쉬다", uz: "miriqib dam olmoq"}, {kr: "말(을) 하다", uz: "gapirmoq"}, {kr: "오래", uz: "uzoq vaqt"}, {kr: "목욕하다", uz: "hammom qilmoq"}, {kr: "술", uz: "aroq"}, {kr: "환자", uz: "bemor"}, {kr: "의사", uz: "doktor"}, {kr: "씻다", uz: "yuvmoq"}, {kr: "따뜻한 물", uz: "iliq suv"}, {kr: "얼음물", uz: "muzli suv"}, {kr: "손님", uz: "mehmon"}, {kr: "내년", uz: "kelasi yil"}, {kr: "결혼하다", uz: "turmush qurmoq"}, {kr: "괜찮다", uz: "durust bo’lmoq"}, {kr: "다행이다", uz: "xudoga shukur"}, {kr: "너무", uz: "juda"}, {kr: "무리하다", uz: "toliqmoq"}, {kr: "생신", uz: "tug’ilgan kun"}, {kr: "리포트", uz: "axborot bermoq"}, {kr: "내다", uz: "topshirmoq"}, {kr: "알람", uz: "budilnik"}, {kr: "끄다", uz: "o’chirmoq"}, {kr: "걱정", uz: "havotir"}, {kr: "발음", uz: "talaffuz"}, {kr: "피시방", uz: "komputer xona"}, {kr: "싸우da", uz: "urishmoq"}, {kr: "금연", uz: "chekish taqiqlanadi"}, {kr: "주차금지", uz: "mashina qo’yish taqiqlanadi"}, {kr: "파", uz: "piyoz"}, {kr: "붙이다", uz: "yopishtirmoq"}, {kr: "소금물", uz: "tuzli suv"}, {kr: "헹구다", uz: "og’izni chaymoq"}, {kr: "무즙", uz: "rediska suvi"}, {kr: "마사지하다", uz: "massaj qilmoq"}],
        "12과": [{kr: "전화번호", uz: "telefon raqam"}, {kr: "문자를 받다", uz: "sms olmoq"}, {kr: "문자를 보내다", uz: "sms jo’natmoq"}, {kr: "전하를 받다", uz: "qo’ng’iroq kelmoq"}, {kr: "존화(를)하다", uz: "telefon qilmoq"}, {kr: "그렇습니다", uz: "shunday"}, {kr: "오랜만이에요", uz: "ko’rishmaganimizga ancha bo’ldi"}, {kr: "일", uz: "ish"}, {kr: "사무실", uz: "ofis"}, {kr: "뭘요", uz: "muammo yo’q"}, {kr: "맛없다", uz: "bemaza"}, {kr: "왜", uz: "nimaga"}, {kr: "조금전", uz: "biroz oldin"}, {kr: "늦잠", uz: "uxlab qolmoq"}, {kr: "여행사", uz: "sayohat agentligi"}, {kr: "아까", uz: "biroz oldin"}, {kr: "그럼요", uz: "albatta"}, {kr: "이따", uz: "keyinroq"}, {kr: "다른", uz: "boshqa"}, {kr: "다", uz: "hammasi"}, {kr: "장소", uz: "joy"}, {kr: "몰라서", uz: "bilmaganim uchun"}, {kr: "도둑이 들다", uz: "o’g’ri kirmoq"}, {kr: "사고가 나다", uz: "avariya bo’lmoq"}, {kr: "불이 나다", uz: "olov chiqmoq"}],
        "13과": [{kr: "버스", uz: "avtobus"}, {kr: "기차", uz: "poyezd"}, {kr: "비행기", uz: "samalyot"}, {kr: "배", uz: "kema"}, {kr: "택시", uz: "taksi"}, {kr: "차전거", uz: "velosiped"}, {kr: "지하철", uz: "metro"}, {kr: "오토바이", uz: "mototsikl"}, {kr: "타다", uz: "minmoq"}, {kr: "갈아타다", uz: "almashib chiqmoq"}, {kr: "내리다", uz: "tushmoq"}, {kr: "버스 청류장", uz: "avtobus bekati"}, {kr: "기차역", uz: "poyezd bekati"}, {kr: "고속 터미널", uz: "avtobus terminali"}, {kr: "지하철역", uz: "metro bekati"}, {kr: "닫다", uz: "yopmoq"}, {kr: "돕다", uz: "yordam bermoq"}, {kr: "칠판", uz: "doska"}, {kr: "울다", uz: "yig’lamoq"}, {kr: "쭉", uz: "to’g’riga"}, {kr: "서울역", uz: "seul bekati"}, {kr: "세우다", uz: "to’xtamoq"}, {kr: "신호등", uz: "svetofor"}, {kr: "정문", uz: "darvoza"}, {kr: "호선", uz: "metro liniyasi"}, {kr: "구급차", uz: "tez yordam"}, {kr: "편리하다", uz: "qulay"}, {kr: "사용하다", uz: "foydalanmoq"}],
        "14과": [{kr: "요금", uz: "to’lov"}, {kr: "깎다", uz: "arzon qilmoq"}, {kr: "셔츠", uz: "ko’ylak"}, {kr: "모자", uz: "bosh kiyim"}, {kr: "바지", uz: "shim"}, {kr: "치마", uz: "yubka"}, {kr: "코트", uz: "palto"}, {kr: "원피스", uz: "ko’ylak"}, {kr: "구두", uz: "tufli"}, {kr: "운동화", uz: "krasovka"}, {kr: "양복", uz: "kostyum"}, {kr: "입다", uz: "kiymoq"}, {kr: "신다", uz: "kiymoq(oyoq)"}, {kr: "쓰다", uz: "kiymoq(bosh)"}, {kr: "크다", uz: "katta"}, {kr: "작다", uz: "kichkina"}, {kr: "길다", uz: "uzun"}, {kr: "짧다", uz: "kalta"}, {kr: "높다", uz: "baland"}, {kr: "낮다", uz: "past"}, {kr: "비싸다", uz: "qimmat"}, {kr: "싸다", uz: "arzon"}, {kr: "두껍다", uz: "qalin"}, {kr: "얇다", uz: "yupqa"}, {kr: "살다", uz: "yashamoq"}, {kr: "놀다", uz: "o’ynamoq"}, {kr: "팔다", uz: "sotmoq"}, {kr: "열다", uz: "ochmoq"}, {kr: "유행이다", uz: "mashxur"}, {kr: "무섭다", uz: "qo’rqinchli"}, {kr: "슬프다", uz: "g’amgin"}, {kr: "키", uz: "bo’y"}, {kr: "청바지", uz: "ko’k shim"}, {kr: "마음", uz: "qalb"}, {kr: "선물하다", uz: "sovg’a qilmoq"}, {kr: "한복", uz: "milliy libos"}, {kr: "단순하다", uz: "oddiy"}, {kr: "목도리", uz: "sharf"}, {kr: "귀걸이", uz: "zirak"}, {kr: "기쁘다", uz: "hursand bo’lmoq"}],
        "15과": [{kr: "돈을 바꾸다", uz: "pul almashtirmoq"}, {kr: "비행기표 예매", uz: "bilet zakaz"}, {kr: "여권", uz: "passport"}, {kr: "호텔 예약", uz: "bron qilish"}, {kr: "도착하다", uz: "yetib bormoq"}, {kr: "돌아오다", uz: "qaytib kelmoq"}, {kr: "여행하다", uz: "sayohat qilmoq"}, {kr: "출발하다", uz: "jo’nab ketmoq"}, {kr: "경치", uz: "tabiat"}, {kr: "조용하다", uz: "tinch"}, {kr: "반지", uz: "uzuk"}, {kr: "프러포즈", uz: "taklif"}, {kr: "떠나다", uz: "tashlab ketmoq"}, {kr: "즐겁다", uz: "zavqli"}, {kr: "휴가", uz: "ta’til"}, {kr: "신혼여행", uz: "asal oyi"}, {kr: "올라가다", uz: "ko’tarilmoq"}, {kr: "보이다", uz: "ko’rinmoq"}, {kr: "질문", uz: "savol"}, {kr: "계획하다", uz: "reja qilmoq"}, {kr: "식사하다", uz: "ovqatlanmoq"}, {kr: "준비하다", uz: "tayyorlanmoq"}, {kr: "초대하다", uz: "taklif qilmoq"}, {kr: "축하하다", uz: "tabriklamoq"}, {kr: "빨리", uz: "tez"}, {kr: "열심히", uz: "yurakdan"}, {kr: "일찍", uz: "vaqtli"}, {kr: "천천히", uz: "sekin"}, {kr: "이사하다", uz: "ko’chmoq"}, {kr: "돈을 찾다", uz: "pul olmoq"}, {kr: "춤을 추다", uz: "raqs tushmoq"}, {kr: "답장", uz: "javob"}]
    },
    "2A": {
        "1과": [
            {kr: "학생 카드", uz: "o’quvchilik guvohnomasi"}, {kr: "성명", uz: "ism familya"}, {kr: "생년월일", uz: "tug’ilgan oy kuni"}, {kr: "연락처/전화번호", uz: "aloqa nomeri"}, {kr: "주소", uz: "addres"}, {kr: "성별", uz: "jins"}, {kr: "남", uz: "erkak"}, {kr: "여", uz: "ayol"}, {kr: "직업", uz: "kasb"}, {kr: "종교", uz: "din"}, {kr: "매일", uz: "har kuni"}, {kr: "매주", uz: "har hafta"}, {kr: "매년", uz: "har yili"}, {kr: "항상", uz: "har doim"}, {kr: "자주", uz: "tez-tez"}, {kr: "가끔", uz: "ba’zan"}, {kr: "부르다", uz: "chaqirmoq"}, {kr: "뵙다", uz: "ko’rishmoq"}, {kr: "그냥", uz: "shunchaki"}, {kr: "들어가다", uz: "kirib bormoq"}, {kr: "이유", uz: "sabab"}, {kr: "국적", uz: "millat"}, {kr: "나이/연세", uz: "yosh"}, {kr: "이름/성함", uz: "ism"}, {kr: "질문", uz: "savol"}, {kr: "평일", uz: "ish kunlari"}, {kr: "사 오다", uz: "sotib olib kelmoq"}, {kr: "초대를 받다", uz: "taklifni olmoq"}, {kr: "코미디 영화", uz: "komediya kino"}, {kr: "액션 영화", uz: "real kino"}, {kr: "소설책", uz: "roman kitob"}, {kr: "시간이 나다", uz: "vaqti bo’lmoq"}, {kr: "스페어너", uz: "ispan tili"}, {kr: "언어", uz: "til"}, {kr: "문화", uz: "madaniyat"}, {kr: "관심", uz: "qiziqish"}, {kr: "중남미", uz: "Lotin Amerikasi"}, {kr: "정도", uz: "darajada"}, {kr: "유명하다", uz: "mashhur bo’lmoq"}, {kr: "에 대해서", uz: "haqida"}, {kr: "발표하다", uz: "isbotlamoq, doklad qilmoq"}, {kr: "글자", uz: "xarf"}, {kr: "제일/가장", uz: "eng"}, {kr: "친하다", uz: "yaqin bo’lmoq"}, {kr: "성", uz: "familya"}, {kr: "빼다", uz: "sug’urmoq"}, {kr: "형제들", uz: "aka-ukalar"}, {kr: "비슷하다", uz: "o’xshash"}, {kr: "과제", uz: "mavzu"}, {kr: "문화 산책", uz: "madaniyatga sayohat"}, {kr: "발음", uz: "tovush"}, {kr: "규칙", uz: "qoida"}, {kr: "연습", uz: "mashq"}, {kr: "준비", uz: "tayyorlash"}
        ],
        "2과": [
            {kr: "취미", uz: "qiziqish"}, {kr: "사진을 찍다", uz: "rasmga olmoq"}, {kr: "음악을 듣다", uz: "musiqa eshitmoq"}, {kr: "춤(을) 추다", uz: "raqsga tushmoq"}, {kr: "그림을 그리다", uz: "rasm chizmoq"}, {kr: "인형을 모으다", uz: "qo’g’irchoq yeg’moq"}, {kr: "인터넷을 하다", uz: "internetga kirmoq"}, {kr: "영화 감상", uz: "kinodan zavqlanish"}, {kr: "음악 감상", uz: "musiqadan zavqlanish"}, {kr: "등산", uz: "toqqa chiqish"}, {kr: "독서", uz: "kitob o’q’ish"}, {kr: "여행", uz: "sayohat"}, {kr: "요리", uz: "ovqat"}, {kr: "낚시", uz: "baliq ovi"}, {kr: "운동", uz: "sport"}, {kr: "컴퓨터 게임", uz: "kompyutor o’yini"}, {kr: "아주", uz: "juda"}, {kr: "별로", uz: "unchalik"}, {kr: "전혀", uz: "umuman"}, {kr: "야구(를) 하다", uz: "bezbol o’ynamoq"}, {kr: "외국어", uz: "chet tili"}, {kr: "라틴 댄스", uz: "lotin raqsi"}, {kr: "동호회", uz: "klub, to’garak"}, {kr: "가입하다", uz: "a’zo bo’lmoq"}, {kr: "모으다", uz: "yig’moq"}, {kr: "모이다", uz: "yig’ilmoq"}, {kr: "연습실", uz: "mashq xonasi"}, {kr: "회비", uz: "a’zolik puli"}, {kr: "블로그", uz: "blog"}, {kr: "참", uz: "juda, rostan"}, {kr: "문화 센터", uz: "madaniyat markazi"}, {kr: "올리다", uz: "rasm qo’ymoq"}, {kr: "여러 가지", uz: "har xil"}
        ],
        "3과": [
            {kr: "콘서트", uz: "konsert"}, {kr: "음악회", uz: "musiqiy festival"}, {kr: "연극", uz: "teatr"}, {kr: "뮤지컬", uz: "musiqiy festival"}, {kr: "전시회", uz: "ko’rkazma"}, {kr: "축제", uz: "festival"}, {kr: "불꽃놀이", uz: "mushakbozlik"}, {kr: "사물놀이", uz: "milliy o’yin va raqslar"}, {kr: "배낭여행", uz: "rukzak osib sayohat qilish"}, {kr: "아르바이트", uz: "kunlik ish"}, {kr: "번지 점프", uz: "balanlikdan sakrash"}, {kr: "스쿠버 다이빙", uz: "g’avvoslik"}, {kr: "박물관", uz: "muzey"}, {kr: "미술관", uz: "san’at muzeyi"}, {kr: "공연장", uz: "san’at saroyi"}, {kr: "놀이공원", uz: "park"}, {kr: "시간", uz: "vaqt"}, {kr: "달", uz: "oy"}, {kr: "노래방", uz: "karoeke"}, {kr: "삼계탕", uz: "ovqat nomi"}, {kr: "찜질방", uz: "sauna"}, {kr: "한복", uz: "milliy kiyim"}, {kr: "하루", uz: "kun bo’yi"}, {kr: "갔다 오다", uz: "borib kelmoq"}, {kr: "생선회", uz: "baliqli ovqat"}, {kr: "요가", uz: "yo’ga mashqi"}, {kr: "사막", uz: "cho’l, sahro"}, {kr: "온천", uz: "issiq buloq"}, {kr: "빌려 주다", uz: "qarzga olmoq"}, {kr: "국제", uz: "xalqaro"}, {kr: "영화제", uz: "kino festivali"}, {kr: "재즈", uz: "jazz"}, {kr: "존경하다", uz: "qadrlamoq"}, {kr: "왕", uz: "qirol"}, {kr: "한라산", uz: "halla tog’i"}, {kr: "닭", uz: "tovuq"}, {kr: "자리", uz: "bo’sh joy"}, {kr: "꼭", uz: "albatta"}, {kr: "출장", uz: "komandirovka"}, {kr: "중요하다", uz: "muhim"}, {kr: "덕수궁", uz: "seuldagi joy"}, {kr: "글쎄요", uz: "bilmadim"}, {kr: "특히", uz: "ayniqsa"}, {kr: "기억이 남da", uz: "xotirada qolmoq"}, {kr: "여러 나라", uz: "turli xil davlat"}, {kr: "벚꽃", uz: "olcha guli"}, {kr: "감독", uz: "director"}, {kr: "배우", uz: "aktyor"}, {kr: "낙타", uz: "tuya"}, {kr: "유럽", uz: "yevropa"}, {kr: "말하기 대회", uz: "gapirish musobaqasi"}, {kr: "상을 받다", uz: "mukofat olmoq"}, {kr: "경험", uz: "tajriba"}, {kr: "이틀", uz: "2 kun"}, {kr: "사흘", uz: "3 kun"}, {kr: "나흘", uz: "4 kun"}, {kr: "열흘", uz: "10 kun"}
        ],
        "4과": [
            {kr: "블라우스", uz: "kofta"}, {kr: "스웨터", uz: "svitr"}, {kr: "양복", uz: "kastyum"}, {kr: "티셔츠", uz: "fudbolka"}, {kr: "청바지", uz: "jinsiy shim"}, {kr: "넥타이", uz: "galstuk"}, {kr: "장갑", uz: "qo’lqop"}, {kr: "스카프", uz: "ayollar sharfi"}, {kr: "입다", uz: "kiyim kiymoq"}, {kr: "쓰다", uz: "bosh kiyim kiymoq"}, {kr: "끼다", uz: "qo’lqop kiymoq"}, {kr: "하다", uz: "sharf o’ramoq"}, {kr: "신다", uz: "oyoq kiyim kiymoq"}, {kr: "마음에 들다", uz: "qalbiga yoqmoq"}, {kr: "잘 어울리다", uz: "yaxshi yarashmoq"}, {kr: "좀 크다", uz: "biroz katta"}, {kr: "잘 맞다", uz: "mos"}, {kr: "비싸다", uz: "qimmat"}, {kr: "싸다", uz: "arzon"}, {kr: "밝다", uz: "yorug’, ochiq"}, {kr: "어둡다", uz: "qorong’u, to’q"}, {kr: "길다", uz: "uzun"}, {kr: "짧다", uz: "kalta"}, {kr: "옷값", uz: "kiyim narxi"}, {kr: "맛", uz: "tam"}, {kr: "디자인", uz: "dizayn"}, {kr: "유행하다", uz: "urf bo’lmoq"}, {kr: "훨씬", uz: "yanada"}, {kr: "산", uz: "tog’"}, {kr: "바da", uz: "dengiz"}, {kr: "건강하다", uz: "sog’lom bo’lmoq"}, {kr: "굽이 높다", uz: "poshnasi baland"}, {kr: "교환하다", uz: "mahsulot almashtirmoq"}, {kr: "환불하다", uz: "pulini qaytarib olmoq"}, {kr: "필요하다", uz: "kerak"}, {kr: "절약하다", uz: "tejamoq"}, {kr: "주문하다", uz: "buyurtma qilmoq"}, {kr: "면접", uz: "ishga kirish uchun suhbat"}, {kr: "싱싱하다", uz: "jonli"}, {kr: "고추장", uz: "qalampir"}, {kr: "사이즈", uz: "razmer"}, {kr: "색깔", uz: "rang"}
        ],
        "5과": [
            {kr: "기간", uz: "muddat"}, {kr: "교통편", uz: "transport"}, {kr: "숙소", uz: "qolish uchun joy"}, {kr: "요금", uz: "to’lov"}, {kr: "일정", uz: "dastur, reja"}, {kr: "박", uz: "kecha"}, {kr: "항공료", uz: "samalyot to’lovi"}, {kr: "식비", uz: "ovqat to’lovi"}, {kr: "입장료", uz: "kirish to’lovi"}, {kr: "항공권 예약", uz: "avia beletga zakaz"}, {kr: "왕복", uz: "borib kelish"}, {kr: "편도", uz: "bir tomonlama"}, {kr: "출발지", uz: "jo’nash joyi"}, {kr: "도착지", uz: "yetib kelish joyi"}, {kr: "출국 날짜", uz: "chiqib ketish sanasi"}, {kr: "귀국 날짜", uz: "qaytib kelish sanasi"}, {kr: "달력", uz: "kalendar"}, {kr: "성인", uz: "yoshi katta"}, {kr: "소아", uz: "yosh bola"}, {kr: "유아", uz: "chaqaloq"}, {kr: "좌석", uz: "o’rindiq"}, {kr: "비즈니스석", uz: "biznes klas"}, {kr: "아마", uz: "ehtimol"}, {kr: "담배를 끊다", uz: "sigaretni tashlamoq"}, {kr: "전통문화", uz: "milliy madaniyat"}, {kr: "느끼다", uz: "xis qilmoq"}, {kr: "패키지여행", uz: "gruppavoy sayohat"}, {kr: "공연", uz: "tomosha"}, {kr: "바라다", uz: "tilamoq, istamoq"}, {kr: "방법", uz: "usul"}, {kr: "마치다", uz: "tugatmoq"}, {kr: "포함되어 있다", uz: "o’z ichiga olmoq"}, {kr: "추천하다", uz: "tavsiya qilmoq"}, {kr: "빈방", uz: "bo’sh xona"}, {kr: "가이드", uz: "tanishtiruvchi"}, {kr: "건축물", uz: "arxitiektura"}, {kr: "자연", uz: "tabiat"}, {kr: "다양하다", uz: "xar xil"}, {kr: "이용하다", uz: "foydalanmoq"}, {kr: "한옥", uz: "milliy qishloq"}, {kr: "분위기", uz: "muhit"}, {kr: "대통령", uz: "prezident"}, {kr: "등록금", uz: "ro’yxatga olish puli"}
        ],
        "6과": [
            {kr: "우표를 붙이다", uz: "markani yopishtirmoq"}, {kr: "주소를 쓰다", uz: "adressni yozmoq"}, {kr: "편지를 부치다", uz: "xat jo’natmoq"}, {kr: "소포를 포장하다", uz: "posilkani o’ramoq"}, {kr: "돈을 찾다", uz: "pul olmoq"}, {kr: "돈을 바꾸다", uz: "pul almashtirmoq"}, {kr: "신분증", uz: "guvohnoma"}, {kr: "통장", uz: "bank kitobchasi"}, {kr: "도장", uz: "pechat"}, {kr: "현금 카드", uz: "naxd pul kartasi"}, {kr: "길이 막히다", uz: "yo’l tirband"}, {kr: "저울", uz: "tarozi"}, {kr: "상자", uz: "quti"}, {kr: "오르다", uz: "ko’tarilmoq"}, {kr: "빠르다", uz: "tez"}, {kr: "모르다", uz: "bilmaslik"}, {kr: "다르다", uz: "boshqacha"}, {kr: "서두르다", uz: "shoshilinch"}, {kr: "외국인등록증", uz: "chet ellik guvohnomasi"}, {kr: "벌써", uz: "allaqachon"}, {kr: "차비", uz: "yo’lkira"}, {kr: "잃어버리다", uz: "yo’qotmoq"}, {kr: "환율", uz: "pul almashtirish kursi"}, {kr: "택배", uz: "yetkazuvchi firma"}, {kr: "경비실", uz: "nazoratxona"}, {kr: "방문하다", uz: "tashrif buyurmoq"}, {kr: "신청하다", uz: "ariza qilmoq"}, {kr: "우편", uz: "pochta xizmati"}, {kr: "바로", uz: "to’g’ridan-to’g’ri"}, {kr: "의미", uz: "ma’no"}, {kr: "제비", uz: "qaldirg’och"}, {kr: "소식", uz: "xabar"}
        ],
        "7과": [
            {kr: "사거리", uz: "to’rt ko’cha"}, {kr: "신호등", uz: "svetafor"}, {kr: "지하철 정류장", uz: "metro bekati"}, {kr: "지하도", uz: "yer osti yo’li"}, {kr: "육교", uz: "ko’prik"}, {kr: "회단보도", uz: "piyodalar o’tish joyi"}, {kr: "쭉 가다", uz: "to’griga bormoq"}, {kr: "왼쪽으로 돌아가다", uz: "chapga qaytib bormoq"}, {kr: "건너다", uz: "kesib o’tmoq"}, {kr: "세우다", uz: "mashina to’xtatmoq"}, {kr: "직진하다", uz: "to’g’riga yurmoq"}, {kr: "좌회전하다", uz: "chapga burilmoq"}, {kr: "우회전하다", uz: "o’ngga burilmoq"}, {kr: "근처", uz: "yaqinida"}, {kr: "출구", uz: "chiqish"}, {kr: "친구를 사귀다", uz: "do’stlashmoq"}, {kr: "한참", uz: "uzoq vaqt"}, {kr: "경찰서", uz: "polittsiya xona"}, {kr: "잊다", uz: "unutmoq"}, {kr: "지나다", uz: "dan o’tmoq"}, {kr: "걸어오da", uz: "piyoda kelmoq"}, {kr: "약도", uz: "yo’nalish xaritasi"}, {kr: "광장", uz: "maydon"}, {kr: "동상", uz: "haykal"}, {kr: "장군", uz: "general"}, {kr: "기념하다", uz: "xotiralamoq"}
        ],
        "8과": [
            {kr: "기분이 좋다", uz: "kayfiyati yaxshi"}, {kr: "기쁘다", uz: "xursand"}, {kr: "슬프da", uz: "g’amgin"}, {kr: "외롭다", uz: "yolg’iz"}, {kr: "창피하다", uz: "uyalmoq"}, {kr: "속상하다", uz: "hafa bo’lmoq"}, {kr: "답답하다", uz: "siqilmoq"}, {kr: "긴장되다", uz: "hayojonlamoq"}, {kr: "걱정되다", uz: "xavotirlanmoq"}, {kr: "화가 나다", uz: "chahli chiqmoq"}, {kr: "짜증이 나다", uz: "asabiylashmoq"}, {kr: "무섭다", uz: "qo’rqinchli"}, {kr: "재미있다", uz: "qiziqarli"}, {kr: "퇴원하다", uz: "shifoxonadan chiqmoq"}, {kr: "고장이 나다", uz: "buzilmoq"}, {kr: "큰 소리로", uz: "baland ovozda"}, {kr: "잘못", uz: "noto’g’ri"}, {kr: "운이 없다", uz: "omadsiz"}, {kr: "잠이 들다", uz: "uxlab qolmoq"}, {kr: "놓치다", uz: "o’tkazib yubormoq"}, {kr: "넘어지다", uz: "yiqilib tushmoq"}, {kr: "졸다", uz: "mudramoq"}, {kr: "종점", uz: "so’ngi to’xtash joyi"}, {kr: "외우다", uz: "yodlamoq"}, {kr: "스트레스를 풀다", uz: "stressni yechmoq"}, {kr: "대답하다", uz: "javob bermoq"}, {kr: "당황하다", uz: "hayron qolmoq"}, {kr: "설명하다", uz: "tushuntirmoq"}
        ],
        "9과": [
            {kr: "전화를 걸다", uz: "tel qilmoq"}, {kr: "전화를 바꾸다", uz: "ulab bermoq"}, {kr: "통화를 하다", uz: "aloqalashmoq"}, {kr: "문자를 지우da", uz: "smsni o’chirmoq"}, {kr: "대상", uz: "qatnashuvchilar"}, {kr: "참가비", uz: "qatnashish to’lovi"}, {kr: "문의", uz: "ma’lumot so’rash"}, {kr: "부탁하다", uz: "iltimos qilmoq"}, {kr: "국악", uz: "milliy musiqa"}, {kr: "무료", uz: "tekin"}, {kr: "체험", uz: "tajriba"}, {kr: "참가하다", uz: "qatnashmoq"}, {kr: "궁금하다", uz: "tashvishlanmoq"}, {kr: "통역하다", uz: "og’zaki tarjima qilish"}, {kr: "치료를 받다", uz: "davolanmoq"}, {kr: "정보를 얻다", uz: "ma’lumot olmoq"}
        ]
    }
};

// ==========================================
// 2. BOSHQARUV MANTIQI
// ==========================================
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

function showBooks() {
    switchScreen('book-screen');
    const container = document.querySelector('#book-screen .grid-container');
    container.innerHTML = "";
    Object.keys(books).forEach(bookName => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = `서울대 한국어 ${bookName}`;
        btn.onclick = () => {
            currentBook = bookName;
            showLessons();
        };
        container.appendChild(btn);
    });
}

function showLessons() {
    switchScreen('menu-screen');
    const list = document.getElementById('class-list');
    list.innerHTML = "";
    const currentBookData = books[currentBook];

    Object.keys(currentBookData).forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = 'main-btn';
        btn.innerText = lesson;
        btn.onclick = () => {
            currentLessonWords = currentBookData[lesson];
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
    let isKrQ = mode === 'mix' ? Math.random() > 0.5 : mode === 'kr-uz';
    const questionText = isKrQ ? word.kr : word.uz;
    const correctAns = isKrQ ? word.uz : word.kr;
    document.getElementById('word-to-guess').innerText = questionText;
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
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

// Dasturni ishga tushirish
showBooks();