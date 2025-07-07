
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
    if (situation[0] == 'X' && situation[1] == 'X' && situation[2] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[3] == 'X' && situation[4] == 'X' && situation[5] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[6] == 'X' && situation[7] == 'X' && situation[8] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[0] == 'X' && situation[4] == 'X' && situation[8] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[2] == 'X' && situation[4] == 'X' && situation[6] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[0] == 'X' && situation[3] == 'X' && situation[6] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[1] == 'X' && situation[4] == 'X' && situation[7] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[2] == 'X' && situation[5] == 'X' && situation[8] == 'X'){
        gameStatus.innerHTML = "Player X has won";
    }else if (situation[0] == 'O' && situation[1] == 'O' && situation[2] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[3] == 'O' && situation[4] == 'O' && situation[5] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[6] == 'O' && situation[7] == 'O' && situation[8] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[0] == 'O' && situation[4] == 'O' && situation[8] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[2] == 'O' && situation[4] == 'O' && situation[6] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[0] == 'O' && situation[3] == 'O' && situation[6] == 'O'){
        gameStatus.innerHTML = "Player O has won";
    }else if (situation[1] == 'O' && situation[4] == 'O' && situation[7] == 'O'){
                gameStatus.innerHTML = "Player O has won";
    }else if (situation[2] == 'O' && situation[5] == 'O' && situation[8] == 'O'){
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