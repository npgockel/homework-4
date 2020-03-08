// Start Button

document.getElementById("start").addEventListener("click", function(){
  // Show Quiz
  var showQuiz = document.getElementsByClassName("run");
  for (i = 0; i < showQuiz.length; i++){
  showQuiz[i].classList.remove("d-none");}
displayQuestion();
// Start Timer
});



// Timer Section
function timer(){
    var game = this.colorQuestGame = this.colorQuestGame || {};
  
    game.timer = {
      interval: undefined,
      countFrom: 60, // second
      count: this.countFrom,
      progressView: document.getElementById('timer'),
      restart: function() {
        if (this.interval) {
          clearInterval(this.interval);
        }
        this.count = this.countFrom;
        this.interval = setInterval((this.tick).bind(this), 1000);
      },
      stop: function() {        
        clearInterval(this.interval);       
      },
      tick: function() {
        this.count -= 1;
        if (this.count<= 0) {
          this.count = 0;
          clearInterval(this.interval);
          game.flow.gameOver();
         }        
        // update the view
        var progress = this.count / this.countFrom * 100;    
        this.progressView.style.width = progress + "%";
      }
    }
  };

// Question Section
var currentQuestion = 0;
var questions = [
  {
    text: "How do you find a doctor?",
    choices: ["Call a hospital.", "Search Online.", "Ask a friend.", "All of the above."],
    answer: "All of the above."
  },
  {
    text: "If you already have Medicare, is it a good idea to have another, or secondary insurance?",
    choices: ["No. Medicare takes care of everything.", "No.  Don't purchase it it until you need it.", "It's not necessary, but recommended.", "Yes.  Avoid out of pocket expenses."],
    answer: "Yes.  Avoid out of pocket expenses."
  },
  {
    text: "Should you choose your own specialist doctors?",
    choices: ["No. The specialist won’t accept you without a referral.", "No. It is best to have your Primary Care Physician make recommendations and a referral.", "Yes. You can save more money by shopping around.", "Yes. You can always tell the best specialist by their type of car."],
    answer: "No. It is best to have your Primary Care Physician make recommendations and a referral."
  },
  {
    text: "Should you call for an appointment with your PCP when you feel crushing chest pain?",
    choices: ["Yes.  Walk into your Doctor’s office to be seen immediately.", "No. Go to urgent care.", "No. Call 911, this is a life-threatening emergency.", "No.  Take Ibuprofen and walk it off.  If it continues after 4 hours, brag to your friends."],
    answer: "No. Call 911, this is a life-threatening emergency."
  },
  {
    text: "If you have a high fever and a bad cough during this Coronavirus season:",
    choices: ["Gargle with bleach and ammonia.", "Go to the Emergency Room.", "Call friends over to take care of you.", "Stay inside and call your Doctor for guidance."],
    answer: "Stay inside and call your Doctor for guidance."
  }
];
function displayQuestion() {
  var text = document.getElementById("text");
  text.textContent = questions[currentQuestion].text;
  var a = document.getElementById("a");
  a.textContent = questions[currentQuestion].choices[0];
  var b = document.getElementById("b");
  b.textContent = questions[currentQuestion].choices[1];
  var c = document.getElementById("c");
  c.textContent = questions[currentQuestion].choices[2];
  var d = document.getElementById("d");
  d.textContent = questions[currentQuestion].choices[3];
  var answer = document.getElementById("answer");
  answer.textContent = questions[currentQuestion].answer;
}


// Incorrect Answer Section


// Game over section
function gameOver() {
var hideQuiz = document.getElementsByClassName("run");
  for (i = 0; i < hideQuiz.length; i++){
  hideQuiz[i].classList.add("d-none");}
var endGame = document.getElementsByClassName("run");
  for (i = 0; i < endGame.length; i++){
  endGame[i].classList.add("d-none");}
  }