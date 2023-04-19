import { gameRecord } from "./gameRecordSkeleton.js";

export function initializeNum() {
    gameRecord.targetNum = Math.ceil(Math.random() * 100);
    console.log(`the number is ${gameRecord.targetNum}`);
}