/**
 * Takes in two sheets.
 * Each sheet shares a column of data, to "join" on.
 * It iterates through the second sheet, searching the first sheet for the row with matching data.
 * On a match, it fills in data from the second sheet to the first in the designated column on the matching row.
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
  
  var otherGetRows = otherSheet.getRange(col2+"2:"+col2); // e.g. C2:C
  var otherGetValues = otherGetRows.getValues();
  
  for (var i = 0; i <= otherNumRows - 1; i++) {
    var otherJoinVal = otherJoinValues[i]; // 1 object array
    //Logger.log(otherJoinVal[0]);
    for (var j = 0; j <= origNumRows - 1; j++) {
      var origJoinVal = origJoinValues[j]; // 1 object array
      //Logger.log(origJoinVal[0]);
      if (origJoinVal[0] == otherJoinVal[0]) {
        var addDataCell = origSheet.getRange(col2+(j+2)+"");
        addDataCell.setValue(otherGetValues[i][0]); // get string from 1 object array
      }
    }
  }
};
