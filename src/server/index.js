import generatePDF from "pdf"
import config from "../config"

import IdviveTheme from "pdf/themes/Idvive"

const client = {
  name: "Client",
  address: {
    street: "20 Bd blancarde",
    zipCode: "13001",
    city: "Marseille"
  }
}

const items = [
  { qte: 2, description: "Développeur Javascript", price: 500 }
]

generatePDF("201703011", items, client, config.company, "Virement", IdviveTheme).then(() => {
  console.log("PDF generated")
}).catch(err => {
  console.log("Error on PDF generation", err)
})
