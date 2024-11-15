import * as vscode from "vscode";
import { 
  GTemplate,
  MTemplate,
  TTemplate,
  OTemplate,
} from "./macroTemplate";
import { 
  GCODE_COMMANDS_MILL, 
  GCODE_COMMANDS_LATHE_A,
  GCODE_COMMANDS_LATHE_C,
} from "./gCodeCommands";
import { MCODE_COMMANDS } from "./mCodeCommands";
import { OTHER_CODE_COMMANDS } from "./otherCodeCommands";
import { generateProvider } from "./completionProvider";
import { MacroFunctions, MacroStatements } from "./macroNativeTemplate";
import { globalVariables, localVariables } from "./variableTemplate";

/**
 * 啟用插件
 * @param {vscode.ExtensionContext} context - 啟用插件背景數據
 */
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    generateProvider(
      '**/O[0-9][0-9][0-9][0-9]',
      OTemplate,
      vscode.CompletionItemKind.Field,
    )
  );
  
  context.subscriptions.push(
    generateProvider(
      '**/M[0-9][0-9][0-9][0-9]',
      MTemplate,
      vscode.CompletionItemKind.Field,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/T[0-9][0-9][0-9][0-9]',
      TTemplate,
      vscode.CompletionItemKind.Field,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{G[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}',
      GTemplate,
      vscode.CompletionItemKind.Field,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS_LATHE_A, 
      vscode.CompletionItemKind.Event,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS_LATHE_C, 
      vscode.CompletionItemKind.Event,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS_MILL, 
      vscode.CompletionItemKind.Event,
    )
  );
  
  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MCODE_COMMANDS, 
      vscode.CompletionItemKind.Property,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      OTHER_CODE_COMMANDS, 
      vscode.CompletionItemKind.Property,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MacroStatements, 
      vscode.CompletionItemKind.Module,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MacroFunctions, 
      vscode.CompletionItemKind.Function,
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      localVariables, 
      vscode.CompletionItemKind.Value,
      '#'
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      globalVariables, 
      vscode.CompletionItemKind.Value,
      '@'
    )
  );
}

/**
 * 停用插件
 */
export function deactivate() {}
