// gameRecord 無法被其他module影響而指向新物件，它可以變更該記憶體裡的property

export const gameRecord = {'id':null,'targetNum':null,'guessedTimes':0,'answerHistory':[]};

export const recordForEachGame = [];

export const gameStatus = {'status':'notReady'}

export let  snapshotOfHistory = [];
