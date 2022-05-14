const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
  
}


function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

function winnerCheck(positions) {
  if (positions[0] === positions[1] && positions[1] === positions[2]
      ||
      positions[3] === positions[4] && positions[4] === positions[5]
      ||
      positions[6] === positions[7] && positions[7] === positions[8]
      ||
      positions[0] === positions[3] && positions[3] === positions[6]
      ||
      positions[1] === positions[4] && positions[4] === positions[7]
      ||
      positions[2] === positions[5] && positions[5] === positions[8]
      ||
      positions[0] === positions[4] && positions[4] === positions[8]
      ||
      positions[6] === positions[4] && positions[4] === positions[2]) {
        console.log(`TEMOS UM VENCEDOR!`)
      } else {
        console.log("DEU VELHA!")
      }
    }


// showTutorial();
setPlayerMovement(0);
setPlayerMovement(1);
setPlayerMovement(2);
setPlayerMovement(3);
setPlayerMovement(4);
setPlayerMovement(6);
setPlayerMovement(7);
setPlayerMovement(5);
setPlayerMovement(8);

drawBoard(boardData);
winnerCheck(boardData);

