let currentQuestion = 1; let totalScore = 0; const totalQuestions = 3;
function selectAnswer(questionNum, score) { totalScore += score;
const currentBlock = document.querySelector(.question-block[data-question="${questionNum}"]); currentBlock.classList.remove('active');
currentQuestion++;
if (currentQuestion <= totalQuestions) { const nextBlock = document.querySelector(.question-block[data-question="${currentQuestion}"]); nextBlock.classList.add('active'); } else { showResult(); } }
function showResult() { const resultBlock = document.getElementById('result-block'); const scoreDisplay = document.getElementById('score-display'); const resultText = document.getElementById('result-text');
scoreDisplay.textContent = totalScore;
if (totalScore >= 8) { resultText.innerHTML = "🏆 <b>Yuqori daraja!</b> Siz kasbiy-pedagogik imidj tushunchasini juda yaxshi tushunasiz va zamonaviy o'qituvchilik madaniyatiga to'liq mos kelasiz."; } else if (totalScore >= 5) { resultText.innerHTML = "👍 <b>O'rta daraja.</b> Sizda pedagogik imidj borasida yaxshi tushunchalar bor, lekin muloqot va tashqi ko'rinish va metodika uyg'unligiga ko'proq e'tibor berishingiz tavsiya etiladi."; } else { resultText.innerHTML = "📚 <b>Rivojlanishi kerak bo'lgan daraja.</b> Kasbiy imidjingizni oshirish uchun pedagogik va psixologik tavsiyalarni ko'proq o'rganishingiz foydali bo'ladi."; }
resultBlock.classList.remove('hidden'); }
function restartQuiz() { currentQuestion = 1; totalScore = 0;
document.getElementById('result-block').classList.add('hidden');
const questions = document.querySelectorAll('.question-block'); questions.forEach(q => q.classList.remove('active'));
document.querySelector('.question-block[data-question="1"]').classList.add('active'); }
