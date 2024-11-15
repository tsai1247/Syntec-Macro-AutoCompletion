import * as vscode from "vscode";

const generateProvider = (pattern: string, commands: Object, 
        kind: vscode.CompletionItemKind = vscode.CompletionItemKind.Snippet, 
        triggerSymbol: string = '') => vscode.languages.registerCompletionItemProvider(
    { pattern: pattern },
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            // 建立建議清單
            const completionItems: vscode.CompletionItem[] = [];
            
            for (const [code, details] of Object.entries(commands)) {
                const item = new vscode.CompletionItem(code, vscode.CompletionItemKind.Snippet);
                item.detail = details.label ?? code;
                item.insertText = new vscode.SnippetString(details.snippet);
                item.kind = kind;

                const refDetails = `ref: ${details.ref}`;

                // check last is ; or not
                const endOfMacro = details.snippet.slice(-1) === ';' ? '' : ';';
                item.documentation = new vscode.MarkdownString(
                    `${details.description}\n
${details.ref ? refDetails : ''}${endOfMacro}`
                );
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