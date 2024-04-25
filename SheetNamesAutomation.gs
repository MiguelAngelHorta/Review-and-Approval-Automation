function SheetNamesAutomation() {
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var sheets = spreadsheet.getSheets();
var trackerSheet = spreadsheet.getSheetByName('*Tracker');
var trackerGid = trackerSheet.getSheetId();


// Sort sheets alphabetically
sheets.sort(function(a, b) {
var aName = a.getName().toLowerCase().replace(/\s/g, ''); // Convert to lowercase and remove spaces
var bName = b.getName().toLowerCase().replace(/\s/g, ''); // Convert to lowercase and remove spaces
return aName.localeCompare(bName);
});

for (var i = 1; i < sheets.length; i++) {
var sheet = sheets[i];
var sheetName = sheet.getName();
sheet.getRange("B1").setValue('=HYPERLINK("#gid=' + trackerGid + '", "' + sheetName + '")');
}

// Reorder sheets based on the sorted array
for (var i = 0; i < sheets.length; i++) {
spreadsheet.setActiveSheet(sheets[i]);
spreadsheet.moveActiveSheet(i + 1);
}

// Generate list of sheet names and URLs in cell A87 of '*Tracker' tab
var sheetList = [];
for (var i = 0; i < sheets.length; i++) {
var sheet = sheets[i];
var sheetName = sheet.getName();
var sheetUrl = spreadsheet.getUrl() + '#gid=' + sheet.getSheetId();
sheetList.push([sheetName, sheetUrl]);
}
trackerSheet.getRange("A87:B").clearContent(); // Clear existing content in column A and B starting from row 87
trackerSheet.getRange("A87:B" + (86 + sheetList.length)).setValues(sheetList); // Update sheet names and URLs
}
