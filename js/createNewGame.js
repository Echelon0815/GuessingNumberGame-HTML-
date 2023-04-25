import { gameRecord, gameStatus } from "./gameRecordSkeleton.js";

export function createNewGame() {
    
    try {
        //game status must not be 'ready' 
        validateGameStatus();
        
        const uniqueId = createUniqueId();
        const targetNum = Math.ceil(Math.random() * 100);

        const newGameRecord = {'id':uniqueId,'targetNum':targetNum,'guessedTimes':0,'answerHistory':[]}

        // I cannot use gameRecord = newGameRecord, the error mgs is :Type error GameRecord is readonly.Why?
        // cuz Imports are a read-only view of the exported binding in the source module's environment
        Object.assign(gameRecord,newGameRecord);
        gameStatus.status = 'ready';

        console.log(`the number is ${gameRecord.targetNum}`);
        console.log(`id:${gameRecord.id} Status:${gameStatus.status}`)
    } catch(error) {
        alert(error.message)
    }

}

function createUniqueId() {
    const timestamp = Date.now().toString(36)
    const randomStr = Math.random().toString(36).substring(2,5)
    const uniqueId = timestamp + randomStr;
    
    return uniqueId;
}

function validateGameStatus() {
    if (gameStatus.status === 'ready' ) {
        throw new Error(`This game is NOT over yet.`)
    }
}