const MacroStatements = {
    'IF': {
        label: 'IF statement',
        description: 'IF statement',
        snippet: `IF \${1:[condition]} THEN
\t\$0\n
END_IF;
`,
    },
    'IF-ELSE': {
        label: 'IF-ELSE statement',
        description: 'IF-ELSE statement',
        snippet: `IF \${1:[condition]} THEN
\t\$0\n
ELSE\n
\t\n
END_IF;
`,
    },
    'IF-ELSEIF-ELSE': {
        label: 'IF-ELSEIF-ELSE statement',
        description: 'IF-ELSEIF-ELSE statement',
        snippet: `IF \${1:[condition]} THEN\n
\t\$0\n
ELSEIF \${3:[condition]} THEN\n
\t\n
ELSE\n
\t\n
END_IF;
`,
    },
    'FOR': {
        label: 'FOR loop',
        description: 'FOR loop',
        snippet: `FOR \${1:variable} := \${2:initial_value} TO \${3:final_value} DO
\t\$0\n
END_FOR;
`,
    },
    'WHILE': {
        label: 'WHILE loop',
        description: 'WHILE loop',
        snippet: `WHILE \${1:[condition]} DO
\t\$0\n
END_WHILE;
`,
    },
    'GOTO': {
        label: 'GOTO statement',
        description: 'GOTO statement，跳轉 N{label} 標籤;',
        snippet: 'GOTO ${1:label};',
    },
};

