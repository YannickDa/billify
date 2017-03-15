import generatePDF from "./pdf"

generatePDF("201703011").then(() => {
  console.log("PDF generated")
}).catch(err => {
  console.log("Error on PDF generation", err)
})
