
const GCODE_COMMANDS_MILL = {

};

const GCODE_COMMANDS_LATHE_A = {

};

const GCODE_COMMANDS_LATHE_C = {
    'G00 直線快速定位(C-Type)': {
        description: `G00 X(U)__ Z(W)__ [ P1 F1=__ ]\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* P1: 是否指定進給速率\n
* F1: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: 'G00 ${1|X,U|}${2:0.0} ${3|Z,W|}${4:0.0} ${5:P1 F1=${6:100}};',
        ref: 'https://confluence.syntecclub.com/pages/viewpage.action?pageId=156844411',
    },
    'G01 直線切削(C-Type)': {
        description: `G01 X(U)__ Z(W)__ F__\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: 'G01 ${1|X,U|}${2:0.0} ${3|Z,W|}${4:0.0} F${5:100};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575145',
    },
    'G02 圓弧切削(順時針)(C-Type)': {
        label: 'G02 圓弧切削(順時針)',
        description: `G02 X(U)__ Z(W)__ R__ F__\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* R: 圓弧半徑\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: 'G02 ${1|X,U|}${2:0.0} ${3|Z,W|}${4:0.0} R${5:10.0} F${6:100};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575163',
    },
    'G03 圓弧切削(逆時針)(C-Type)': {
        label: 'G03 圓弧切削(逆時針)',
        description: `G02 X(U)__ Z(W)__ R__ F__\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* R: 圓弧半徑\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: 'G02 ${1|X,U|}${2:0.0} ${3|Z,W|}${4:0.0} R${5:10.0} F${6:100};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575163',
    },
    'G02/G03 圓弧切削(360°)(C-Type)': {
        label: 'G02/G03 圓弧切削(360°)',
        description: `G02 X(U)__ Z(W)__ I__ K__ F__\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* I: 圓心X增量座標\n
* K: 圓心Z增量座標\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: '${1|G02,G03|} ${2|X,U|}${3:0.0} ${4|Z,W|}${5:0.0} I${6:0.0} K${7:0.0} F${8:100};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575163',
    },
    'G04 暫停(毫秒)(C-Type)': {
        description: `G04 P__\n
* P: 暫停時間(單位: 毫秒)
`,
        snippet: 'G04 P${1:1000};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575167',
    },
    'G04 暫停(秒)(C-Type)': {
        description: `G04 X__\n
* X: 暫停時間(單位：秒)\n
    * 無小數點時，單位為毫秒
`,
        snippet: 'G04 X${1:1.0};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575167',
    },
    'G17 工作平面設定(X-Y)(C-Type)': {
        description: '模態G碼',
        snippet: 'G17;'
    },
    'G18 工作平面設定(X-Z)(C-Type)': {
        description: '模態G碼，預設',
        snippet: 'G18;'
    },
    'G19 工作平面設定(Y-Z)(C-Type)': {
        description: '模態G碼',
        snippet: 'G19;'
    },
    'G90 絕對座標模式': {
        description: '模態G碼',
        snippet: 'G90;'
    },
    'G91 相對座標模式': {
        description: '模態G碼',
        snippet: 'G91;'
    },
    'X 軸座標': {
        description: '以當前模態移動X軸座標',
        snippet: 'X${1:0.0};'
    },
    'Z 軸座標': {
        description: '以當前模態移動Z軸座標',
        snippet: 'Z${1:0.0};'
    },
};

export {
    GCODE_COMMANDS_MILL,
    GCODE_COMMANDS_LATHE_A,
    GCODE_COMMANDS_LATHE_C
};