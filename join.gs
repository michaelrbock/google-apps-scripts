/**
 * Retrieves all the rows in the active spreadsheet that contain data and logs the
 * values for each row.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function join() {

  var name = Browser.inputBox('Join Sheets',
      'Please enter the other sheet name to use' +
      ' (for example, "Sheet2"):',
      Browser.Buttons.OK_CANCEL);
  
  var col1 = Browser.inputBox('Join Sheets',
      'Please enter the column (must be on both sheets) to join on (i.e. where data is the same).' +
      ' (for example, "B"):',
      Browser.Buttons.OK_CANCEL);
  var col2 = Browser.inputBox('Join Sheets',
      'Please enter the column to grab data from the second sheet. Data is taken from col on second sheet and put into same col on active sheet.' +
      ' (for example, "C"):',
      Browser.Buttons.OK_CANCEL);
  
  var origSheet = SpreadsheetApp.getActiveSheet();
  var origJoinRows = origSheet.getRange(col1+"2:"+col1); // e.g. B2:B
  var origNumRows = origJoinRows.getNumRows();
  var origJoinValues = origJoinRows.getValues();
  
  var otherSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  var otherJoinRows = otherSheet.getRange(col1+"2:"+col1); // e.g. B2:B
  var otherNumRows = otherJoinRows.getNumRows();
  var otherJoinValues = otherJoinRows.getValues();
  
  var origNewRows = origSheet.getRange(col2+"2:"+col2); // e.g. C2:C
  var origNewValues = origNewRows.getValues();
  
  var otherGetRows = otherSheet.getRange(col2+"2:"+col2); // e.g. C2:C
  var otherGetValues = otherGetRows.getValues();
  
  for (var i = 0; i <= otherNumRows - 1; i++) {
    var otherJoinRow = otherJoinValues[i];
    Logger.log(otherJoinRow);
  }
};
