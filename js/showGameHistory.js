import { recordForEachGame, snapshotOfHistory } from "./gameRecordSkeleton.js";

export function showGameHistory(target) {
    //target must be an HTML element
    try {

    validateGameHistory()

    const displayContainer = target
    const newRecords = compareSnapshotAndCurrentRecord(recordForEachGame,snapshotOfHistory)

    console.log(newRecords)
    
    createSnapshot(newRecords)
    console.log(`已將newRecods推進去Snapshot`)
    appendNewElement(newRecords,target)

    } catch(error) {
        alert(error.message)
    }
    
}

// function createInnerHTML(recordForEachGame,snapshotOfHistory) {
    
//     let innerHTMLForDisplay = ``;

//     if(snapshotOfHistory.length === 0) {
//         input.map((item) => {
//             const targetNum = item.targetNum;
//             const guessedTimes = item.guessedTimes;
//             const answerHistory = item.answerHistory;
//             const index = input.indexOf(item);
    
//             const onePieceOfRecords =
//             `<ul>
//             <li>第${index + 1}次</li>
//             <li>目標數字：${targetNum}</li>
//             <li>猜測次數：${guessedTimes}</li>
//             <li>猜測數字：${answerHistory}</li>
//             </ul>`
//             innerHTMLForDisplay += onePieceOfRecords;
//         })
//     }

        

//     return innerHTMLForDisplay;
// }

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
        
        console.log(`全新的的Records:${recordForEachGame}`)
        return recordForEachGame

    } else if (recordForEachGame.length > snapshotOfHistory.length) {
        
        let newRecords = [];
        const currentRecords = [...recordForEachGame]

        for(let i = 0; i < snapshotOfHistory.length; i++) {
            currentRecords.shift()
        }

        // newRecords 是一個array
        newRecords = currentRecords
        console.log(`多出來的Records:${newRecords}`)

        return newRecords

    } else if (recordForEachGame.length === snapshotOfHistory.length) {
        throw new Error(`紀錄並沒有更新。請新增新紀錄。`)
    }
    
}

function createSnapshot(newRecords) {
    
    // 創造新的Snapshot
    for (const item of newRecords) {
        snapshotOfHistory.push(item);
    }

    console.log(`更新過的snapshot:${snapshotOfHistory}`);
}

function appendNewElement(newRecords,target) {

    //把多的object轉換成node、在append進去container
    const wrapperFragment = document.createDocumentFragment();

    for (const record of newRecords) {
        //創造 table、thead、tbody
        const table = document.createElement('table')

        //thead
        const thead = document.createDocumentFragment()
        const topicOfTable = 
        thead
        .appendChild(document.createElement('thead'))
        .appendChild(document.createElement('tr'))
        .appendChild(document.createElement('th'))

        topicOfTable.textContent = `第${snapshotOfHistory.indexOf(record) + 1}次遊戲`

        //tbody
        const tbody = document.createDocumentFragment()
        const bodyRow = 
        tbody
        .appendChild(document.createElement('tbody'))
        .appendChild(document.createElement('tr'))

        //body各欄位
        const targetNum = document.createElement('td')
        targetNum.textContent = `目標數字：${record.targetNum}`
        bodyRow.appendChild(targetNum)
        
        const guessedTimes = document.createElement('td')
        guessedTimes.textContent = `猜測次數：${record.guessedTimes}`
        bodyRow.appendChild(guessedTimes)
        
        const answerHistory = document.createElement('td')
        answerHistory.textContent = `回答數字：${record.answerHistory.join(', ')}`
        bodyRow.appendChild(answerHistory)
        
        //組合 thead和tbody
        table.appendChild(thead);
        table.appendChild(tbody);

        //組合進大wrapper
        wrapperFragment.appendChild(table)
    }   

    //組合wrapper進 target(目標容器)
    target.appendChild(wrapperFragment);
}
