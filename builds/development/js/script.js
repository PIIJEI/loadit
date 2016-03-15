var pos = 0, quizQs, qNo, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [ "What is my name?", "Jack", "Daniel", "Piotr", "Harry", "C" ],
    [ "Who am I?", "A Professional", "A Student", "An Apprentice", "A Wizard", "B" ],
    [ "Where am I from?", "Poland", "Hogwart", "Germany", "United Kingdom", "A" ],
    [ "My favourite movie genre is _.", "Action", "Horror", "Comedy", "Sci-fi", "D" ],
    [ "Do I like video games?", "Of course!", "Not at all.", "It depends", "No!", "A" ],
    [ "My favourite book(s) is/are _.", "Harry Potter", "Lord of the Rings", "Game of Thrones", "Metro 2033", "D" ],
    [ "How old am I?", "Too old", "23", "19", "21", "B" ],
    [ "Where I live", "Chamber of Secrets", "United Kingdom", "Lonely Island", "At home", "B" ],
    [ "What is my hobby?", "Martial Arts", "Hiking", "Paintball", "Learning spells", "A" ],
    [ "What would be my weapon of choice to survive the zombie apocalypse", "Beer", "Shovel", "Magic Wand", "Samurai Sword", "D" ]
]; //CREATING ARRAYS TO GENERATE QUESTIONS IN THE POLL

function _(x){
  return document.getElementById(x);
}

//FUNCTION TO GENERATE THE CHOICES USING INPUTS AND AVOID UNWANTED ISSUES SUCH AS CONTINUANCE OF QUESTIONS WHEN THE POLL HAS ENDED
function renderQuestion(){  
  quizQs = _("quizQs");
  if(pos >= questions.length){
    quizQs.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct<br>Well Done!</h2><button class='finishBtn'><a href='index.html'>Finish</a></button>";
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
  quizQs.innerHTML += "<button class='continueBtn' onClick='checkAnswer()'>Next</button>";
}

//FUNCTION TO CHECK THE CORRECT ANSWERS AND GIVE THE FEEDBACK TO THE PARTICIPANT USER TAKING THE QUESTIONNAIRE
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

//Script for switching containers
var buttonOne = document.getElementById('quizBtn').addEventListener("click", contentBtnOne, false);
var quizContent = document.getElementById('quizContent');

function contentBtnOne(){
  var introContent = document.getElementById('introContent');
    introContent.className = (introContent.className === "active") ? "" : "active";
    introContent.style.display = "none";
    quizContent.style.display = "block";
}