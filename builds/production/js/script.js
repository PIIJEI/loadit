(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var pos = 0, quizQs, qNo, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [ "What is 10 + 4", "12", "14", "16", "5", "B" ],
    [ "What is 20 - 9", "7", "13", "11", "4", "C" ],
    [ "What is 7 x 3", "21", "24", "25", "3", "A" ],
    [ "What is 8 / 2", "10", "2", "4", "7", "C" ]
];

function _(x){
  return document.getElementById(x);
}

function renderQuestion(){
  quizQs = _("quizQs");
  if(pos >= questions.length){
    quizQs.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    _("qNo").innerHTML = "Test Completed";
    pos = 0;
    correct = 0;
    return false;
  }
  _("qNo").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  quizQs.innerHTML = "<h3>"+question+"</h3>";
  
  quizQs.innerHTML += "<label><input type='radio' name='choices' value='A'><span>"+chA+"</span></label>";
  quizQs.innerHTML += "<label><input type='radio' name='choices' value='B'><span>"+chB+"</span></label>";
  quizQs.innerHTML += "<label><input type='radio' name='choices' value='C'><span>"+chC+"</span></label>";
  quizQs.innerHTML += "<label><input type='radio' name='choices' value='D'><span>"+chD+"</span></label>";
  quizQs.innerHTML += "<button onClick='checkAnswer()'>Next</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i = 0; i < choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][5]){
    correct++;
  }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
},{}]},{},[1])