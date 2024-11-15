const MacroStatements = {
    'IF': {
        label: 'IF statement',
        description: 'IF statement',
        snippet: `IF \${1:[condition]} THEN
\t\$0\n
END_IF;`,
    },
    'IF-ELSE': {
        label: 'IF-ELSE statement',
        description: 'IF-ELSE statement',
        snippet: `IF \${1:[condition]} THEN
\t\$0\n
ELSE\n
\t\n
END_IF;`,
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
END_IF;`,
    },
    'FOR': {
        label: 'FOR loop',
        description: 'FOR loop',
        snippet: `FOR \${1:variable} := \${2:initial_value} TO \${3:final_value} DO
\t\$0\n
END_FOR;`,
    },
    'WHILE': {
        label: 'WHILE loop',
        description: 'WHILE loop',
        snippet: `WHILE \${1:[condition]} DO
\t\$0\n
END_WHILE;`,
    },
    'GOTO': {
        label: 'GOTO statement',
        description: 'GOTO statement，跳轉 N{label} 標籤;',
        snippet: 'GOTO ${1:label};',
    },
};

const MacroFunctions = {
    'ABS 取絕對值': {
        description: '取絕對值',
        snippet: 'ABS(${1:value});',
    },
    'SIGN 取符號': {
        description: '取符號，正數為1，負數為-1，零為0',
        snippet: 'SIGN(${1:value});',
    },
    'ROUND 四捨五入': {
        description: '四捨五入',
        snippet: 'ROUND(${1:value});',
    },
    'RANDOM 產生隨機數': {
        description: '產生隨機數，範圍為0~32767',
        snippet: 'RANDOM();',
    },
    'STD 數值標準化': {
        description: '數值依設定標準化，通常使用 #1600 設定值',
        snippet: 'STD(${1:value}, ${2:#1600});',
    },
    'WAIT 等待': {
        description: '系統停止預解，直到WAIT之前的指令執行完畢',
        snippet: 'WAIT();',
    },
    'OPEN 開啟檔案': {
        description: `開啟檔案，如檔案不存在則建立新檔案\n
可指定寫檔模式 "a" 或 "w"，預設為 "w"
`,
        snippet: 'OPEN(${1:file_name}${2:, ${3|"a","w"|}});',
    },
    'CLOSE 關閉檔案': {
        description: '關閉檔案',
        snippet: 'CLOSE(${1:file_name});',
    },
    'PRINT 寫入檔案': {
        description: `寫入檔案，應先使用 OPEN 開啟檔案\n
字串中的變數會被解譯，\n
以下符號請注意使用跳脫字元：
\t#、@、\\、p、"`,
        snippet: 'PRINT(${2:content});',
    },
    'ALARM 觸發警報': {
        description: `觸發警報\n
如果沒有建立字串檔，則需要附帶警報訊息\n
警報代碼範圍: 0 ~ 65535\n
字串長度限制: 19個全形字或39個半形字
`,
        snippet: 'ALARM(${1:alarm_code}, ${2:alarm_message});',
    },
    'MSG 觸發提示': {
        description: `觸發提示\n
如果沒有建立字串檔，則需要附帶提示訊息\n
提示代碼範圍: 0 ~ 65535\n
字串長度限制: 19個全形字或39個半形字
`,
        snippet: 'MSG(${1:message_code}, ${2:message});',
    },
    'GETARG 取得參數': {
        description: '取得參數',
        snippet: 'GETARG(${1:X1});',
    },
    'MAX 取最大值': {
        description: '取最大值',
        snippet: 'MAX(${1:value1}, ${2:value2});',
    },
    'MIN 取最小值': {
        description: '取最小值',
        snippet: 'MIN(${1:value1}, ${2:value2});',
    },
    'PARAM 讀取系統參數(Pr)': {
        description: '讀取系統參數(Pr)',
        snippet: 'PARAM(${1:Pr_number});',
    },
    'SLEEP 跳出迴圈': {
        description: '跳出迴圈',
        snippet: 'SLEEP();',
    },
    'STR2INT 字串轉整數': {
        description: '字串轉整數',
        snippet: 'STR2INT(${1:string});',
    },
    'SIN 取正弦值': {
        description: '取正弦值',
        snippet: 'SIN(${1:value});',
    },
    'COS 取餘弦值': {
        description: '取餘弦值',
        snippet: 'COS(${1:value});',
    },
    'TAN 取正切值': {
        description: '取正切值',
        snippet: 'TAN(${1:value});',
    },
    'ASIN 反正弦值': {
        description: '反正弦值',
        snippet: 'ASIN(${1:value});',
    },
    'ACOS 反餘弦值': {
        description: '反餘弦值',
        snippet: 'ACOS(${1:value});',
    },
    'ATAN 反正切值': {
        description: '反正切值',
        snippet: 'ATAN(${1:value});',
    },
    'ATAN2 座標反正切值': {
        description: '座標反正切值',
        snippet: 'ATAN2(${1x}, ${2:y});',
    },
    'AXIS 軸座標編號': {
        description: '軸座標編號，不存在時回傳#0',
        snippet: 'AXIS(${1:X});',
    },
    'CEIL 向上取整': {
        description: '向上取整',
        snippet: 'CEIL(${1:value});',
    },
    'FLOOR 向下取整': {
        description: '向下取整',
        snippet: 'FLOOR(${1:value});',
    },
    'EXP 指數': {
        description: '指數',
        snippet: 'EXP(${1:value});',
    },
    'LN 自然對數': {
        description: '自然對數',
        snippet: 'LN(${1:value});',
    },
    'DBOPEN 開啟Cycle資料檔': {
        description: '開啟Cycle資料檔，檔名支援變數轉義',
        snippet: 'DBOPEN(${1:file_name});',
    },
    'DBLOAD 讀取Cycle內資料': {
        description: '讀取Cycle資料檔的第Index筆資料',
        snippet: 'DBLOAD(${1:Index});',
    },
    'DBSAVE 寫入Cycle內資料': {
        description: '寫入Cycle資料檔的第Index筆資料，若有資料則覆蓋',
        snippet: 'DBSAVE(${1:Index});',
    },
    'DBNEW 新增Cycle資料檔': {
        description: '新增Cycle資料檔',
        snippet: 'DBNEW(${1:file_name});',
    },
    'DBCLOSE 關閉Cycle資料檔': {
        description: '關閉Cycle資料檔',
        snippet: 'DBCLOSE();',
    },
    'DBINSERT 插入Cycle內資料': {
        description: '插入Cycle資料檔的第Index筆資料，原資料往後移',
        snippet: 'DBINSERT(${1:Index});',
    },
    'DBDELETE 刪除Cycle內資料': {
        description: '刪除Cycle資料檔的第Index筆資料，原資料往前移',
        snippet: 'DBDELETE(${1:Index});',
    },
    'DRAWHOLE 模擬繪製圓孔': {
        description: '依據刀具半徑及SETDRAW函數所定義之顏色，在目前位置畫一個圓',
        snippet: 'DRAWHOLE();',
    },
    'GETTRAPARG 取得Trap單節內的參數': {
        description: '取得Trap單節內的參數',
        snippet: 'GETTRAPARG(${1:X1});',
    },
    'PUSH 寫入STACK': {
        description: '寫入STACK',
        snippet: 'PUSH(${1:value});',
    },
    'POP 從STACK取出': {
        description: '從STACK取出最上層資料',
        snippet: 'POP();',
    },
    'POW 次方': {
        description: '次方',
        snippet: 'POW(${1:value}, ${2:power});',
    },
    'SQRT 開根號': {
        description: '開根號',
        snippet: 'SQRT(${1:value});',
    },
    'READDI 讀取 I bit 數值': {
        description: '讀取 I bit 數值',
        snippet: 'READDI(${1:index});',
    },
    'READDO 讀取 O bit 數值': {
        description: '讀取  O bit 數值',
        snippet: 'READDO(${1:index});',
    },
    'READABIT 讀取 A bit 數值': {
        description: '讀取 A bit 數值',
        snippet: 'READABIT(${1:index});',
    },
    'READRREGBIT 讀取 R bit 數值': {
        description: '讀取 R bit 數值(帶小數點)',
        snippet: 'READRREGBIT(${1:index}, ${2:bit});',
    },
    'SCANTEXT ASCII轉字串': {
        description: 'ASCII轉字串，通常用在存在 @ bit 的字串',
        snippet: 'SCANTEXT(${1:ascii_number});',
    },
    'SETDO 設定 O bit 開關': {
        description: '設定 O bit 開關',
        snippet: 'SETDO(${1:index}, ${2:1|0});',
    },
    'SETABIT 設定 A bit 開關': {
        description: '設定 A bit 開關',
        snippet: 'SETABIT(${1:index}, ${2:1|0});',
    },
    'SETRREGBIT 設定 R bit 開關': {
        description: '設定 R bit 開關(帶小數點)',
        snippet: 'SETRREGBIT(${1:index}, ${2:bit}, ${3:1|0});',
    },
    'SETDRAW 設定繪圖顏色': {
        description: '設定繪圖線條顏色、填滿顏色、模擬畫圓半徑',
        snippet: 'SETDRAW(${1:line_color}${2:, ${3:fill_color}, ${4:radius}});',
    },
    'STDAX 數值依照軸向單位標準化': {
        description: '數值依照軸向單位標準化',
        snippet: 'STDAX(${1:value}, ${2:X});',
    },
    'STKTOP 取得STACK[index]值': {
        description: '取得STACK[index]值',
        snippet: 'STKTOP[${1:index}];',
    },
    'SYSVAR 系統變數': {
        description: '取得特定軸群的系統變數',
        snippet: 'SYSVAR(${1:axis_group}, ${2:variable});',
    },
    'CHKMN 檢查機械廠代碼': {
        description: '檢查機械廠代碼，回傳1或0表示是否與輸入相符',
        snippet: 'CHKMN(${1:manufacturer_code});',
    },
    'CHKSN 檢查機台序號': {
        description: '檢查機台序號，回傳1或0表示是否與輸入相符',
        snippet: 'CHKSN(${1:machine_sn});',
    },
    'CHKMT 檢查機台屬性': {
        description: '檢查機台屬性，回傳1或0表示是否與輸入相符',
        snippet: 'CHKMT(${1:machine_type});',
    },
    'CHKMI 檢查機台型號': {
        description: '檢查機台型號，回傳1或0表示是否與輸入相符',
        snippet: 'CHKMI(${1:machine_model});',
    },
    'CHKINF 檢查機台資訊': {
        description: `檢查機台指定編號的資訊是否正確，回傳1或0表示是否與輸入相符\n
類別編號:\n
1. 機械廠代碼\n
2. 機台序號\n
3. 機台屬性\n
4. 機台型號\n
5. 專機代碼
`,
        snippet: 'CHKINF(${1|1,2,3,4,5|}, ${2:info});',
    },
    'SYSDATA 讀取系統診斷變數': {
        description: '讀取系統診斷變數',
        snippet: 'SYSDATA(${1:D_bit});',
    },
    'DRVDATA 讀取驅動器狀態變數': {
        description: '讀取驅動器狀態變數',
        snippet: 'DRVDATA(${1:index}, ${2:number});',
    },
    'DRVDATA 以16進位讀取驅動器狀態變數': {
        description: '以16進位讀取驅動器狀態變數',
        snippet: 'DRVDATA(${1:index}, ${2:"D61h"});',
    },
};
  
export {
    MacroStatements,
    MacroFunctions,
};