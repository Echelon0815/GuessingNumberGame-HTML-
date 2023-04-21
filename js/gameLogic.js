import { gameRecord,gameStatus } from "./gameRecordSkeleton.js";

// gameRecord must been changed by createNewGame() before doing these Logics.
export function handleUserGuess(input) {

    //!! All values sent from a form are strings.
    const guess = parseInt(input)
    const targetNum = gameRecord.targetNum;
    console.log(`User guess : ${guess}`);
    
    try {

        checkGameStatus();
        validateGuess(guess);

        if (targetNum - guess > 0) {
            console.log(`Your guess is ${guess}`);
            updateGameHistory(guess);
            AlertAnswerTooLow();
        } else if (targetNum - guess < 0) {
            console.log(`Your guess is ${guess}`);
            updateGameHistory(guess);
            AlertAnswerTooHigh();
        } else if (targetNum === guess){
            console.log(`Your guess is ${guess}`);
            updateGameHistory(guess);
            AlertAnswerCorrect(gameRecord.guessedTimes);
            endTheGame();
        } 

    }  catch (error) {

        // console.log(error) 秀出error物件
        // console.log(error.message) 秀出錯誤訊息
        alert(error.message);
        return

    }

}

function checkGameStatus() {
    if (gameStatus.status !== 'ready') {
        throw new Error(`The game is not ready yet, please hit the Start New Game Button!`)
    }
}

function validateGuess(input) {

    //!! 不要使用typeof，在JavaScript裡 typeof(NaN) 是他媽的一個數字
    if (isNaN(input)) {
        // console.log(`User guess 不是數字`)
        //!! The `handleUserGuess()` won't stop when using `return` 
        throw new Error (`The input value is not a number !`);
         
    }

    if (input > 100 || input <=0) {
        // console.log(`User guess 大小不對`)
        throw new Error (`The size of the number is not valid !`); 
    }   

}

function updateGameHistory(input) {

    gameRecord.guessedTimes ++
    gameRecord.answerHistory.push(input)
}

function AlertAnswerTooHigh() {

    alert('the number you guess is too High, try again !')
}

function AlertAnswerTooLow() {
    alert('the number you guess is too Low, try again !')
}

function AlertAnswerCorrect(input) {
    
    alert(`Yes ! You Won ! The times you've guessed:${input}`)
}

function endTheGame() {
    gameStatus.status = 'gameOver';
}
