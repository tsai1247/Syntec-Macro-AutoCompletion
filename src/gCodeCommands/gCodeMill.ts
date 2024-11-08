const GCODE_COMMANDS_MILL = {
    'G76 精細塘孔循環': {
        description: `G76 X__ Y__ Z__ R__ Q__ P__ F__ K__\n
* X: 終點X軸座標\n
* Y: 終點Y軸座標\n
* Z: 終點Z軸座標\n
* R: R點鑽孔軸座標(鑽孔開始處)\n
* Q: 刀具在洞底的位移量\n
* P: 刀具在洞底的停留時間\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)\n
* K: 重複次數\n
* 多節執行，直到輸入G80指令
`,
        snippet: `G76 X\${1:0.0} Y\${2:0.0} Z\${3:0.0} R\${4:0.0} Q\${5:0.0} P\${6:0.0} F\${7:100} K\${8:1};
$0\n
G80;`,
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=17962025',
    },
    'G81 鑽孔循環': {
        description: `G81 X__ Y__ Z__ R__ F__ [F2=__] K__ Q__\n
* X: 終點起始X軸座標\n
* Y: 終點起始Y軸座標\n
* Z: 終點起始Z軸座標\n
* R: R點鑽孔軸座標(鑽孔開始處)\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)\n
* F2: 上拉進給速率(單位: mm/min or inch/min，不可為0)\n
    * 未設定時，F2=F\n
* K: 重複次數\n
* Q: 上拉距離(單位: mm or inch)
* 多節執行，直到輸入G80指令
`,
        snippet: `G81 X\${1:0.0} Y\${2:0.0} Z\${3:0.0} R\${4:0.0} F\${5:100} \${6:F2=\${7:100}} K\${8:1} Q\${9:0.0};
$0\n
G80;`,
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=17962022',
    },
    'G84 攻牙循環': {
        description: `G84 X__ Y__ Z__ R__ P__ Q__ [F__ or E__] K__\n
* X: 終點X軸座標\n
* Y: 終點Y軸座標\n
* Z: 終點Z軸座標\n
* R: R點鑽孔軸座標(鑽孔開始處)\n
* P: 刀具在洞底的停留時間\n
* Q: 刀具每次進給的深度\n
* F: 進給速率(單位: mm/min or inch/min，不可為0)\n
* E: 每英吋牙數\n
* K: 重複次數\n
`,
        snippet: `G84 X\${1:0.0} Y\${2:0.0} Z\${3:0.0} R\${4:0.0} P\${5:0.0} Q\${6:0.0} \${7:F=\${8:100}} K\${9:1};
$0\n
G80;`,
        ref: 'https://confluence.syntecclub.com/pages/releaseview.action?pageId=17962015',
    }
};

export {
    GCODE_COMMANDS_MILL
};