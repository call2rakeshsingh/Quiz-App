const quizName = document.getElementById("quizName");
const nameID = document.querySelector(`input[type="radio"]`).checked;
const colorChange = document.getElementById("colorChange");
const questionAnswerContainer = document.getElementsByClassName("liColor");
const yourScoreID = document.getElementById("yourScore");
const currectAnswerColorCode = "rgb(83, 200, 83)";
const wrongAnswerColorCode = "rgb(255, 129, 122)";
const protectAnswerAfterSubmitID = document.getElementById(
  "protectAnswerAfterSubmit"
);
const readyTimerID = document.getElementById("readyTimer");
const readyTimerTextID = document.getElementById("readyTimerText");
const readyID = document.getElementById("ready");
const resetID = document.getElementById("reset");
const btnClass = document.getElementsByClassName("btn");
const questionClass = document.getElementsByClassName("question");
const quizTime = document.getElementById("quizTime");

let examSec = 29;
let examMin = 0;
let examHr = 0;

let seconds = examSec;
let minutes = examMin;
let hours = examHr;
let stopTimer = true;

let i = 1;
function selectedAnswer() {
  resetAnswerColor();
  i = 1;
  selectedAnswerColor();
  i = 1;
}

function selectedAnswerColor() {
  for (let i = 1; i <= 12; i++) {
    if (document.getElementById("checkbox" + i).checked == true) {
      document.getElementById("selectedAnswer" + i).style.backgroundColor =
        "rgb(255, 228, 156)";
    }
    // console.log("selectedAnswerColor ka i",i);
  }
}

function resetAnswerColor() {
  for (let i = 1; i <= 12; i++) {
    document.getElementById("selectedAnswer" + i).style.backgroundColor =
    "white";
    // console.log("resetAnswerColor ka i",i);
  }
}

function submit() {
  let currectAnswer = 0;
  yourScoreID.innerText = 0;
  for (let j = 1; j <= 12; j++) {
    if (document.getElementById("checkbox" + j).checked == false && j <= 4) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID1").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : "";
    }

    if (document.getElementById("checkbox" + j).checked == true && j <= 4) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID1").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            wrongAnswerColorCode);
      x[0] == y[0] ? currectAnswer++ : currectAnswer;
    }

    if (
      (document.getElementById("checkbox" + j).checked == false) & (j >= 5) &&
      j <= 8
    ) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID2").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : "";
    }

    if (
      document.getElementById("checkbox" + j).checked == true &&
      j >= 5 &&
      j <= 8
    ) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID2").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            wrongAnswerColorCode);
      x[0] == y[0] ? currectAnswer++ : currectAnswer;
    }

    if (
      (document.getElementById("checkbox" + j).checked == false) & (j >= 9) &&
      j <= 12
    ) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID3").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : "";
    }

    if (
      document.getElementById("checkbox" + j).checked == true &&
      j >= 9 &&
      j <= 12
    ) {
      let x = document.getElementById("labelID" + j).innerText;
      let y = document.getElementById("answerID3").innerText;
      x[0] == y[0]
        ? (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            currectAnswerColorCode)
        : (document.getElementById("selectedAnswer" + j).style.backgroundColor =
            wrongAnswerColorCode);
      x[0] == y[0] ? currectAnswer++ : currectAnswer;
    }

    yourScoreID.innerText = "Your total score is " + currectAnswer;
    document.getElementById("totalScore").style.backgroundColor = "orange";
  }
  for (let ind = 0; ind < btnClass.length; ind++) {
    btnClass[ind].style.backgroundColor = "rgb(231, 231, 231)";
    btnClass[ind].style.color = "black";
  }

  for (let ind = 0; ind < questionClass.length; ind++) {
    questionClass[ind].style.backgroundColor = "rgb(231, 231, 231)";
    questionClass[ind].style.color = "black";
  }

  resetID.style.backgroundColor = "rgb(189, 57, 255)";
  quizTime.style.backgroundColor = "rgb(185, 185, 185)";

  stopTimer = false;
  protectAnswerAfterSubmitID.style.display = "block";
  protectAnswerAfterSubmitID.style.backgroundColor = "rgba(0,0,0,0)";
  resetID.style.zIndex = 1;

  j = 1;
}

