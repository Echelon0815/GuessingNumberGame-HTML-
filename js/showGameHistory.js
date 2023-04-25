import { recordForEachGame, snapshotOfHistory } from "./gameRecordSkeleton.js";

export function showGameHistory(target) {
    //target must be an HTML element
    try {
    validateGameHistory();
    const displayContainer = target;
    const resultHTML = createInnerHTML(recordForEachGame,snapshotOfHistory);
    displayContainer.innerHTML = resultHTML;
    } catch(error) {
        alert(error.message)
    }
    
}

function createInnerHTML(recordForEachGame,snapshotOfHistory) {
    
    let innerHTMLForDisplay = ``;

    if(snapshotOfHistory.length === 0) {
        input.map((item) => {
            const targetNum = item.targetNum;
            const guessedTimes = item.guessedTimes;
            const answerHistory = item.answerHistory;
            const index = input.indexOf(item);
    
            const onePieceOfRecords =
            `<ul>
            <li>第${index + 1}次</li>
            <li>目標數字：${targetNum}</li>
            <li>猜測次數：${guessedTimes}</li>
            <li>猜測數字：${answerHistory}</li>
            </ul>`
    
            innerHTMLForDisplay += onePieceOfRecords;
        })
    }

        

    return innerHTMLForDisplay;
}

function validateGameHistory() {
    if (recordForEachGame.length === 0) {
        throw new Error(`There is no game record.`)
    } else if (recordForEachGame.length === snapshotOfHistory.length) {
        throw new Error(`You haven't saved any NEW game record.`)
    }
}

function compareSnapshotAndCurrentRecord(recordForEachGame,snapshotOfHistory) {
    
    // 比較兩陣列，回傳多出來的object
    if(snapshotOfHistory.length === 0) {
        return recordForEachGame;
    } else {

    }
    
}

function createSnapshot() {
    
    // 創造新的Snapshot
}

function appendNewElement(objArr,target) {

    //把多的object轉換成node、在append進去container
}

