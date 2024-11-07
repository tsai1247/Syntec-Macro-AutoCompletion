const macroTemplate = `%@MACRO\n// Coding here\n$0\n\nM30;`;
const subCodeTemplate = `%@MACRO\n// Status backup\n#50 := #1004; // G90/G91 mode\n#51 := #1000; // G00/G01 mode\n\n// Coding here\n$0\n
\n// Status restore\nG#50; // G90/G91 mode\nG#51; // G00/G01 mode\nM99;`;

const GTemplate = {
  'Macro Template': {
    label: 'GCode Template',
    description: subCodeTemplate,
    snippet: subCodeTemplate,
  }
};

const MTemplate = {
  'Macro Template': {
    label: 'MCode Template',
    description: subCodeTemplate,
    snippet: subCodeTemplate,
  },
};

const TTemplate = {
  'Macro Template': {
    label: 'TCode Template',
    description: subCodeTemplate,
    snippet: subCodeTemplate,
  },
};

const OTemplate = {
  'Macro Template': {
    label: 'Macro Template',
    description: macroTemplate,
    snippet: macroTemplate,
  },
};

export {
  GTemplate,
  MTemplate,
  TTemplate,
  OTemplate,
};