const localVariables = {
    '#': {
        label: 'local variable',
        description: `local variable\n
建議使用 #27 ~ #400 之間的變數\n
其餘變數定義如下\n
#0: VACANT\n
A: #1\tB: #2\tC: #3\n
D: #7\tE: #8\tF: #9\n
H: #11\n
I: #4\tJ: #5\tK: #6\n
L: #12\n
M: #13\n
P: #16\tQ: #17\tR: #18\n
S: #19\tT: #20\t\n
U: #21\tV: #22\tW: #23\n
X: #24\tY: #25\tZ: #26\n
`,
        snippet: '${1:27};',
    },
};

const globalVariables = {
    '@': {
        label: 'global variable',
        description: `global variable\n
建議使用 @1 ~ @400 之間的變數\n
變數與R值對應如下\n
@0: VACANT\n
@401 ~ @655: R1 ~ R255\n
@10000 ~ @14095: R0 ~ R4095\n
@100000 ~ @165535: R0 ~ R65535\n
`,
        snippet: '${1:1};',
    },
};

export {
    localVariables,
    globalVariables,
};