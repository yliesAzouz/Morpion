let pions = document.querySelectorAll("#Jeu button");
let player = "";
let message = document.querySelector("#StatutJeu");
let lap = 1;
let checkWin = false;
let scoreOne = document.querySelector("#playerOne");
let scoreTwo = document.querySelector("#playerTwo");
let playerScoreOne = 0;
let playerScoreTwo = 0;
let audio = new Audio("cri.mp3")
let audioDeux = new Audio("piggy-bank.mp3")
let blood = document.querySelector("#blood");
let blood2 = document.querySelector("#blood2");
let nIntervId;
let limitScoreOne = playerScoreOne
let limitScoreTwo = playerScoreTwo
let victory = [
  //les victoires horizontales
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], //ligne 1
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], //ligne 2
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], //ligne 3
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], //ligne 4
  [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], //ligne 5
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], //ligne 6
  //les victoires verticales
  [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], // colonne 1
  [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], // colonne 2
  [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], // colonne 3
  [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], // colonne 4
  [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], // colonne 5
  [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], // colonne 6
  [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], // colonne 7
  //les victoires diagonales haut -> droite
  [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
  [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
  [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41],
  //les victoires diagonales haut -> gauche
  [6, 12, 18, 24], [5, 11, 17, 23], [4, 10, 16, 22], [3, 9, 15, 21],
  [13, 19, 25, 31], [12, 18, 24, 30], [11, 17, 23, 29], [10, 16, 22, 28],
  [20, 26, 32, 38], [19, 25, 31, 37], [18, 24, 30, 36], [17, 23, 29, 35]
];

message.innerHTML = "Veuillez commencer la partie"

// fonction qui donne 10 points à joueur 1 OK
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

// fonction qui donne 10 points à joueur 2 OK
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

// fonction qui donne 5 points à chaque joueur OK
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

// fonction qui stop l'accrementation du score grace a la fonction js "clearInterval" OK
function stopInterval() {
  clearInterval(nIntervId);
  nIntervId = null;
}
// fonction pour checker la victoire
function rechercherVainqueur() {

  for (let i = 0; i < victory.length; i++) {
    let a = pions[victory[i][0]].innerHTML
    let b = pions[victory[i][1]].innerHTML
    let c = pions[victory[i][2]].innerHTML
    let d = pions[victory[i][3]].innerHTML
    if (a === b && b === c && c === d && a != "") {
      audio.play()
      if (player === "X") {
        message.innerHTML = "X win the game";
        checkWin = true;
        setTimeout(() => {// appelle ma fonction avec un delai de 1sec
          updateScore1(playerScoreOne)
        }, 1500); // delai toujours en milliseconde
      } else if (player === "O") {
        message.innerHTML = "O win the game";     
        checkWin = true;
        setTimeout(() => {// appelle ma fonction avec un delai de 1sec
          updateScore1(playerScoreTwo)
        }, 1500); // delai toujours en milliseconde
      }
      break;
    }
    matchNul()
  }
}

// fonction pour checker le match nul OK
function matchNul() {
  let caseFull = 0;
  for (let i = 0; i < pions.length; i++) {
    if (pions[i].innerHTML != "") {
      caseFull++;
    }
  }
  if (caseFull === 42) {
    message.innerHTML = "Match Nul";
    updateScoreMatchNul(playerScoreOne, playerScoreTwo)
  }
}

//fonction pour donner un nombre aléatoire OK
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerChoice(element) {
  if (!checkWin) {
    if (element.innerHTML === "") {
      if (lap % 2 === 0) {
        element.style.backgroundColor = "red";
        element.style.color = "red";
        message.innerHTML = "Au tour des Jaunes";
        player = "O";
      } else {
        element.style.backgroundColor = "yellow";
        element.style.color = "yellow";
        message.innerHTML = "Au tour des red";
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

// le cpu click sur une case aleatoirement grace a la fonction random OK
function ia() {
  iaArray = []
  for (let i = 0; i < pions.length; i++) {
    if (pions[i].innerHTML === "") {
      iaArray.push([i])
    }
  }
  let rand = random(0, iaArray.length - 1)
  pions[iaArray[rand]].click()

}

//fonction reset pour tout remettre à zero OK
function reset() {
  for (i = 0; i < pions.length; i++) {
    pions[i].innerHTML = "";
    pions[i].style.backgroundColor = "white";
    message.innerHTML = "Veuillez commencer la partie";
    checkWin = false;
    lap = 1;
  }
}


