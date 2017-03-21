import React from "react"
import ReactDOMServer from "react-dom/server"
import pdf from "html-pdf"
import Moment from "react-moment"

import { formatPrice, totalCalculation, tvaCalculation } from "../utils/prices"

import Template from "./component/Template"

export default (billnumber, items, client, company, paiementMethod, Theme) => {
  return new Promise((success, error) => {
    const date = <Moment format="dddd Do MMMM YYYY" locale="fr" />
    const totalHT = totalCalculation(items)
    const tva = tvaCalculation(totalHT, 20)

    const html = ReactDOMServer.renderToStaticMarkup(
      <Template>
        <Theme
          billnumber={billnumber}
          date={date}

          client={client}
          company={company}

          items={items.map(i => {
            i.total = formatPrice(i.price*i.qte)
            i.price = formatPrice(i.price)
            return i
          })}

          paiementMethod={paiementMethod}
          totalHT={formatPrice(totalHT)}
          tauxTVA={20}
          tva={formatPrice(tva)}
          totalTTC={formatPrice(totalHT + tva)}
        />
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
