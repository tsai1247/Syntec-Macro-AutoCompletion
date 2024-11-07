import * as vscode from "vscode";

const generateProvider = (pattern: string, commands: Object, triggerSymbol: string = '') => vscode.languages.registerCompletionItemProvider(
    { pattern: pattern },
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            // 建立建議清單
            const completionItems: vscode.CompletionItem[] = [];
            
            for (const [code, details] of Object.entries(commands)) {
                const item = new vscode.CompletionItem(code, vscode.CompletionItemKind.Snippet);
                item.detail = details.label;
                item.insertText = new vscode.SnippetString(details.snippet);
                item.documentation = new vscode.MarkdownString(details.description);
                completionItems.push(item);
            }

            return completionItems;
        }
    },
    triggerSymbol // 額外觸發字元
);

export {
    generateProvider
};