import * as vscode from "vscode";
import { getFileName } from './common';

  const PATTERN = { pattern: '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}' };


  const macroTemplate = `@MACRO
// Coding here
$0`;

  const subCodeTemplate = `@MACRO
// Status backup
#50 := #1004; // G90/G91 mode
#51 := #1000; // G00/G01 mode

// Coding here
$0

// Status restore
G#50; // G90/G91 mode
G#51; // G00/G01 mode
M99;`;
  // 定義模板
  const templates = {
    O: {
      '%@MACRO': {
        label: 'Macro Template',
        detail: 'Macro Template',
        template: macroTemplate,
      }
    },

    G: {
      'GCode': {
        label: 'GCode Template',
        detail: 'GCode Template',
        template: subCodeTemplate,
      }
    },
    M: {
      'MCode': {
        label: 'MCode Template',
        detail: 'MCode Template',
        template: subCodeTemplate,
      }
    },
    T: {
      'TCode': {
        label: 'TCode Template',
        detail: 'TCode Template',
        template: subCodeTemplate,
      }
    },
  };

function getTemplatesForFile(fileName: string): any {
  if (/^[G]\d{4,6}$/i.test(fileName)) {
    return templates.G;
  } else if (/^O\d{4}$/i.test(fileName)) {
    return templates.O;
  }
  else if (/^M\d{4}$/i.test(fileName)) {
    return templates.M;
  }
  else if (/^T\d{4}$/i.test(fileName)) {
    return templates.T;
  }
  return {};
}

function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
  const fileName = getFileName(document.fileName);

  const availableTemplates = getTemplatesForFile(fileName);

  return Object.entries(availableTemplates).map(([key, value]: any) => {
    const completionItem = new vscode.CompletionItem(key, vscode.CompletionItemKind.Snippet);
    completionItem.detail = value.detail;
    
    // 使用 SnippetString 來支援游標位置
    const snippetString = new vscode.SnippetString(value.template);
    completionItem.insertText = snippetString;

    completionItem.documentation = new vscode.MarkdownString(value.template.replace('$0', ''));
    return completionItem;
  });
}

export {
  provideCompletionItems,
  PATTERN
};