const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1g6MW1mkgV_hmpTlf6cwjyVBzsD-Yk6LfKaElmFULABI')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
}
run()