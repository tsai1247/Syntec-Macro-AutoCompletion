// G-code 指令對照表
const GCODE_COMMANDS = {
    'G00 直線快速定位(A-Type)': {
        label: 'G00 直線快速定位(A-Type)',
        description: `G00 X{#24} Y{#25} Z{#26}\n
#24: X軸座標\n
#25: Y軸座標\n
#26: Z軸座標
`,
        snippet: 'G00 X${1:0} Y${2:0} Z${3:0}'
    },
    'G01 直線插補(A-Type)': {
        label: 'G01 直線插補(A-Type)',
        description: `G01 X{#24} Y{#25} Z{#26} F{#9}\n
#24: X軸座標\n
#25: Y軸座標\n
#26: Z軸座標\n
#9: 進給速率(單位: mm/min，不可為0)
`,
        snippet: 'G01 X${1:0} Y${2:0} Z${3:0} F${4:100}'
    },
    'G90 絕對座標模式': {
        label: 'G90 絕對座標模式',
        description: '模態G碼',
        snippet: 'G90'
    },
    'G91 相對座標模式': {
        label: 'G91 相對座標模式',
        description: '模態G碼',
        snippet: 'G91'
    }
};

export {
    GCODE_COMMANDS
};