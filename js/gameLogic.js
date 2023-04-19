import { gameRecord } from "./gameRecordSkeleton.js";

export function handleUserGuess(input) {

    //!! All values sent from a form are strings.
    const guess = parseInt(input)
    const targetNum = gameRecord.targetNum;
    console.log(`User guess : ${guess}`);
    
    try {

        validateGuess(guess);

        if (targetNum - guess > 0) {
            console.log(`Your guess is ${guess}`);
            addGuessedTimes();
            AlertAnswerTooLow();
        } else if (targetNum - guess < 0) {
            console.log(`Your guess is ${guess}`);
            addGuessedTimes();
            AlertAnswerTooHigh();
        } else if (targetNum === guess){
            console.log(`Your guess is ${guess}`);
            addGuessedTimes();
            AlertAnswerCorrect();
        } 

    }  catch (error) {

        // console.log(error) 秀出error物件
        // console.log(error.message) 秀出錯誤訊息
        alert(error.message);
        return

    }

}

function addGuessedTimes() {
    gameRecord.guessedTimes ++
    // console.log(`猜測總數字: ${gameRecord.guessedTimes}`)
}

function AlertAnswerTooHigh() {

    alert('the number you guess is too High, try again !')
}

function AlertAnswerTooLow() {

    alert('the number you guess is too Low, try again !')
}

function AlertAnswerCorrect() {

    alert('Yes ! You got the right number !')
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
