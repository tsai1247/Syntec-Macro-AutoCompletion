import * as vscode from "vscode";
import { getFileName } from './common';

  const PATTERN = { pattern: '**/{G[0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}' };

  // 定義模板
  const templates = {
    O: {
      '%@MACRO': {
        label: 'Macro Template',
        detail: 'Macro Template',
        template: `@MACRO
// Coding here
$0`
      }
    },

    G: {
      'GCode': {
        label: 'GCode Template',
        detail: 'GCode Template',
        template: `@MACRO
// Coding here
$0

M99;`
      }
    },

    
    };

function getTemplatesForFile(fileName: string): any {
  if (/^G\d{4,6}$/i.test(fileName)) {
    return templates.G;
  } else if (/^O\d{4}$/i.test(fileName)) {
    return templates.O;
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