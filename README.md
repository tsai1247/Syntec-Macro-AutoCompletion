# VSCode Syntec Macro AutoCompletion

## 概觀

VSCode Syntec Macro AutoCompletion 是一個針對 Visual Studio Code 的簡單擴充功能，提供Macro檔案的自動補完功能。

## 安裝

1. 打開 Visual Studio Code。
2. 透過點擊側邊窗口的活動欄上的擴充標籤(EXTENSIONS)，或使用快捷鍵 `Ctrl + Shift + X` 進入擴充功能。
3. 點擊 `...` 按鈕，點擊 `install from VSIX`，選擇指定的 .vsix 檔案
4. 上傳檔案後完成安裝

## 使用方式

在指定檔案中輸入%，可以自動產生Macro模板補完候選清單

## 維護須知

1. git clone 下來此專案後，執行 `npm ci` 安裝套件
2. 若要執行打包，需全域安裝 `npm i -g vsce && npm install -g webpack && install -g typescript `
3. 執行編譯、打包、與安裝：`npm run build`
4. 專案手腳架：https://code.visualstudio.com/api/get-started/your-first-extension

## 資料夾結構

```plain
SyntecMacroAutoCompletion/
    ├─  .vscode/ ------------------------- vscode 配置
    ├─  assests/ ------------------------- 靜態資源
    ├─  dist/ ---------------------------- 打包編譯結果
    ├─  node_modules/ -------------------- npm 包
    ├─  src/ ----------------------------- 功能邏輯與實踐
    ├─  .eslintrc.json ------------------- eslint 規範配置
    ├─  .gitignore ----------------------- git 忽略配置
    ├─  CHANGELOG.md --------------------- 版本紀錄
    ├─  LICENSE.md ----------------------- 授權文件
    ├─  package-lock.json ---------------- npm 包版本鎖定
    ├─  package.json --------------------- npm 包配置
    ├─  README.md ------------------------ 插件說明文件
    ├─  tsconfig.json -------------------- typescript 配置
    └─  webpack.config.js ---------------- webpack 配置
```

## 許願清單

1. 偵測更多自動補完關鍵字

## 授權

此擴充功能根據 [MIT 授權](LICENSE.md)進行許可。
