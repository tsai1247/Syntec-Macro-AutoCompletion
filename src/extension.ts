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
      GCODE_COMMANDS_LATHE_A, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS_LATHE_C, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      GCODE_COMMANDS_MILL, 
    )
  );
  
  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MCODE_COMMANDS, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      OTHER_CODE_COMMANDS, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MacroStatements, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      MacroFunctions, 
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      localVariables, 
      '#'
    )
  );

  context.subscriptions.push(
    generateProvider(
      '**/{[GMT][0-9][0-9][0-9][0-9],O[0-9][0-9][0-9][0-9],G[0-9][0-9][0-9][0-9][0-9][0-9]}', 
      globalVariables, 
      '@'
    )
  );
}

/**
 * 停用插件
 */
export function deactivate() {}
