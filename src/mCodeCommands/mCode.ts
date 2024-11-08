const MCODE_COMMANDS = {
    'M00 程式暫停': {
        description: '當CNC執行M00指令時，主軸會停止旋轉，進給會暫停，且切削油關閉，以方便操作者進行尺寸檢驗以及補正修正的工作',
        snippet: 'M00;'
    },
};

export {
    MCODE_COMMANDS
};