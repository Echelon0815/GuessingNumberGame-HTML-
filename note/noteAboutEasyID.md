    直接使用 Date()，不加入實際時間作為參數的話，會得到一串字串表示現在時間
    Date.now() 則會表達自January 1, 1970, UTC 開始算的時間差(以千分之一秒計)
    toString 是 number 物件的method，參數代表進位方式，可從2用到36。
    36 進位是 0~9 (10) 加上 小寫a~z (26)

       substring() 的參數可為 indexStart,indexEnd；或是就一個參數 indexStart
    index 為二的字會跑出來、跑到index為4為止，index為5的字不會出現。