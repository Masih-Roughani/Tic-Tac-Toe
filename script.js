
let currentPlayer = "X";

const situation = ['-','-','-','-','-','-','-','-','-'];

const xWin = ["XSSSXSSSX" , "SSXSXSXSS" , "XXXSSSSSS" , "SSSXXXSSS" , "SSSSSSXXX" , "XSSXSSXSS" , "SXSSXSSXS", "SSXSSXSSX"];

const oWin = xWin.map(str => str.replaceAll('X', 'O'));

const gameContainer = document.querySelector('.game--container');

const gameRestart = document.querySelector('.game--restart');

const gameStatus = document.querySelector('.game--status');
gameStatus.innerHTML = "It's X's turn";

gameRestart.addEventListener('click', () => {
    gameContainer.childNodes.forEach(cell => {
        cell.innerHTML = "";
    });
    for (let i = 0; i < 9; i++) {
        situation[i] = '-';
    }
    currentPlayer = "X";
    gameStatus.innerHTML = "It's X's turn";
});

function hasWinner(){
    if (xWin.includes(situation.map(str => str.replace('O','S').replace('-','S')).join(''))){
        gameStatus.innerHTML = "Player X has won";
    }else if (oWin.includes(situation.map(str => str.replace('X','S').replace('-','S')).join(''))){
        gameStatus.innerHTML = "Player O has won";
    }else{
        if(!situation.includes('-')){
            gameStatus.innerHTML = "Game ended in a draw";
        }
    }
}

gameContainer.addEventListener('click' , (event) => {
    if (gameStatus.innerHTML.includes("turn")){
        const cell = event.target.closest('.cell');
        if (cell && cell.innerHTML === "" ) {
            cell.innerHTML = currentPlayer;
            situation[Number(cell.dataset.cellIndex)] = currentPlayer;
            hasWinner();
            if (gameStatus.innerHTML.includes("turn")){
            gameStatus.innerHTML = currentPlayer === "X" ? "It's O's turn" : "It's X's turn";
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }
});