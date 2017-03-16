import generatePDF from "./pdf"
import config from "./config"

const client = {
  name: "Client",
  address: {
    street: "20 Bd blancarde",
    zipCode: "13001",
    city: "Marseille"
  }
}

generatePDF("201703011", client, config.company).then(() => {
  console.log("PDF generated")
}).catch(err => {
  console.log("Error on PDF generation", err)
})
