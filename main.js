//DOM ELEMENTS HOOKS
const fields = [...document.getElementsByClassName("field")];
const whosPlaying = document.querySelector("h3>span");
const endDiv = document.getElementById("end");

const h1 = document.querySelector("h1");
const btnRestart = document.getElementById("btnRestart");
const h1Spare = h1.innerHTML;

// FLAGS CONST AND OTHER VARIABLES
const player1 = "X";
const player2 = "O";

const fieldeLog = ["", "", "", "", "", "", "", "", ""]; //Tracks wich fieldes are taken by whom

let whosMoveIsIt = 1; //Tells wich player is playing now
let movesMade = 0;

colors = [
  "DarkSlateGray",
  "SlateGray",
  "LightSlateGray",
  "DimGray",
  "Gray",
  "Silver",
  "Darkgray",
  "LightGray",
  "MediumPurple",
  "LightSteelBlue"
];

//LOGIC IN SEPARATE FUNCTIONS
function colorFieldes() {
  fields.map(field => {
    field.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
}

function resetField() {
  endDiv.style.display = "none";
  fields.forEach(clean);
  function clean(field) {
    field.innerHTML = "";
    h1.innerHTML = h1Spare;
  }
}
function endGame(champ) {
  const winner = document.getElementById("player");
  //CSS and DOM display Who won
  endDiv.style.display = "block";

  if (champ) {
    winner.innerHTML = champ;
  } else {
    h1.innerHTML = "It's a Tie!";
  }

  //Make sure everything else is at default setting

  movesMade = 0;
  whosMoveIsIt = 1;
  for (let i = 0; i < fieldeLog.length; i++) {
    fieldeLog[i] = "";
  }
}

//DEFAULT CSS SETUP
whosPlaying.innerHTML = `<span>${player1}</span>`;

//MAIN GAME LOOP
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function(e) {
    if (whosMoveIsIt === 1 && e.target.innerHTML === "") {
      movesMade++;
      e.target.innerHTML = player1;
      e.target.style.color = "#eee";
      fieldeLog.splice(i, 1, player1);
      whosMoveIsIt++;
      whosPlaying.innerHTML = `<span>${player2}</span>`; //display for whos turn it is
    } else if (whosMoveIsIt === 2 && e.target.innerHTML === "") {
      movesMade++;
      e.target.innerHTML = player2;
      e.target.style.color = "black";
      fieldeLog.splice(i, 1, player2);
      whosMoveIsIt--;
      whosPlaying.innerHTML = `<span>${player1}</span>`;
    }

    //Checking for wins
    if (movesMade >= 5) {
      if (
        fieldeLog[0] === fieldeLog[1] &&
        fieldeLog[1] === fieldeLog[2] &&
        fieldeLog[0] !== ""
      ) {
        return endGame(fieldeLog[0]);
      } else if (
        fieldeLog[3] === fieldeLog[4] &&
        fieldeLog[4] === fieldeLog[5] &&
        fieldeLog[3] !== ""
      ) {
        return endGame(fieldeLog[3]);
      } else if (
        fieldeLog[6] === fieldeLog[7] &&
        fieldeLog[7] === fieldeLog[8] &&
        fieldeLog[6] !== ""
      ) {
        return endGame(fieldeLog[6]);
      } else if (
        fieldeLog[0] === fieldeLog[3] &&
        fieldeLog[3] === fieldeLog[6] &&
        fieldeLog[0] !== ""
      ) {
        return endGame(fieldeLog[0]);
      } else if (
        fieldeLog[1] === fieldeLog[4] &&
        fieldeLog[4] === fieldeLog[7] &&
        fieldeLog[1] !== ""
      ) {
        return endGame(fieldeLog[1]);
      } else if (
        fieldeLog[2] === fieldeLog[5] &&
        fieldeLog[5] === fieldeLog[8] &&
        fieldeLog[2] !== ""
      ) {
        return endGame(fieldeLog[2]);
      } else if (
        fieldeLog[0] === fieldeLog[4] &&
        fieldeLog[4] === fieldeLog[8] &&
        fieldeLog[0] !== ""
      ) {
        return endGame(fieldeLog[0]);
      } else if (
        fieldeLog[6] === fieldeLog[4] &&
        fieldeLog[4] === fieldeLog[2] &&
        fieldeLog[6] !== ""
      ) {
        return endGame(fieldeLog[6]);
      } else if (movesMade === 9) {
        return endGame(false);
      }
    }
  });
}
//Restart Button
btnRestart.addEventListener("click", resetField);

colorFieldes();
