function clearData() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var trackerSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("*Tracker");

  for (var i = 1; i < sheets.length; i++) {
    var sheet = sheets[i];
    var sheetName = sheet.getName();

    sheet.getRange("C1").setValue("List as of XXX");

    // Clear content and formatting in cells B2 and B3
    sheet.getRange("B2").clearContent().clearFormat();
    sheet.getRange("B3").clearContent().clearFormat();
    sheet.getRange("C2").clearContent().clearFormat();
    sheet.getRange("C3").clearContent().clearFormat();
    sheet.getRange("A1").setValue("System");
    sheet.getRange("A2").setValue("Primary Reviewer");
    sheet.getRange("A3").setValue("Secondary Reviewer");
    sheet.getRange("B2:B3").setValue("[Name/Date]");
    sheet.getRange("B2:B3").setValue("[Name/Date]");
        // Add borders to cells B2 and B3
    sheet.getRange("A1").setBorder(true, true, true, true, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THIN);
    sheet.getRange("A2").setBorder(true, true, true, true, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THIN);
    sheet.getRange("A3").setBorder(true, true, true, true, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THIN);
    sheet.getRange("B2").setBorder(true, true, true, true, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THIN);
    sheet.getRange("B3").setBorder(true, true, true, true, null, null, "black", SpreadsheetApp.BorderStyle.SOLID_THIN);

    var lastRow = sheet.getLastRow();
    if (lastRow > 5) {
      sheet.getRange("A6:Z" + lastRow).clear({ contentsOnly: true, formatOnly: true });
    }
  }
}
