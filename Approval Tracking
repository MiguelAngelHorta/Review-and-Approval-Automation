function onEdit(e) {
  if (!e || !e.range) {
    // Exit if the event object or edited range is undefined
    return;
  }

  var range = e.range;
  var sheet = range.getSheet();
  var sheetName = sheet.getName();

  // Check if the edited range is in column B
  if (range.getColumn() === 2) {
    var selectedOption = range.getValue();

    // Check if the selected option is '[Name/Date]'
    if (selectedOption === '[Name/Date]') {
      // Clear the corresponding cell in column C
      sheet.getRange(range.getRow(), 3).clearContent();
    } else if (selectedOption === 'Approved') {
      var userEmail = Session.getActiveUser().getEmail();
      var currentDate = new Date().toLocaleDateString();
      var combinedValue = userEmail + ' - ' + currentDate;

      // Save the combined value in the corresponding cell in column C
      sheet.getRange(range.getRow(), 3).setValue(combinedValue);
    }
  }
}
