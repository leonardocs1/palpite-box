const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1g6MW1mkgV_hmpTlf6cwjyVBzsD-Yk6LfKaElmFULABI')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: 'Tulio Faria',
      Email: 'contato@devpleno.com',
      Whatsapp: '35 999090011',
      Cupom: 'aaa111',
      Promo: 'asdfasdf'
    })
  } catch (err) {
    console.log(err)
  }
}
run()