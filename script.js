/*Add your JavaScript here*/
//vars
var introvertScore = 0;
var extrovertScore = 0;
var questionCount = 0;
var result = document.getElementById('result');
//q1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
//q2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
//q3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
//q4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
//q5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


//functions
function decideResult(){
  if (introvertScore > extrovertScore) {
  result.innerHTML = "Your result is: Introvert";
  console.log("Result: Introvert.");
  } else if (extrovertScore > introvertScore) {
  result.innerHTML = "Your result is: Extrovert";
  console.log("Result: Extrovert.");
  }
}

function updateIntrovert() {
  introvertScore +=1;
  questionCount +=1;
  console.log("questionCount = " + questionCount + " introvertScore = " + introvertScore);
  if (questionCount == 5) {
  console.log("Quiz is done.")
    decideResult();
  }
}
function updateExtrovert() {
  extrovertScore +=1;
  questionCount +=1;
  console.log("questionCount = " + questionCount + " extrovertScore = " + extrovertScore);
  if (questionCount == 5) {
  console.log("Quiz is done.")
    decideResult();
  }
}
//redo button
function resetFunc() {
questionCount = 0;
introvertScore = 0;
extrovertScore = 0;
result.innerHTML = "Your result is: ...";
enableQ1 ();
enableQ2 ();
enableQ3 ();
enableQ4 ();
enableQ5 ();
normq1a1 ();
normq1a2 ();
normq2a1 ();
normq2a2 ();
normq3a1 ();
normq3a2 ();
normq4a1 ();
normq4a2 ();
normq5a1 ();
normq5a2 ();
console.log("RESET.");
}
  //func
  function normq1a1 (){
  q1a1.style.color = 'black';
  }
  function normq1a2 (){
  q1a2.style.color = 'black';
  }
  function normq2a1 (){
  q2a1.style.color = 'black';
  }
  function normq2a2 (){
  q2a2.style.color = 'black';
  }
  function normq3a1 (){
  q3a1.style.color = 'black';
  }
  function normq3a2 (){
  q3a2.style.color = 'black';
  }
  function normq4a1 (){
  q4a1.style.color = 'black';
  }
  function normq4a2 (){
  q4a2.style.color = 'black';
  }
  function normq5a1 (){
  q5a1.style.color = 'black';
  }
  function normq5a2 (){
  q5a2.style.color = 'black';
  }

//disable
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}
function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}
function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}
function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}
function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
}
//enable
function enableQ1() {
  q1a1.disabled = false;
  q1a2.disabled = false;
}
function enableQ2() {
  q2a1.disabled = false;
  q2a2.disabled = false;
}
function enableQ3() {
  q3a1.disabled = false;
  q3a2.disabled = false;
}
function enableQ4() {
  q4a1.disabled = false;
  q4a2.disabled = false;
}
function enableQ5() {
  q5a1.disabled = false;
  q5a2.disabled = false;
}

//listeners
//q1
q1a1.addEventListener('click', updateIntrovert);
q1a2.addEventListener('click', updateExtrovert);
//q2
q2a1.addEventListener('click', updateIntrovert);
q2a2.addEventListener('click', updateExtrovert);
//q3
q3a1.addEventListener('click', updateIntrovert);
q3a2.addEventListener('click', updateExtrovert);
//q4
q4a1.addEventListener('click', updateIntrovert);
q4a2.addEventListener('click', updateExtrovert);
//q5
q5a1.addEventListener('click', updateIntrovert);
q5a2.addEventListener('click', updateExtrovert);
//disable
q1a1.addEventListener('click', disableQ1);
q1a2.addEventListener('click', disableQ1);
//q2
q2a1.addEventListener('click', disableQ2);
q2a2.addEventListener('click', disableQ2);
//q3
q3a1.addEventListener('click', disableQ3);
q3a2.addEventListener('click', disableQ3);
//q4
q4a1.addEventListener('click', disableQ4);
q4a2.addEventListener('click', disableQ4);
//q5
q5a1.addEventListener('click', disableQ5);
q5a2.addEventListener('click', disableQ5);

//redo('click', redo);
redo1.addEventListener('click', resetFunc);
redo2.addEventListener('click', resetFunc);

//func
function showq1a1 (){
q1a1.style.color = '#A80800';
}
function showq1a2 (){
q1a2.style.color = '#A80800';
}
function showq2a1 (){
q2a1.style.color = '#A80800';
}
function showq2a2 (){
q2a2.style.color = '#A80800';
}
function showq3a1 (){
q3a1.style.color = '#A80800';
}
function showq3a2 (){
q3a2.style.color = '#A80800';
}
function showq4a1 (){
q4a1.style.color = '#A80800';
}
function showq4a2 (){
q4a2.style.color = '#A80800';
}
function showq5a1 (){
q5a1.style.color = '#A80800';
}
function showq5a2 (){
q5a2.style.color = '#A80800';
}
//show chosen + disabled
q1a1.addEventListener('click', showq1a1);
q1a2.addEventListener('click', showq1a2);
q2a1.addEventListener('click', showq2a1);
q2a2.addEventListener('click', showq2a2);
q3a1.addEventListener('click', showq3a1);
q3a2.addEventListener('click', showq3a2);
q4a1.addEventListener('click', showq4a1);
q4a2.addEventListener('click', showq4a2);
q5a1.addEventListener('click', showq5a1);
q5a2.addEventListener('click', showq5a2);