var currentQuestion = 0;
var questions = [
  {
    text: "How do you find a doctor?",
    choices: ["Call a hospital", "Search Online", "Ask a friend", "All of the above"],
    answer: "All of the above"
  },
  {
    text: "If you already have Medicare, is it a good idea to have another, or secondary insurance?",
    choices: ["No. Medicare takes care of everything", "No.  Don't purchase it it until you need it", "It's not necessary, but recommended", "Yes.  Avoid out of pocket expenses."],
    answer: "Yes.  Avoid out of pocket expenses."
  }
  {
    text: "If you already have Medicare, is it a good idea to have another, or secondary insurance?",
    choices: ["No. Medicare takes care of everything", "No.  Don't purchase it it until you need it", "It's not necessary, but recommended", "Yes.  Avoid out of pocket expenses."],
    answer: "Yes.  Avoid out of pocket expenses."
  }
  {
    text: "If you already have Medicare, is it a good idea to have another, or secondary insurance?",
    choices: ["No. Medicare takes care of everything", "No.  Don't purchase it it until you need it", "It's not necessary, but recommended", "Yes.  Avoid out of pocket expenses."],
    answer: "Yes.  Avoid out of pocket expenses."
  }
  {
    text: "If you already have Medicare, is it a good idea to have another, or secondary insurance?",
    choices: ["No. Medicare takes care of everything", "No.  Don't purchase it it until you need it", "It's not necessary, but recommended", "Yes.  Avoid out of pocket expenses."],
    answer: "Yes.  Avoid out of pocket expenses."
  }
];
function displayQuestion() {
  var show = document.getElementById("quiz");
  show.classList.remove("d-none");
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
}
displayQuestion();
