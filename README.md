# Access-Reviews
Appscript to manage access reviews in google sheets

## SheetnamesAutomation
This Google Apps Script automates the organization of sheets in a Google Spreadsheet by sorting them alphabetically, creating hyperlinks to each sheet in a specified tracking sheet, and updating a list of sheet names and URLs in columns A and B of the '*Tracker' tab.

## Automation button
This Google Apps Script defines an "Automation" menu in a Google Sheets document that runs functions.

## Refresh Template
This Google Apps Script clears and resets specific content, formatting, and borders in designated cells of each sheet (excluding the first sheet) in the active spreadsheet. Additionally, it clears content and formatting in rows from 6 onwards.

## Approved Tracking
This Google Apps Script defines an onEdit trigger function that activates when a user edits a cell in the active spreadsheet. It specifically checks if the edited cell is in column B, and based on the selected option ('[Name/Date]' or 'Approved'), it either clears the corresponding cell in column C or populates it with the user's email and the current date.

## Excel Functions
This function returns all matches with user's email to HR information system =ARRAY_CONSTRAIN(ARRAYFORMULA(TEXTJOIN(", ", TRUE, IF(G6=HRIS!A:A, HRIS!B:B, ""))), 1, 1)

## Template
- [Google Sheets Assessment Template Link](https://docs.google.com/spreadsheets/d/1_Eh1CfM3u6rp6yIwQv3LfovP-4s-ji8Kjn_wWUtH4ns/edit?usp=sharing)

Tracker formulas:
=IF(AND(K14="No",N14="No"),"Need Both",IF(AND(K14="Yes",N14="No"),"Need SR",IF(AND(K14="No",N14="Yes"),"Need PR",IF(AND(K14="Yes",N14="Yes"),"Done"))))
=IF(App1!$B$2="[Name/Date]", "No", "Yes")
=IF(App1!$B$3="[Name/Date]", "No", "Yes")
