import * as vscode from "vscode";
import { 
  GTemplate,
  MTemplate,
  TTemplate,
  OTemplate,
} from "./macroTemplate";
import { GCODE_COMMANDS } from "./gCodeCommands";
import { generateProvider } from "./completionProvider";

/**
 * 啟用插件
 * @param {vscode.ExtensionContext} context - 啟用插件背景數據
 */
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    generateProvider(
      '**/O[0-9][0-9][0-9][0-9]',
      OTemplate,
    )
  );
  
  context.subscriptions.push(
    generateProvider(
      '**/M[0-9][0-9][0-9][0-9]',
      MTemplate,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/T[0-9][0-9][0-9][0-9]',
      TTemplate,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{G[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}',
      GTemplate,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS, 
    )
  );
}

/**
 * 停用插件
 */
export function deactivate() {}
