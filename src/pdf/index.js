import React from "react"
import ReactDOMServer from "react-dom/server"
import pdf from "html-pdf"

import Template from "./component/Template"
import Idvive from "./component/Idvive"


export default billnumber => {
  return new Promise((success, error) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Template>
        <Idvive billnumber={billnumber} />
      </Template>
    )

    pdf.create(html, { header: { height: "90px" } }).toFile(`data/pdf/${billnumber}.pdf`, (err, res) => {
      if (err) {
        return error(err)
      }

      return success(res)
    })
  })
}
