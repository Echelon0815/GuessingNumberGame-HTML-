// gameRecord 會被 CreateNewGame() 指定指向新的物件

export let gameRecord = {'id':null,'targetNum':null,'guessedTimes':0,'answerHistory':[]};

export const gameRecordHistory = {'timesOfPlaying':0 ,'RecordsForEachGame':[]};

export const gameStatus = {'status':'notReady'}
