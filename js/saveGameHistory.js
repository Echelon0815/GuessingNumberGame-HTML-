import { gameRecord,recordForEachGame,gameStatus } from "./gameRecordSkeleton.js";

export function saveGameHistory() {
    try {
        validateGameStatus();
        
        // deep clone
        let anotherGameRecord = {...gameRecord};

        recordForEachGame.push(anotherGameRecord);
        console.log(`Current History:${recordForEachGame.length}`);
        console.log(recordForEachGame)
    } catch(error) {
        alert(error.message);
    }
}

function validateGameStatus() {
    if (gameStatus.status !== 'gameOver') {
        throw new Error(`This game is NOT over yet.`)
    }
}