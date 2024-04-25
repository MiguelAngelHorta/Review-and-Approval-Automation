function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Automation')
    .addItem('Sheet Names Automation', 'SheetNamesAutomation')
    .addToUi();
}
