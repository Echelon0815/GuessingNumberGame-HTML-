import { gameRecord,gameRecordHistory,gameStatus } from "./gameRecordSkeleton.js";

export function saveGameHistory() {
    try {
        validateGameStauts();
        gameRecordHistory.timesOfPlaying ++ ;   
        gameRecordHistory.RecordsForEachGame.push(gameRecord);
        console.log(`Current History:${gameRecordHistory.RecordsForEachGame.length}`);
    } catch(error) {
        alert(error.message);
    }
}

function validateGameStauts() {
    if (gameStatus.status !== 'gameOver') {
        throw new Error(`This game is NOT over yet.`)
    }
}