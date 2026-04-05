let currentQuestion=0
let score=0
let selectedLanguage=""
let selectedOption=null

const quizData={
    c:[
{
q:"1. C language was developed by?",
options:["Dennis Ritchie","James Gosling","Bjarne Stroustrup","Guido van Rossum"],
answer:0
},
{
q:"2. C is a?",
options:["High level language","Low level language","Both","None"],
answer:2
},
{
q:"3. Which symbol is used for preprocessor?",
options:["$","#","@","&"],
answer:1
},
{
q:"4. Which function starts C program?",
options:["start()","main()","run()","init()"],
answer:1
},
{
q:"5. Which header file is used for printf?",
options:["stdio.h","math.h","string.h","stdlib.h"],
answer:0
},
{
q:"6. C language is?",
options:["Object oriented","Procedural","Functional","None"],
answer:1
},
{
q:"7. Which symbol ends statement?",
options:[":",";","!","."],
answer:1
},
{
q:"8. Which loop executes at least once?",
options:["for","while","do while","none"],
answer:2
},
{
q:"9. Array index starts from?",
options:["0","1","2","-1"],
answer:0
},
{
q:"10. C programs are compiled using?",
options:["Compiler","Interpreter","Assembler","None"],
answer:0
}
],

cpp:[
{
q:"1. C++ was developed by?",
options:["Dennis Ritchie","Bjarne Stroustrup","James Gosling","Guido"],
answer:1
},
{
q:"2. C++ supports?",
options:["OOP","Procedural","Both","None"],
answer:2
},
{
q:"3. Which operator is used for scope resolution?",
options:[".","::","->","?"],
answer:1
},
{
q:"4. Which keyword is used for class?",
options:["struct","object","class","define"],
answer:2
},
{
q:"5. Which concept allows same function name?",
options:["Inheritance","Encapsulation","Polymorphism","Abstraction"],
answer:2
},
{
q:"6. Which function starts C++ program?",
options:["main()","start()","init()","run()"],
answer:0
},
{
q:"7. C++ supports function?",
options:["Overloading","Deleting","Repeating","None"],
answer:0
},
{
q:"8. Which operator allocates memory?",
options:["malloc","alloc","new","create"],
answer:2
},
{
q:"9. Destructor symbol is?",
options:["!","~","#","@"],
answer:1
},
{
q:"10. C++ is extension of?",
options:["Java","C","Python","Assembly"],
answer:1
}
],

python:[
{
q:"1. Python was developed by?",
options:["Dennis","Guido van Rossum","James Gosling","Bjarne"],
answer:1
},
{
q:"2. Python is?",
options:["Compiled","Interpreted","Both","None"],
answer:1
},
{
q:"3. Which symbol is used for comment?",
options:["//","#","--","**"],
answer:1
},
{
q:"4. Which keyword defines function?",
options:["function","def","define","fun"],
answer:1
},
{
q:"5. Python supports?",
options:["OOP","Procedural","Functional","All"],
answer:3
},
{
q:"6. Which data type stores text?",
options:["int","str","float","bool"],
answer:1
},
{
q:"7. List uses?",
options:["()","[]","{}","<>"],
answer:1
},
{
q:"8. Dictionary uses?",
options:["{}","[]","()","<>"],
answer:0
},
{
q:"9. Which keyword is loop?",
options:["repeat","for","iterate","loop"],
answer:1
},
{
q:"10. Python file extension?",
options:[".py",".java",".cpp",".js"],
answer:0
}
],


java:[
{
q:"Which keyword is used for inheritance?",
options:["this","super","extends","import"],
answer:2
},
{
q:"Which method starts Java program?",
options:["run()","main()","start()","init()"],
answer:1
},
{
q:"Java is?",
options:["Platform dependent","Platform independent","Hardware","None"],
answer:1
},
{
q:"Which company developed Java?",
options:["Microsoft","Sun Microsystems","Google","IBM"],
answer:1
},
{
q:"Which keyword creates object?",
options:["class","new","object","create"],
answer:1
},
{
q:"Default value of int?",
options:["0","null","1","undefined"],
answer:0
},
{
q:"Which collection avoids duplicates?",
options:["List","Set","ArrayList","Vector"],
answer:1
},
{
q:"Java supports?",
options:["Multiple inheritance","Single inheritance","No inheritance","Hybrid"],
answer:1
},
{
q:"Java uses?",
options:["Compiler","Interpreter","Both","None"],
answer:2
},
{
q:"Which is OOP concept?",
options:["Encapsulation","Looping","Compilation","Linking"],
answer:0
}
],

js:[
{
q:"JavaScript is mainly used for?",
options:["Backend","Frontend","Database","Compiler"],
answer:1
},
{
q:"Which symbol is used for comment?",
options:["//","#","--","**"],
answer:0
},
{
q:"Which keyword declares variable?",
options:["var","int","string","float"],
answer:0
},
{
q:"JavaScript runs in?",
options:["Browser","Compiler","Database","Server"],
answer:0
},
{
q:"Which function prints message?",
options:["print()","console.log()","echo()","show()"],
answer:1
},
{
q:"JavaScript is?",
options:["Compiled","Interpreted","Assembly","None"],
answer:1
},
{
q:"Which symbol ends statement?",
options:[":",";","!","."],
answer:1
},
{
q:"Which operator compares value and type?",
options:["==","===","=","!="],
answer:1
},
{
q:"JS file extension?",
options:[".js",".java",".py",".cpp"],
answer:0
},
{
q:"JavaScript created by?",
options:["Brendan Eich","Dennis","Guido","James"],
answer:0
}
]

}

function startQuiz(lang){

selectedLanguage=lang

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("quizScreen").classList.remove("hidden")

showQuestion()

}

function showQuestion(){

let q=quizData[selectedLanguage][currentQuestion]

document.getElementById("question").innerText=q.q

let optionsHTML=""

q.options.forEach((opt,i)=>{

optionsHTML+=`<div class="option" onclick="selectOption(this,${i})">${opt}</div>`

})

document.getElementById("options").innerHTML=optionsHTML

updateProgress()

}

function selectOption(element,index){

selectedOption=index

let q=quizData[selectedLanguage][currentQuestion]

document.querySelectorAll(".option").forEach(o=>o.classList.remove("correct","wrong"))

if(index===q.answer){

element.classList.add("correct")
score++

}else{

element.classList.add("wrong")

document.querySelectorAll(".option")[q.answer].classList.add("correct")

}

}

function nextQuestion(){

currentQuestion++

if(currentQuestion<quizData[selectedLanguage].length){

showQuestion()

}else{

showResult()

}

}

function updateProgress(){

let total=quizData[selectedLanguage].length

let percent=(currentQuestion/total)*100

document.getElementById("progressBar").style.width=percent+"%"

}

function showResult(){

document.getElementById("quizScreen").classList.add("hidden")

let total=quizData[selectedLanguage].length
let accuracy=Math.round((score/total)*100)

document.getElementById("resultScreen").classList.remove("hidden")

document.getElementById("resultScreen").innerHTML=

`
<div class="resultCard">

<div class="circle">${accuracy}%</div>

<h2>${accuracy>70?"Excellent":"Not Bad!"}</h2>

<p>${score} correct out of ${total} questions</p>

<br>

<button onclick="location.reload()">Practice Again</button>

</div>
`

}