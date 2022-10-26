const myQuiz = [
  {
    question: "Hur många öl konsumerar en genomsnttlig svensk i veckan?",
    a: "10",
    b: "6.5",
    correctAnswer: "6.5",
  },
  {
    question: "Vad är gin smaksatt med?",
    a: "Enbär",
    b: "Äpple",
    correctAnswer: "Enbär",
  },
  {
    question: "Vilket land producerar mest öl i världen?",
    a: "Kina",
    b: "Tyskland",
    correctAnswer: "Kina",
  },
  {
    question: "Var ligger vindistriktet Rioja?",
    a: "Portugal",
    b: "Spanien",
    correctAnswer: "Spanien",
  },
  {
    question: "Vad tillverkas rom av?",
    a: "Socker",
    b: "Majs",
    correctAnswer: "Socker",
  },
  {
    question: "I vilket land dricker man mest öl per invånare?",
    a: "England",
    b: "Tjeckien",
    correctAnswer: "Tjeckien",
  },
  {
    question: "Vilket land producerar mest vin?",
    a: "Kina",
    b: "Frankrike",
    correctAnswer: "Frankrike",
  },
  {
    question: "Raki är en dryck, vad smaksätts den med?",
    a: "Anis",
    b: "Fänkolsfrön",
    correctAnswer: "Anis",
  },
  {
    question:
      "Hur mycket ren sprit, 100%, dricker genomsnitt en vuxen svensk under ett år?",
    a: "18 liter",
    b: "9 liter",
    correctAnswer: "9 liter",
  },
  {
    question: "Grappa, en italiensk spritdtyck, vad tillverkas den av?",
    a: "Vin som man tillsätter socker i och låter jäsa",
    b: "Rester från vinproduktion",
    correctAnswer: "Rester från vinproduktion",
  },
  {
    question: "Grappa, en italiensk spritdtyck, vad tillverkas den av?",
    a: "Vin som man tillsätter socker i och låter jäsa",
    b: "Rester från vinproduktion",
    correctAnswer: "Rester från vinproduktion",
  },
];

let btnColorMode = document.querySelector("#btnColorMode");
let radio1 = document.querySelector("#radio-1");
let radio2 = document.querySelector("#radio-2");
let label1 = document.querySelector("#label-1");
let label2 = document.querySelector("#label-2");
let showQuestion = document.querySelector("#showQuestion");
let nextQuestion = document.querySelector("#nextQuestion");
let hide = document.querySelector("#hide");
let showScore = document.querySelector("#showScore");

let counter = 0;
let score = 0;
document.body.style.background = "lightcyan";
btnColorMode.style.background = "lightcyan";
btnColorMode.style.border = "solid";

// Dark/Lightmode + lite styling

btnColorMode.addEventListener("click", () => {
  if (document.body.style.background === "lightcyan") {
    document.body.style.background = "#06283D";
    document.body.style.color = "white";
    btnColorMode.style.background = "#06283D";
    btnColorMode.style.color = "white";
    btnColorMode.innerText = "Light mode";
    btnColorMode.style.border = "solid";
  } else {
    document.body.style.background = "lightcyan";
    document.body.style.color = "black";
    btnColorMode.style.background = "lightcyan";
    btnColorMode.style.color = "black";
    btnColorMode.innerText = "Dark mode";
    btnColorMode.style.border = "solid";
  }
});

// Värden för radiobuttons
text();

// Byter text på knapp
nextQuestion.innerText = "Start";
// Döljer hide diven
hide.style.display = "none";

nextQuestion.addEventListener("click", () => {
  // Är countern inte 10 så körs denna annars ner till else och skriver ut resultat
  if (counter !== 10) {
    hide.style.display = "block";
    nextQuestion.innerText = "Nästa Fråga";

    if (radio1.value === myQuiz[counter].correctAnswer && radio1.checked) {
      counter++;
      score++;
      text();
      radio1.checked = false;
      radio2.checked = false;

      if (counter === 10) {
        hide.style.display = "none";
        nextQuestion.innerText = "Svar";
      }
    } else if (
      radio2.value === myQuiz[counter].correctAnswer &&
      radio2.checked
    ) {
      counter++;
      score++;
      text();
      radio1.checked = false;
      radio2.checked = false;
      if (counter === 10) {
        hide.style.display = "none";
        nextQuestion.innerText = "Svar";
      }
    } else if (
      ((radio1.value === myQuiz[counter].correctAnswer) === false &&
        radio1.checked) ||
      ((radio2.value === myQuiz[counter].correctAnswer) === false &&
        radio2.checked)
    ) {
      counter++;
      text();
      radio1.checked = false;
      radio2.checked = false;
      if (counter === 10) {
        hide.style.display = "none";
        nextQuestion.innerText = "Svar";
      }
    }
  }
  // Skriver ut resultat
  else {
    nextQuestion.style.display = "none";
    if (score > 7) {
      showScore.style.color = "green";
      showScore.innerText = `Du blev Mycket väl godkänd och fick ${score} / 10`;
    } else if (score >= 5) {
      showScore.style.color = "orange";
      showScore.innerText = `Du blev godkänd och fick ${score} / 10`;
    } else if (score < 5) {
      showScore.style.color = "red";
      showScore.innerText = `Du blev underkänd och fick ${score} / 10`;
    }
  }
});

// Värden för radiobuttons, samt fråga

function text() {
  showQuestion.innerText = myQuiz[counter].question;
  label1.innerText = myQuiz[counter].a;
  label2.innerText = myQuiz[counter].b;
  radio1.value = myQuiz[counter].a;
  radio2.value = myQuiz[counter].b;
}
