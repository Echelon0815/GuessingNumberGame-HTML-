# 更新紀錄

## Commit 1 (20230419)

### 完成
* 完成產生數字、和基本的遊戲邏輯(比大小)
* 學習使用 ESmodule 功能 還有 try...catch

## Commit 2 (20230421)

### 完成
* GameRecordSkeleton.js, saveGameHistory, createNewGame 的變數、函數名稱更新
* 改變GameRecordSkeleton中變數的結構

### 待辦
* 準備製作顯示遊戲過往紀錄的函數 showGameHistory

## Commit 3 (20230425)

### 完成
* 修改 gameRecordSkeleton.js 裏頭的 gameRecordHistroy，將其拆成兩個新變數："recordForEachGame","snapshotOfHistory" 
* 修改 saveGameHistory.js 裏頭的函數，加上try...catch、檢查gamestatus、配合新變數

### 待辦
* 用 DocumentFragment 、appendChild、filter() 、find()、或 some() 等函式完成showGameHistory.js 

## Commit 4 (20230427)

### 完成
* 完成showGameHistory中的函數，能利用documentFragment一次呈現所有新紀錄

### 待辦
* 替元素加上CSS、改善呈現紀錄的表格、讓儲存紀錄的函式在遊戲結束後自動執行。

## Commit 5 (20230512)

### 完成
* 完成遊戲紀錄卡片的sample，在線下完成了電腦版和手機板排版的設計圖

### 待辦
* 完成電腦版排版，整合遊戲使用的函數