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
    'G21 螺紋車削循環(C-Type)': {
        description: `G21 X(U)__ Z(W)__ H__ F__ [R__]\n
* X: X軸座標\n
* U: X軸增量座標\n
* Z: Z軸座標\n
* W: Z軸增量座標\n
* H: 多牙嘴個數\n
* F: 螺距\n
* R: 錐度差異量(選填)
`,
        snippet: 'G21 ${1|X,U|}${2:0.0} ${3|Z,W|}${4:0.0} H${5:4} F${6:1.0} ${7:R${8:0.0}};',
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=58575213',
    },
    'G90 絕對座標模式(C-Type)': {
        description: '模態G碼',
        snippet: 'G90;'
    },
    'G91 相對座標模式(C-Type)': {
        description: '模態G碼',
        snippet: 'G91;'
    },
    'G92 座標系設定(C-Type)': {
        description: `G92 X__ Z__\n
* X: X軸座標\n
* Z: Z軸座標
* 用於設定座標系統，不會移動機床
`,
        snippet: 'G92 X${1:0.0} Z${2:0.0};'
    },
    'G92 主軸最高轉速限制(C-Type)': {
        description: `G92 S__\n
* S: 主軸轉速(單位: rpm)
`,
        snippet: 'G92 S${1:1000};'
    },
    'G94 每分鐘進給(C-Type)': {
        description: `G94 F__\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)
`,
        snippet: 'G94 F${1:100};'
    },
    'G95 每轉進給(C-Type)': {
        description: `G95 F__\n
* F: 進給速率(單位: mm/rev or inch/rev，不可為0)
`,
        snippet: 'G95 F${1:0.5};'
    },
    'G96 恆定表面速度(C-Type)': {
        description: `G96 S__ M03/04\n
* S: 表面速度(單位: m/min)\n
* M03/04: 主軸轉向
`,
        snippet: 'G96 S${1:100} M${2|03,04|};'
    },
    'G97 恆定轉速(C-Type)': {
        description: `G97 S__ M03/04\n
* S: 主軸轉速(單位: rpm)\n
* M03/04: 主軸轉向
`,
        snippet: 'G97 S${1:1000} M${2|03,04|};'
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
    GCODE_COMMANDS_LATHE_C
};