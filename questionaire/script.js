

document.getElementById("qshw").style.display= 'none';


let quiz = [];
let subjects = [] ;
let question =[];
let answer =[];
let counter = 0;
let sub_counter = 0;
let quiz_counter = 0;

function next_question(){
  question[counter] = document.getElementById("question").value;
  answer[counter] = document.getElementById("answer").value;
  counter++;
  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
  document.getElementById("subject").disabled = true;
       
}

function next_subject(){
  subjects[sub_counter] = document.getElementById("subject").value;
  sub_counter++;
  subjects.push(question);
  subjects.push(answer);



}

function insert(){
  quiz.push(subjects);
  question = new Array();
  answer = new Array();
  subjects = new Array();
  counter =0;
  sub_counter=0;
  console.log(quiz);
  document.getElementById("subject").disabled = false;
  document.getElementById("subject").value = "";
  
}

function qshow(){
  document.getElementById("user_insertion").style.display='none';
  document.getElementById("qshw").style.display='block';
  
  
  shwQuest();
  
  
}

var q_counter=0;
function shwQuest(){
  document.getElementById("quiz_question").innerHTML = quiz[0][1][q_counter];
}

function next(){
  if(q_counter<quiz.length){
    q_counter++;
  }
  shwQuest();
}








