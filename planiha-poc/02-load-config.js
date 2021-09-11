const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1g6MW1mkgV_hmpTlf6cwjyVBzsD-Yk6LfKaElmFULABI')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)

  const sheet = doc.sheetsByIndex[2]
  await sheet.loadCells('A2:B2')
  console.log(sheet.title)
  const mostrarPromocaoCell = sheet.getCell(1, 0)
  console.log(mostrarPromocaoCell.value)

  const textoCell = sheet.getCell(1, 1)
  console.log(textoCell.value)
}
run()