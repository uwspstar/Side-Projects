---
marp: true
theme: uncover
size: 16:9
paginate: true
header :"VsCode Extensions"
footer :"by Xing"
---

# VsCode Extensions

- vscode-icon
- BracketPair
- Code Spelling
- Run Code
- Live server
- vscode Intellicode
- Faker
- REST client

---

- draw.io integration
- Marp for vscode
- Highlight line
- Color Highlight
- Beautify
- Import cost
- Prettier
- material-icon
- NuGet Package Manager

---

### user setting

```json
{
  "code-runner.runInTerminal": true,
  "workbench.sideBar.location": "right",
  "window.zoomLevel": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "vsicons.projectDetection.autoReload": true,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "node_modules": true
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.fontFamily": "'Fira Code', 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  "editor.fontLigatures": true,
  "files.autoSave": "afterDelay",
  "workbench.colorCustomizations": {
    "terminal.foreground": "#00FD61",
    "terminal.background": "#383737"
  },
  "highlightLine.borderWidth": "1px",
  "highlightLine.borderColor": "yellow",
  "git.ignoreMissingGitWarning": true,
  "files.associations": {
    "*.json": "jsonc"
  },
  "rest-client.enableTelemetry": false,
  "debug.javascript.usePreview": true,
  "python.languageServer": "Microsoft",
  "prettier.singleQuote": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "java.home": "/Library/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "java.errors.incompleteClasspath.severity": "ignore",
  "python.jediEnabled": false,
  "java.configuration.checkProjectSettingsExclusions": false,
  "vsicons.dontShowNewVersionMessage": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "terminal.integrated.shell.osx": "/bin/bash",
  "terminal.integrated.inheritEnv": false,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "workbench.iconTheme": "material-icon-theme",
  "cSpell.userWords": [],
  "python.insidersChannel": "off",
  "telemetry.enableTelemetry": false,
  "telemetry.enableCrashReporter": false
  //"workbench.colorTheme": "Visual Studio 2019 Dark",
}
```
