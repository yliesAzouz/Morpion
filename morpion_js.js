let pions = document.querySelectorAll("#Jeu button");
let player = "";
let message = document.querySelector("#StatutJeu");
let lap = 1;
let checkWin = false;
let scoreOne = document.querySelector("#playerOne");
let scoreTwo = document.querySelector("#playerTwo");
let playerScoreOne = 0;
let playerScoreTwo = 0;
let audio = new Audio("pan.mp3")
let blood = document.querySelector("#blood");
let blood2 = document.querySelector("#blood2");
let nIntervId;
let limitScoreOne = playerScoreOne
let limitScoreTwo = playerScoreTwo

message.innerHTML = "Veuillez commencer la partie"

// fonction qui donne 10 points à joueur 1
function updateScore1(elem) {
  if (!nIntervId) {
    nIntervId = setInterval(function () {
      elem++;
      scoreOne.innerHTML = elem;
      if (elem === limitScoreOne + 10) {
        stopInterval()
        limitScoreOne = limitScoreOne + 10;
      }
      playerScoreOne = elem;
    }, 70); // durée 70 millisecondes
  }
}

// fonction qui donne 10 points à joueur 2
function updateScore2(elem) {
  if (!nIntervId) {
    nIntervId = setInterval(function () {
      elem++
      scoreTwo.innerHTML = elem;
      if (elem === limitScoreTwo + 10) {
        stopInterval()
        limitScoreTwo = limitScoreTwo + 10;
      }
      playerScoreTwo = elem;
    }, 70); // durée 70 millisecondes
  }
}

// fonction qui donne 5 points à chaque joueur
function updateScoreMatchNul(elem1, elem2) {
  if (!nIntervId) {
    nIntervId = setInterval(function () {
      elem1++;
      elem2++;
      scoreOne.innerHTML = elem1;
      scoreTwo.innerHTML = elem2;
      if (elem1 === limitScoreOne + 5) {
        stopInterval()
        limitScoreOne = limitScoreOne + 5;
        limitScoreTwo = limitScoreTwo + 5;
      }
      playerScoreOne = elem1;
      playerScoreTwo = elem2;
    }, 70);// durée 70 millisecondes
  }
}

// fonction qui stop l'accrementation du score grace a la fonction js "clearInterval"
function stopInterval() {
  clearInterval(nIntervId);
  nIntervId = null;
}
// fonction pour checker la victoire
function rechercherVainqueur() {

  for (let i = 0; i < pions.length; i++) {
    if (pions[0].innerHTML === "X" && pions[1].innerHTML === "X" && pions[2].innerHTML === "X") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[1].style.backgroundColor = "#9ACD32";
      pions[2].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      setTimeout(() => {// appelle ma fonction avec un delai de 1sec
      updateScore1(playerScoreOne) 
      }, 1500); // delai toujours en milliseconde
      break;
    }
   

    if (pions[3].innerHTML === "X" && pions[4].innerHTML === "X" && pions[5].innerHTML === "X") {
      pions[3].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[6].innerHTML === "X" && pions[7].innerHTML === "X" && pions[8].innerHTML === "X") {
      pions[6].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[0].innerHTML === "X" && pions[3].innerHTML === "X" && pions[6].innerHTML === "X") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[3].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[1].innerHTML === "X" && pions[4].innerHTML === "X" && pions[7].innerHTML === "X") {
      pions[1].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[2].innerHTML === "X" && pions[5].innerHTML === "X" && pions[8].innerHTML === "X") {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[0].innerHTML === "X" && pions[4].innerHTML === "X" && pions[8].innerHTML === "X") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[2].innerHTML === "X" && pions[4].innerHTML === "X" && pions[6].innerHTML === "X") {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "X win the game";
      audio.play()
      blood2.style.zIndex = "1";
      updateScore1(playerScoreOne)
      break;
    }

    if (pions[0].innerHTML === "O" && pions[1].innerHTML === "O" && pions[2].innerHTML === "O") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[1].style.backgroundColor = "#9ACD32";
      pions[2].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[3].innerHTML === "O" && pions[4].innerHTML === "O" && pions[5].innerHTML === "O") {
      pions[3].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[6].innerHTML === "O" && pions[7].innerHTML === "O" && pions[8].innerHTML === "O") {
      pions[6].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[0].innerHTML === "O" && pions[3].innerHTML === "O" && pions[6].innerHTML === "O") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[3].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[1].innerHTML === "O" && pions[4].innerHTML === "O" && pions[7].innerHTML === "O") {
      pions[1].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[2].innerHTML === "O" && pions[5].innerHTML === "O" && pions[8].innerHTML === "O") {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[0].innerHTML === "O" && pions[4].innerHTML === "O" && pions[8].innerHTML === "O") {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play()
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }

    if (pions[2].innerHTML === "O" && pions[4].innerHTML === "O" && pions[6].innerHTML === "O") {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      checkWin = true;
      message.innerHTML = "O win the game";
      audio.play();
      blood.style.zIndex = "1";
      updateScore2(playerScoreTwo)
      break;
    }
    matchNul()
  }
}

// fonction pour checker le match nul
function matchNul() {
  let caseFull = 0;
  for (let i = 0; i < pions.length; i++) {
    if (pions[i].innerHTML != "") {
      caseFull++;
    }
  }
  if (caseFull === 9) {
    message.innerHTML = "Match Nul";
    updateScoreMatchNul(playerScoreOne, playerScoreTwo)
  }
}

//fonction pour donner un nombre aléatoire
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerChoice(element) {
  if (!checkWin) {
    if (element.innerHTML === "") {
      if (lap % 2 === 0) {
        element.style.color = "#ec5190";
        message.innerHTML = "Au tour de X";
        player = "O";
      } else {
        for (let i = 0; i < pions.length; i++) {
          pions[i].disabled = true
        }
        element.style.color = "white";
        message.innerHTML = "Au tour de O";
        player = "X";
      }
      element.innerHTML = player;
      lap++;
      rechercherVainqueur();
      if (lap % 2 === 0) {
        setTimeout(() => {// appelle ma fonction avec un delai de 1sec
          ia()
        }, 1000); // delai toujours en milliseconde
      }

    }
  }
}

// le cpu click sur une case aleatoirement grace a la fonction random
function ia() {
  iaArray = []
  for (let i = 0; i < pions.length; i++) {
    pions[i].disabled = false
    if (pions[i].innerHTML === "") {
      iaArray.push([i])
    }
  }
  let rand = random(0, iaArray.length - 1)
  pions[iaArray[rand]].click()

}

//fonction reset pour tout remettre à zero
function reset() {
  for (i = 0; i < pions.length; i++) {
    pions[i].innerHTML = "";
    pions[i].style.backgroundColor = "black";
    message.innerHTML = "Veuillez commencer la partie";
    checkWin = false;
    blood.style.zIndex = "-1";
    blood2.style.zIndex = "-1";
    lap = 1;
  }
}


