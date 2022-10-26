const myQuiz = [
    {
        question: "Hur många öl konsumerar en genomsnttlig svensk i veckan?",
        a: "4",
        b: "6.5",
        correctAnswer: "6.5"
    },
    {
        question: "Vad är gin smaksatt med?",
        a: "Enbär",
        b: "Äpple",
        correctAnswer: "Enbär"
    },{
        question: "Vilket land producerar mest öl i världen?",
        a: "Kina",
        b: "Tyskland",
        correctAnswer: "Kina"
    },
    {
        question: "Var ligger vindistriktet Rioja?",
        a: "Frankrike",
        b: "Spanien",
        correctAnswer: "Spanien"
    },
    {
        question: "Vad tillverkas rom av?",
        a: "Socker",
        b: "Majs",
        correctAnswer: "Socker"
    },
    {
        question: "I vilket land dricker man mest öl per invånare?",
        a: "England",
        b: "Tjeckien",
        correctAnswer: "Tjeckien"
    },
    {
        question: "Vilket land producerar mest vin?",
        a: "Kina",
        b: "Frankrike",
        correctAnswer: "Frankrike"
    },
    {
        question: 'Vad står O.P i "O.P Anderson Aquavit" för?',
        a: "Olof Peter",
        b: "Ove Petter",
        correctAnswer: "Olof Peter"
    },
    {
        question: "Hur mycket ren sprit, 100%, dricker genomsnitt en vuxen svensk under ett år?",
        a: "9 liter",
        b: "12 liter",
        correctAnswer: "9 liter"
    },
    {
        question: "Vad heter jag?",
        a: "Carl",
        b: "Hampus",
        correctAnswer: "Hampus",
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
document.body.style.background = "lightcyan";




btnColorMode.addEventListener("click", () => {
    if (document.body.style.background === "lightcyan") {
      document.body.style.background = "#06283D";
      document.body.style.color = "white";
      btnColorMode.innerText = "Light mode";
    } else {
      document.body.style.background = "lightcyan";
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
        nextQuestion.innerText = "Next question"
        
        if (radio1.value === myQuiz[counter].correctAnswer && radio1.checked) {
            counter++
            score++
            showQuestion.innerHTML = myQuiz[counter].question 
        label1.innerText = myQuiz[counter].a
        label2.innerText = myQuiz[counter].b
        radio1.value = myQuiz[counter].a
        radio2.value = myQuiz[counter].b
        console.log(score + " 11")
        if (counter === 10) { 
            hide.style.display = "none"
            nextQuestion.innerText = "Visa svar"
           }
        // nextQuestion.innerText = "Next question"
            
        }

        
        if (radio2.value === myQuiz[counter].correctAnswer && radio2.checked) {
            counter++
            score++
            showQuestion.innerText = myQuiz[counter].question 
            label1.innerText = myQuiz[counter].a
            label2.innerText = myQuiz[counter].b
            radio1.value = myQuiz[counter].a
            radio2.value = myQuiz[counter].b
            if (counter === 10) { 
                hide.style.display = "none"
                nextQuestion.innerText = "Visa svar"
               }
            // nextQuestion.innerText = "Next question"
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
            // nextQuestion.innerText = "Next question"
            console.log("FEL")
            if (counter === 10) { 
                hide.style.display = "none"
                nextQuestion.innerText = "Visa svar"
               }

        }
        
       
        
        
    }
    
    
    
    else  {
        
        

        if (score > 7) {
            showScore.style.color = "green";
            showScore.innerText = `Du blev Mycket väl godkänd och fick ${score} / 10`;
          } else if (score >= 5) {
            showScore.style.color = "yellow";
           
              showScore.innerText = `Du blev godkänd och fick ${score} / 10`;
          } else if (score < 5) {
            showScore.style.color = "red";
            
              showScore.innerText = `Du blev underkänd och fick ${score} / 10`;
          }
    }
    
})

  





  