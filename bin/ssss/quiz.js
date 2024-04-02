const questions = [
  {
    question: 'Which of the following is the correct spelling of "排球"?',
    options: ['ハイキュー', 'ハイキユ', 'ハイキョー'],
    answer: 0 // Index of the correct answer
  },
  {
    question: 'Which of the following option has the meaning of "社團"?',
    options: ['クラブ', 'クラビ', 'クレフ'],
    answer: 0 // Index of the correct answer
  },
  {
    question: 'Which of the following is the correct spelling of "機會"?',
    options: ['チャンズ', 'チャンス', 'チョンス'],
    answer: 1 // Index of the correct answer
  },
  {
    question: 'Which of the following option has the meaning of "左"?',
    options: ['レフド', 'レフ', 'レフト'],
    answer: 2 // Index of the correct answer
  },
  {
    question: 'Which of the following is the correct spelling of "右"?',
    options: ['ライト', 'ライ', 'ライド'],
    answer: 0 // Index of the correct answer
  },
  {
    question: 'Which of the following is the correct spelling of "國王"?',
    options: ['キン', 'キング', 'キンク'],
    answer: 1 // Index of the correct answer
  },
  {
    question: 'Which of the following option has the meaning of "烏鴉"?',
    options: ['カラス', 'カラズ', 'カラ'],
    answer: 0 // Index of the correct answer
  },
  {
    question: 'Which of the following is the correct spelling of "隊伍"?',
    options: ['チム', 'チーム', 'チール'],
    answer: 1 // Index of the correct answer
  },
  {
    question: 'Which of the following option has the meaning of "隊長"?',
    options: ['キプテン', 'キャプテ', 'キャプテン'],
    answer: 2 // Index of the correct answer
  },
  {
    question: 'Which of the following is the correct spelling of "舉球員"?',
    options: ['セッター', 'セター', 'セッタ'],
    answer: 0 // Index of the correct answer
  },
{
  question: 'Which of the following is the correct spelling of "前輩"?',
  options: ['ぜんばい', 'せんぱい', 'せんばい'],
  answer: 1 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "比賽"?',
  options: ['しあい', 'しおい', 'しあ'],
  answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "牆"?',
  options: ['かび', 'かべ', 'かば'],
  answer: 1 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "理由"?',
  options: ['りゅう', 'りゆ', 'りゆう'],
  answer: 2 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "奇跡"?',
  options: ['きせき', 'きぜき', 'きせぎ'],
  answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "眼睛"?',
  options: ['ま', 'み', 'め'],
  answer: 2 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "敵人"?',
  options: ['てき', 'てぎ', 'でぎ'],
  answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "面部"?',
options: ['がお', 'か', 'かり'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "練習"?',
options: ['れんしゅう', 'れんしゅ', 'れんじゅう'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "巨人"?',
options: ['ぎょじん', 'きょじん', 'きょうじん'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "復仇者"?',
options: ['レペンジャーズ', 'レベンジャース', 'レベンジャーズ'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "電視"?',
options: ['テレビ', 'デレベ', 'デレビ'],
answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "漢堡"?',
  options: ['ハンバーガー', 'ハンパーガー', 'ハンバーカー'],
  answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "口袋"?',
options: ['ボケット', 'ポケット', 'ポケト'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "時間"?',
options: ['タイム', 'タイメ', 'ダイム'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "報告"?',
options: ['レボート', 'レポート', 'レポード'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "棒"?',
options: ['パッド', 'パット', 'バット'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "長髮"?',
options: ['ロングヘア', 'ロンクヘア', 'ロングヘ'],
answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "紅"?',
  options: ['レド', 'レット', 'レッド'],
  answer: 2 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "約會"?',
  options: ['デート', 'デト', 'デイト'],
  answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "東京"?',
  options: ['ときょう', 'とうきょう', 'とうきょ'],
  answer: 1 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "女朋友"?',
  options: ['かのじょ', 'がのじょ', 'かのしょ'],
  answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "花"?',
  options: ['ばな', 'はな', 'ひな'],
  answer: 1 // Index of the correct answer
},
{
  question: 'Which of the following option has the meaning of "處男"?',
  options: ['どうて', 'とうてい', 'どうてい'],
  answer: 2 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "眼鏡"?',
  options: ['めがね', 'めかね', 'めか'],
  answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "愛哭鬼"?',
options: ['なぎむし', 'なきむし', 'なっきむし'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "小混混"?',
options: ['ふりょうしょうねん', 'ふりょうしょねん', 'ふりょしょうねん'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "戰爭"?',
options: ['ぜんそう', 'せんそう', 'せんそ'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "暴走族"?',
options: ['ぽうそうぞく', 'ぼうそぞく', 'ぼうそうぞく'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "錢"?',
options: ['おかね', 'かね', 'おがね'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "蛇"?',
options: ['へぴ', 'へぶ', 'へび'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "水"?',
options: ['みず', 'みし', 'みす'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "蝴蝶"?',
options: ['こちう', 'こちょう', 'こちよう'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "任務"?',
options: ['にんむ', 'みむ', 'にむ'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "刃"?',
options: ['やりば', 'やいば', 'やば'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "下巴"?',
options: ['あんお', 'あこ', 'あご'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "鎮痛劑"?',
options: ['ちんつうざい', 'ちんつざい', 'ちんつうさい'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "輕傷"?',
options: ['けいしょう', 'けいしょ', 'けいしよう'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "證明"?',
options: ['しょめい', 'しょうめい', 'しようめい'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "傷痕"?',
options: ['きずあと', 'ぎずあと', 'きずあど'],
answer: 0 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "妹妹"?',
options: ['いもと', 'いもうと', 'いもうど'],
answer: 1 // Index of the correct answer
},
{
question: 'Which of the following option has the meaning of "鬼"?',
options: ['おみ', 'おれ', 'おに'],
answer: 2 // Index of the correct answer
},
{
question: 'Which of the following is the correct spelling of "兄妹"?',
options: ['きょうだい', 'きょだい', 'きょうたい'],
answer: 0 // Index of the correct answer
},
{
  question: 'Which of the following is the correct spelling of "柱"?',
  options: ['れんごぐ', 'れんごく', 'れんこく'],
  answer: 1 // Index of the correct answer
  },
  {
  question: 'Which of the following option has the meaning of "煉獄"?',
  options: ['れんごく', 'れんごぐ', 'れんこく'],
  answer: 0 // Index of the correct answer
  },
  {
  question: 'Which of the following is the correct spelling of "音"?',
  options: ['おて', 'おと', 'おそ'],
  answer: 1 // Index of the correct answer
  },
  {
  question: 'Which of the following option has the meaning of "頭"?',
  options: ['くみ', 'ぐ', 'くび'],
  answer: 2 // Index of the correct answer
  },
  {
  question: 'Which of the following is the correct spelling of "戀愛"?',
  options: ['こいあい', 'ごいあい', 'こあい'],
  answer: 0 // Index of the correct answer
  },
  {
  question: 'Which of the following is the correct spelling of "岩"?',
  options: ['いわ', 'いま', 'いら'],
  answer: 0 // Index of the correct answer
  },
  {
  question: 'Which of the following is the correct spelling of "劍士"?',
  options: ['けし', 'けんし', 'げんし'],
  answer: 1 // Index of the correct answer
  }
]

const selectedQuestions = getRandomQuestions(questions, 20); // Select three random questions

let currentQuestion = 0;

function getRandomQuestions(questions, count) {
  const shuffledQuestions = questions.slice(); // Create a shallow copy of the original array
  const selectedQuestions = [];

  for (let i = shuffledQuestions.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[i]];
  }

  for (let i = 0; i < count; i++) {
    selectedQuestions.push(shuffledQuestions[i]);
  }

  return selectedQuestions;
}


// Function to display the current question and options
function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const currentQuestionObj = selectedQuestions[currentQuestion];

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

  if (selectedIndex === selectedQuestions[currentQuestion].answer) {
    options[selectedIndex].classList.add('correct');
  } else {
    options[selectedIndex].classList.add('incorrect');
    options[selectedQuestions[currentQuestion].answer].classList.add('correct');
  }

  document.getElementById('nextBtn').disabled = false;
}

// Function to move to the next question
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
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