function reset() {
  for (let k = 1; k <= 12; k++) {
    if (document.getElementById("checkbox" + k).checked == true) {
      document.getElementById("checkbox" + k).checked = false;
    }

    document.getElementById("sec").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("hr").innerHTML = "00"
    // console.log(k);
  }

  resetAnswerColor();
  document.getElementById("totalScore").style.backgroundColor = "white";
  // console.log("reset ", i);
  seconds = examSec;
  minutes = examMin;
  hours = examHr;

  for (let ind = 0; ind < btnClass.length; ind++) {
    btnClass[ind].style.backgroundColor = "rgb(178, 33, 250)";
    btnClass[ind].style.color = "white";
  }

  for (let ind = 0; ind < questionClass.length; ind++) {
    questionClass[ind].style.backgroundColor = "rgb(187, 255, 227)";
    questionClass[ind].style.color = "black";
  }

  resetID.style.backgroundColor = "rgb(185, 185, 185)";
  quizTime.style.backgroundColor = "red";

  stopTimer = false;
  readySec = 3;
  protectAnswerAfterSubmitID.style.display = "block";
  protectAnswerAfterSubmitID.style.backgroundColor = "rgba(255,255,255,1)";
  readyID.style.display = "block";
  resetID.style.zIndex = 0;
}



function quiztimer() {
  if (seconds > 59 || minutes > 59 || hours > 23 || stopTimer == false) {
  } else {
    if (seconds === 0 && hours > 0 && minutes != 0) {
      minutes--;
      seconds = 59;
    } else if (seconds === 0 && hours > 0 && minutes === 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (seconds === 0 && hours === 0 && minutes != 0) {
      minutes--;
      seconds = 59;
    }

    if (seconds < 10) {
      document.getElementById("sec").innerHTML = "0" + seconds;
    } else {
      document.getElementById("sec").innerHTML = seconds;
    }

    if (minutes === 0 && hr < 24 && hr != 0) {
      hours--;
      minutes = 59;
    } else if (minutes != 0 && hr == 0 && seconds === 0) {
      minutes--;
    }

    if (minutes < 10) {
      document.getElementById("min").innerHTML = "0" + minutes;
    } else {
      document.getElementById("min").innerHTML = minutes;
    }

    if (hours < 10) {
      document.getElementById("hr").innerHTML = "0" + hours;
    } else {
      document.getElementById("hr").innerHTML = hours;
    }

    if (minutes == 0 && seconds == 0 && hours == 0) {
      resetID.style.zIndex = 1;
      submit();
    }

    if (minutes > 0 || seconds > 0 || hours > 0) {
      seconds--;
    }
  }
}

let readySec = 3;

function readyTimer() {
  if (readySec == 3) {
    readyTimerID.style.display = "flex";
    readyTimerTextID.style.display = "flex";
  }

  if (readySec >= 0) {
    readyTimerID.innerText = readySec;
  }
  if (readySec == 0) {
    protectAnswerAfterSubmitID.style.display = "none";
    readyID.style.display = "none";
    readyTimerID.style.display = "none";
    readyTimerTextID.style.display = "none";
  }
  readySec--;
}

function readyTimer1() {
  var readyTimerVar = setInterval(readyTimer, 1000);

  setTimeout(() => {
    clearInterval(readyTimerVar);
  }, 4000);
  setTimeout(() => {
    stopTimer = true;
    var quizTimerVar = setInterval(quiztimer, 1000);
    setTimeout(() => {
      clearInterval(quizTimerVar);
    }, 30000);
  }, 4000);
}



/*
let sec = 0;
let min = 0;
let hr = 0;

function stopWatch() {
  if (sec === 60) {
    min++;
    sec = 0;
  } else {
    sec = sec++;
  }

  if (sec < 10) {
    document.getElementById("sec").innerHTML = "0" + sec;
  } else {
    document.getElementById("sec").innerHTML = sec;
  }

  if (min === 60 && hr == 23) {
    hr = 0;
    min = 0;
  } else if (min === 60 && hr < 23) {
    hr++;
    min = 0;
  }

  if (min < 10) {
    document.getElementById("min").innerHTML = "0" + min;
  } else {
    document.getElementById("min").innerHTML = min;
  }

  if (hr < 10) {
    document.getElementById("hr").innerHTML = "0" + hr;
  } else {
    document.getElementById("hr").innerHTML = hr;
  }

  sec++;
}
*/