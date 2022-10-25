const myQuiz = [
    {
        question: "1+2",
        a: "3",
        b: "1",
        correctAnswer: "3"
    },
    {
        question: "1+2",
        a: "2",
        b: "3",
        correctAnswer: "3"
    },{
        question: "1+5",
        a: "6",
        b: "1",
        correctAnswer: "6"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "2+2",
        a: "4",
        b: "1",
        correctAnswer: "4"
    },
    {
        question: "1+1",
        a: "2",
        b: "1",
        correctAnswer: "2"
    },
    {
        question: "3+6",
        a: "9",
        b: "1",
        correctAnswer: "9",
    },
]

   

let startDiv = document.querySelector("#startDiv");
let startBtn = document.querySelector("#startBtn");
let btnColorMode = document.querySelector("#btnColorMode");
let radio1 = document.querySelector("#radio-1");
let radio2 = document.querySelector("#radio-2");
let label1 = document.querySelector("#label-1");
let label2 = document.querySelector("#label-2");
let showQuestion = document.querySelector("#showQuestion");
let nextQuestion = document.querySelector("#nextQuestion");
let hide = document.querySelector("#hide")
let showScore = document.querySelector("#showScore")
let counter = 0
let score = 0
document.body.style.background = "white";


// hide.style.display = "none"

btnColorMode.addEventListener("click", () => {
    if (document.body.style.background === "white") {
        document.body.style.background = "black";
        document.body.style.color = "white";
        btnColorMode.innerText = "Light mode";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
        btnColorMode.innerText = "Dark mode";
    }
});

showQuestion.innerText = myQuiz[counter].question 
        label1.innerText = myQuiz[counter].a
        label2.innerText = myQuiz[counter].b
        radio1.value = myQuiz[counter].a
        radio2.value = myQuiz[counter].b

nextQuestion.addEventListener("click", () => {
    
    
    if (counter !== 10) {
        
        // showQuestion.innerText = myQuiz[counter].question 
        // label1.innerText = myQuiz[counter].a
        // label2.innerText = myQuiz[counter].b
        // radio1.value = myQuiz[counter].a
        // radio2.value = myQuiz[counter].b
        
        
        if (radio1.value === myQuiz[counter].correctAnswer && radio1.checked) {
            counter++
            score++
            showQuestion.innerHTML = myQuiz[counter].question 
        label1.innerText = myQuiz[counter].a
        label2.innerText = myQuiz[counter].b
        radio1.value = myQuiz[counter].a
        radio2.value = myQuiz[counter].b
            nextQuestion.innerText = "Next question"
            console.log(score + " 11")
            
        }
        else if (radio2.value === myQuiz[counter].correctAnswer && radio2.checked) {
            counter++
            score++
            showQuestion.innerText = myQuiz[counter].question 
        label1.innerText = myQuiz[counter].a
        label2.innerText = myQuiz[counter].b
        radio1.value = myQuiz[counter].a
        radio2.value = myQuiz[counter].b
            nextQuestion.innerText = "Next question"
            console.log(score + " 22")
        }
            
            // label1.innerText = myQuiz[counter].a
            // label2.innerText = myQuiz[counter].b
            // radio1.value = myQuiz[counter].a
            // radio2.value = myQuiz[counter].b

        else if ((radio1.value === myQuiz[counter].correctAnswer === false) && radio1.checked || (radio2.value === myQuiz[counter].correctAnswer === false) && radio2.checked) {
            counter++ 
            showQuestion.innerText = myQuiz[counter].question 
        label1.innerText = myQuiz[counter].a
        label2.innerText = myQuiz[counter].b
        radio1.value = myQuiz[counter].a
        radio2.value = myQuiz[counter].b
            nextQuestion.innerText = "Next question"
            console.log("FEL")

        }
        
        
        
    }
    else  {

        

        if (score > 7) {
            showScore.style.color = "green";
            showScore.innerText = `Du blev Mycket väl godkänd och fick ${score} / 10`;
          } else if (score >= 5) {
            showScore.style.color = "yellow";
           
              shows.innerText = `Du blev godkänd och fick ${score} / 10`;
          } else if (score < 5) {
            showScore.style.color = "red";
            
              showScore.innerText = `Du blev underkänd och fick ${score} / 10`;
          }
    }
    
})

  



// btnColorMode.addEventListener("click", () => {
//     if (document.body.style.background === "lightcyan") {
//       document.body.style.background = "#06283D";
//       document.body.style.color = "white";
//       btnColorMode.innerText = "Light mode";
//     } else {
//       document.body.style.background = "lightcyan";
//       document.body.style.color = "black";
//       btnColorMode.innerText = "Dark mode";
//     }
//   });


  