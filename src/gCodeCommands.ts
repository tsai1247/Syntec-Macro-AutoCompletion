// G-code 指令對照表
const GCODE_COMMANDS_C_TYPE = {
    'G00 直線快速定位(C-Type)': {
        description: `G00 X#24 Y#25 Z#26\n
#24: X軸座標\n
#25: Y軸座標\n
#26: Z軸座標
`,
        snippet: 'G00 X${1:0.0} Y${2:0.0} Z${3:0.0}'
    },
    'G01 直線切削(C-Type)': {
        description: `G01 X#24 Y#25 Z#26 F#9\n
#24: X軸座標\n
#25: Y軸座標\n
#26: Z軸座標\n
#9: 進給速率(單位: mm/min，不可為0)
`,
        snippet: 'G01 X${1:0.0} Y${2:0.0} Z${3:0.0} F${4:100}'
    },
    'G02 圓弧切削(C-Type)': {
        label: 'G02 圓弧切削(順時針)',
        description: `G02 X#24 Y#25 Z#26 R#18 F#9\n
#24: X軸座標\n
#25: Y軸座標\n
#26: Z軸座標\n
#18: 圓弧半徑\n
#9: 進給速率(單位: mm/min，不可為0)
`,
        snippet: 'G02 X${1:0.0} Y${2:0.0} Z${3:0.0} R${4:10.0} F${5:100}'
    },
    'G90 絕對座標模式': {
        description: '模態G碼',
        snippet: 'G90'
    },
    'G91 相對座標模式': {
        description: '模態G碼',
        snippet: 'G91'
    },
    'X 軸座標': {
        description: '以當前模態移動X軸座標',
        snippet: 'X${1:0.0}'
    },
    'Y 軸座標': {
        description: '以當前模態移動Y軸座標',
        snippet: 'Y${1:0.0}'
    },
    'Z 軸座標': {
        description: '以當前模態移動Z軸座標',
        snippet: 'Z${1:0.0}'
    },
};

export {
    GCODE_COMMANDS_C_TYPE
};