const MacroFunctions = {
    'ABS 取絕對值': {
        description: `取絕對值\n
example:\n
\t ABS(-1) // 1
`,
        snippet: 'ABS(${1:value});',
    },
    'SIGN 取符號': {
        description: `取符號，正數為1，負數為-1，零為0\n
example:\n
\t SIGN(-123) => -1\n
\t SIGN(0) // 0
`,
        snippet: 'SIGN(${1:value});',
    },
    'ROUND 四捨五入': {
        description: `四捨五入\n
example:\n
\t ROUND(1.5) // 2
`,
        snippet: 'ROUND(${1:value});',
    },
    'RANDOM 產生隨機數': {
        description: '產生隨機數，範圍為0~32767',
        snippet: 'RANDOM();',
    },
    'STD 數值標準化': {
        description: `數值依設定標準化，通常使用 #1600 設定值\n
example:\n
\t STD(100, #1600) // 0.1 when #1600 = 0.001
`,
        snippet: 'STD(${1:value}, ${2:#1600});',
    },
    'WAIT 等待': {
        description: '系統停止預解，直到WAIT之前的指令執行完畢，通常放在會改變R值的G碼後，讀取R值前',
        snippet: 'WAIT();',
        ref: 'https://confluence.syntecclub.com/pages/viewpage.action?pageId=746207985',
    },
    'OPEN 開啟檔案': {
        description: `開啟檔案，如檔案不存在則建立新檔案\n
可指定寫檔模式 "a" 或 "w"，預設為 "w"
example:\n
\t OPEN("test.txt", "a"); // 開啟 test.txt 檔案，寫入模式為 append
`,
        snippet: 'OPEN(${1:file_name}${2:, ${3|"a","w"|}});',
    },
    'CLOSE 關閉檔案': {
        description: '關閉當前開啟的檔案',
        snippet: 'CLOSE();',
    },
    'PRINT 寫入檔案': {
        description: `寫入檔案，應先使用 OPEN 開啟檔案\n
字串中的變數會被解譯，\n
以下符號請注意使用跳脫字元：
\t#、@、\\、p、"
example:\n
\t PRINT("test.txt", "Hello World!"); // 寫入 Hello World! 到 test.txt 檔案，並換行
`,
        snippet: 'PRINT(${2:content});',
    },
    'ALARM 觸發警報': {
        description: `觸發警報\n
如果沒有建立字串檔，則需要附帶警報訊息\n
警報代碼範圍: 0 ~ 65535\n
字串長度限制: 19個全形字或39個半形字\n
example:\n
\t ALARM(1, "Alarm Message"); // 觸發警報1，訊息為 Alarm Message
`,
        snippet: 'ALARM(${1:alarm_code}, ${2:alarm_message});',
    },
    'MSG 觸發提示': {
        description: `觸發提示\n
如果沒有建立字串檔，則需要附帶提示訊息\n
提示代碼範圍: 0 ~ 65535\n
字串長度限制: 19個全形字或39個半形字\n
example:\n
\t MSG(1, "Message"); // 觸發提示1，訊息為 Message
`,
        snippet: 'MSG(${1:message_code}, ${2:message});',
    },
    'GETARG 取得參數': {
        description: `取得參數\n
example:\n
\t GETARG(X1); // 取得 X1 參數的值
`,
        snippet: 'GETARG(${1:X1});',
    },
    'MAX 取最大值': {
        description: `取兩數中的最大值\n
example:\n
\t MAX(1, 2) // 2
`,
        snippet: 'MAX(${1:value1}, ${2:value2});',
    },
    'MIN 取最小值': {
        description: `取兩數中的最小值\n
example:\n
\t MIN(1, 2) // 1
`,
        snippet: 'MIN(${1:value1}, ${2:value2});',
    },
    'PARAM 讀取系統參數(Pr)': {
        description: `讀取系統參數(Pr)\n
example:\n
\t PARAM(3219); // 讀取 Pr3219 參數的值
`,
        snippet: 'PARAM(${1:Pr_number});',
    },
    'SLEEP 放棄解譯並短暫等待': {
        description: '放棄解譯並短暫等待(數十毫秒)，讓PLC有機會完成任務並通知MACRO',
        snippet: 'SLEEP();',
        ref: 'https://confluence.syntecclub.com/pages/viewpage.action?pageId=746207985',
    },
    'STR2INT 字串轉整數': {
        description: `字串轉整數\n
example:\n
\t STR2INT("123"); // 123
`,
        snippet: 'STR2INT(${1:string});',
    },
    'SIN 取正弦值': {
        description: `取正弦值，參數單位為度\n
example:\n
\t SIN(90) // 1
`,
        snippet: 'SIN(${1:value});',
    },
    'COS 取餘弦值': {
        description: `取餘弦值，參數單位為度\n
example:\n
\t COS(90) // 0
`,
        snippet: 'COS(${1:value});',
    },
    'TAN 取正切值': {
        description: `取正切值，參數單位為度\n
example:\n
\t TAN(45) // 1
`,
        snippet: 'TAN(${1:value});',
    },
    'ASIN 反正弦值': {
        description: `取反正弦值，回傳值單位為度\n
example:\n
\t ASIN(1) // 90
`,
        snippet: 'ASIN(${1:value});',
    },
    'ACOS 反餘弦值': {
        description: `取反餘弦值，回傳值單位為度\n
example:\n
\t ACOS(0) // 90
`,
        snippet: 'ACOS(${1:value});',
    },
    'ATAN 反正切值': {
        description: `取反正切值，回傳值單位為度\n
example:\n
\t ATAN(1) // 45
`,
        snippet: 'ATAN(${1:value});',
    },
    'ATAN2 座標反正切值': {
        description: `座標反正切值，回傳值單位為度\n
example:\n
\t ATAN2(1, 2) // 26.56505
`,
        snippet: 'ATAN2(${1x}, ${2:y});',
    },
    'AXID 軸座標編號': {
        description: `取得軸座標編號，不存在時回傳#0，不需要加引號\n
example(假設在四軸情況):\n
\t AXID(X); // 1
\t AXID(Y2); // VACANT
`,
        snippet: 'AXID(${1:X});',
    },
    'CEIL 向上取整': {
        description: `向上取整\n
example:\n
\t CEIL(1.1) // 2
`,
        snippet: 'CEIL(${1:value});',
    },
    'FLOOR 向下取整': {
        description: `向下取整\n
example:\n
\t FLOOR(1.9) // 1
`,
        snippet: 'FLOOR(${1:value});',
    },
    'EXP 指數': {
        description: `自然底數的指數函數\n
example:\n
\t EXP(1) // e^1 = 2.718281828
\t EXP(0) // e^0 = 1
`,
        snippet: 'EXP(${1:value});',
    },
    'LN 自然對數': {
        description: `自然對數\n
example:\n
\t LN(1) // 0
`,
        snippet: 'LN(${1:value});',
    },
    'DBOPEN 開啟Cycle資料檔': {
        description: `開啟Cycle資料檔，檔名支援變數轉義\n
example:\n
\t DBOPEN("test.txt"); // 開啟 test.txt 檔案
`,
        snippet: 'DBOPEN(${1:file_name});',
    },
    'DBLOAD 讀取Cycle資料': {
        description: `讀取Cycle資料檔的第Index筆資料(0-based)\n
example:\n
\t DBLOAD(1); // 讀取第1筆資料`,
        snippet: 'DBLOAD(${1:Index});',
    },
    'DBSAVE 寫入Cycle資料': {
        description: `覆蓋寫入Cycle資料檔的第Index筆資料(0-based)\n
example:\n
\t DBSAVE(1); // 覆蓋寫入第1筆資料
`,
        snippet: 'DBSAVE(${1:Index});',
    },
    'DBNEW 新增Cycle資料檔': {
        description: `新增Cycle資料檔，檔名支援變數轉義\n
example:\n
\t DBNEW("test.txt"); // 新增 test.txt 檔案
`,
        snippet: 'DBNEW(${1:file_name});',
    },
    'DBCLOSE 關閉Cycle資料檔': {
        description: '關閉Cycle資料檔',
        snippet: 'DBCLOSE();',
    },
    'DBINSERT 插入Cycle資料': {
        description: `插入Cycle資料檔的第Index筆資料，原資料往後移\n
example:\n
\t DBINSERT(1); // 插入第1筆資料，原本的第1~n筆資料往後移
`,
        snippet: 'DBINSERT(${1:Index});',
    },
    'DBDELETE 刪除Cycle資料': {
        description: `刪除Cycle資料檔的第Index筆資料，原資料往前移\n
example:\n
\t DBDELETE(1); // 刪除第1筆資料，原本的第2~n筆資料往前移
`,
        snippet: 'DBDELETE(${1:Index});',
    },
    'DRAWHOLE 模擬繪製圓孔': {
        description: '依據刀具半徑及SETDRAW函數所定義之顏色，在目前位置畫一個圓',
        snippet: 'DRAWHOLE();',
    },
    'GETTRAPARG 取得Trap單節內的參數': {
        description: `在G66/G66.1生效期間，取得Trap單節內的參數而非G66/G66.1指令的參數\n
example:\n
\t GETTRAPARG(X1); // 取得 X1 參數的值`,
        snippet: 'GETTRAPARG(${1:X1});',
    },
    'PUSH 寫入STACK': {
        description: `將數值存入STACK\n
example:\n
\t PUSH(1); // 將1存入STACK
`,
        snippet: 'PUSH(${1:value});',
    },
    'POP 從STACK取出': {
        description: `從STACK最上層資料取出並回傳\n
example:\n
\t POP(); // 取出STACK最上層資料
`,
        snippet: 'POP();',
    },
    'POW 次方': {
        description: `計算指定數值的指定次方\n
example:\n
\t POW(2, 3); // 2^3 = 8
`,
        snippet: 'POW(${1:value}, ${2:power});',
    },
    'SQRT 開根號': {
        description: `對數值進行開根號運算\n
example:\n
\t SQRT(4); // 2`,
        snippet: 'SQRT(${1:value});',
    },
    'READDI 讀取 I bit 數值': {
        description: `讀取 I bit 數值\n
example:\n
\t READDI(1); // 讀取 I1 數值`,
        snippet: 'READDI(${1:index});',
    },
    'READDO 讀取 O bit 數值': {
        description: `讀取 O bit 數值\n
example:\n
\t READDO(1); // 讀取 O1 數值
`,
        snippet: 'READDO(${1:index});',
    },
    'READABIT 讀取 A bit 數值': {
        description: `讀取 A bit 數值\n
example:\n
\t READABIT(1); // 讀取 A1 數值
`,
        snippet: 'READABIT(${1:index});',
    },
    'READRREGBIT 讀取 R bit 數值': {
        description: `讀取 R bit 數值(帶小數點)\n
example:\n
\t READRREGBIT(40, 1); // 讀取 R40.1 數值
`,
        snippet: 'READRREGBIT(${1:index}, ${2:bit});',
    },
    'SCANTEXT ASCII轉字串': {
        description: `將 Global variable 的 ASCII轉碼回字串\n
example:\n
\t SCANTEXT(65); // 轉換 @65 變數儲存的值
`,
        snippet: 'SCANTEXT(${1:index});',
    },
    'SETDO 設定 O bit 開關': {
        description: `設定 O bit 開關\n
example:\n
\t SETDO(1, 1); // 設定 O1 開關為 ON
`,
        snippet: 'SETDO(${1:index}, ${2:1|0});',
    },
    'SETABIT 設定 A bit 開關': {
        description: `設定 A bit 開關\n
example:\n
\t SETABIT(1, 1); // 設定 A1 開關為 ON
`,
        snippet: 'SETABIT(${1:index}, ${2:1|0});',
    },
    'SETRREGBIT 設定 R bit 開關': {
        description: `設定 R bit 開關(帶小數點)\n
example:\n
\t SETRREGBIT(40, 1, 1); // 設定 R40.1 開關為 ON
`,
        snippet: 'SETRREGBIT(${1:index}, ${2:bit}, ${3:1|0});',
    },
    'SETDRAW 設定繪圖顏色': {
        description: `設定繪圖線條顏色、填滿顏色、模擬畫圓半徑\n
顏色定義為10進位BGR碼，與原本的RGB碼的bit位置有異\n
顏色範例：\n
\t 0(0x0): 黑色\n
\t 255(0xFF): 紅色\n
\t 65280(0xFF00): 綠色\n
\t 65535(0xFFFF): 黃色\n
\t 16711680(0xFF0000): 藍色\n
\t 16777215(0xFFFFFF): 白色\n

example:\n
\t SETDRAW(65280); // 設定繪圖線條顏色為綠色\n
\t SETDRAW(65280, 16711680, 5); // 設定繪圖線條顏色為綠色，填滿顏色為藍色，模擬畫圓半徑為5
`,
        snippet: 'SETDRAW(${1:line_color}${2:, ${3:fill_color}, ${4:radius}});',
    },
    'STDAX 數值依照軸向單位標準化': {
        description: `數值依照軸向單位標準化\n
example:\n
\t STDAX(100, X); // 0.1 when X軸標準單位為0.001
`,
        snippet: 'STDAX(${1:value}, ${2:X});',
    },
    'STKTOP 取得STACK[index]值': {
        description: `取得STACK[index]值(0-based)\n
example:\n
\t STKTOP(1); // 取得STACK[1]值
`,
        snippet: 'STKTOP[${1:0}];',
    },
    'SYSVAR 系統變數': {
        description: `取得特定軸群的系統變數(#1000+)\n
example:\n
\t SYSVAR(1, 1000); // 取得第1軸群的系統變數1000(#1000)
`,
        snippet: 'SYSVAR(${1:axis_group}, ${2:variable});',
    },
    'CHKMN 檢查機械廠代碼': {
        description: `檢查機械廠代碼，回傳1或0表示是否與輸入相符\n
example:\n
\t CHKMN("5566"); // 檢查機械廠代碼是否為 5566
`,
        snippet: 'CHKMN(${1:manufacturer_code});',
    },
    'CHKSN 檢查機台序號': {
        description: `檢查機台序號，回傳1或0表示是否與輸入相符\n
example:\n
\t CHKSN("M9A0001"); // 檢查機台序號是否為 M9A0001
`,
        snippet: 'CHKSN(${1:machine_sn});',
    },
    'CHKMT 檢查機台屬性': {
        description: `檢查機台屬性，回傳1或0表示是否與輸入相符\n
example:\n
\t CHKMT("MILL"); // 檢查機台屬性是否為 MILL
`,
        snippet: 'CHKMT(${1:machine_type});',
    },
    'CHKMI 檢查機台型號': {
        description: `檢查機台型號，回傳1或0表示是否與輸入相符\n
example:\n
\t CHKMI("22A"); // 檢查機台型號是否為 22A
`,
        snippet: 'CHKMI(${1:machine_model});',
    },
    'CHKINF 檢查機台資訊': {
        description: `檢查機台指定編號的資訊是否正確，回傳1或0表示是否與輸入相符\n
類別編號:\n
1. 機械廠代碼\n
2. 機台序號\n
3. 機台屬性\n
4. 機台型號\n
5. 專機代碼\n

example:\n
\t CHKINF(1, "5566"); // 檢查機械廠代碼是否為 5566
\t CHKINF(2, "M9A0001"); // 檢查機台序號是否為 M9A0001
`,
        snippet: 'CHKINF(${1|1,2,3,4,5|}, ${2:info});',
    },
    'SYSDATA 讀取系統診斷變數': {
        description: `讀取系統診斷變數(System Data)\n
example:\n
\t SYSDATA(7); // 讀取 D7 (當前記憶體使用量)
`,
        snippet: 'SYSDATA(${1:D_bit});',
    },
    'DRVDATA 讀取驅動器狀態變數(Pn值)': {
        description: `讀取驅動器狀態變數(Pn值)\n
example:\n
\t DRVDATA(1000, 3366); // 讀取第1軸的驅動器狀態變數3366(P-D26速度命令)
`,
        snippet: 'DRVDATA(${1:index}, ${2:number});',
    },
    'DRVDATA 以16進位讀取驅動器狀態變數(Pn值)': {
        description: `以3碼16進位讀取驅動器狀態變數(Pn值)\n
example:\n
\t DRVDATA(1003, "D61h"); // 讀取第1主軸的驅動器狀態變數0x0D61(P-D61內部溫度命令)
`,
        snippet: 'DRVDATA(${1:index}, ${2:"D61h"});',
    },
};
  
export {
    MacroStatements,
    MacroFunctions,
};