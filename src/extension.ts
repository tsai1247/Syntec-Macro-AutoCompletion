import * as vscode from "vscode";
import { PATTERN, provideCompletionItems } from "./srcipts";

/**
 * 啟用插件
 * @param {vscode.ExtensionContext} context - 啟用插件背景數據
 */
export function activate(context: vscode.ExtensionContext) {
	// 註冊自動完成提供者
	const provider = vscode.languages.registerCompletionItemProvider(
    PATTERN,
    {
      provideCompletionItems
    },
	  '%' // 觸發字元
	);

  // 訂閱指令
  context.subscriptions.push(provider);
}

/**
 * 停用插件
 */
export function deactivate() {}
