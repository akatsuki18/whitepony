function onOpen() {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('試合登録', [{
      name: '新規登録',
      functionName: 'createSpreadSheat'
    }, ]);
}

function createSpreadSheat() {
  var folderId = '1ziyXrL62pJSYPvH-STveSKO1-hpsrFNW';
  var spreadSheatId = '1tnPvTLf8eRBXoZNMaNZPmaZkJ8V-XggHmeWSKN9yhBc';

  // テンプレートファイル
  var templateFile = DriveApp.getFileById(spreadSheatId);
  // 出力フォルダ
  var OutputFolder = DriveApp.getFolderById(folderId);
  // 出力ファイル名
  var OutputFileName = 'game_' + Utilities.formatDate(new Date(), 'JST', 'yyyyMMddHHmm')

  templateFile.makeCopy(OutputFileName, OutputFolder);
}

function copySpreadSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.duplicateActiveSheet();
}

function _copyFromMaster() {

}