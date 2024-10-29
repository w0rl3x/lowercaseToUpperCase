// extension.js

const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Регистрация команды
    let disposable = vscode.commands.registerCommand('extension.uppercaseSelection', function () {
        // Получаем активный редактор
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            // Получаем выделенный текст
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            // Преобразуем текст к верхнему регистру
            const upperText = text.toUpperCase();

            // Выполняем замену текста на верхний регистр
            editor.edit(editBuilder => {
                editBuilder.replace(selection, upperText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
