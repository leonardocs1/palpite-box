import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1g6MW1mkgV_hmpTlf6cwjyVBzsD-Yk6LfKaElmFULABI')

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const mostrarPromocaoCell = sheet.getCell(1, 0)

    const textoCell = sheet.getCell(1, 1)
    console.log(textoCell.value)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))
  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}