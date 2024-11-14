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

};
  
export {
    MacroStatements,
    MacroFunctions,
};