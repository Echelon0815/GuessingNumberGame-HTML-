import { gameRecord,gameRecordForMultipleGames } from "./gameRecordSkeleton.js";

export function addOldRecord() {
    gameRecordForMultipleGames.timesOfPlaying ++ ;
    gameRecordForMultipleGames.RecordsForEachGame.push(gameRecord);
    console.log(gameRecordForMultipleGames);
}