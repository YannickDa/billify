import React from "react"
import { resolve } from "path"

import { BillPropType } from "./types"
import BillItem from "./item"

import logo from "./logo.png"

const BillIdvive = ({ 
  billnumber, date, client, company, items,
  paiementMethod, totalHT, tva, tauxTVA, totalTTC
}) => (
  <div className="BillIdvive">
    <div id="pageHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 text-center">
            <div style={{ display: "table", width: "100%" }}>
              <div style={{ display: "table-cell" }}>
                <img
                  src={`file://${resolve(__dirname, logo)}`}
                  style={{ width: "80px", marginTop: "10px" }} />
              </div>
              <div
                className="text-center"
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  color: "#F9A319",
                  fontSize: "12px"
                }}
              >
                Facture n°{billnumber}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-10 col-xs-offset-1 text-right"
            style={{
              color: "#CCC",
              fontSize: "8px"
            }}
          >
            {date}
          </div>
        </div>
        <div className="row">
          <hr style={{
            display: "block",
            border: 0,
            height: "1px",
            background: "#F9A319",
            width: "80%",
            margin: "10px auto"
          }} />
        </div>
      </div>
    </div>

    <div id="pageContent" style={{ margin: 0, padding: "0 10px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1" style={{ fontSize: "10px" }}>
            <strong style={{ color: "#F9A319", fontSize: "14px" }} className="text-uppercase">{company.name}</strong>
            <div>
              {company.address.street}, {company.address.zipCode} {company.address.city}
            </div>
            <div>
              <a href={company.website} style={{ color: "#F9A319" }}>{company.website}</a> | 
              &nbsp;<a href={company.email} style={{ color: "#F9A319" }}>{company.email}</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 text-right" style={{ fontSize: "10px", color: "#949494" }}>
            <strong style={{ color: "#7D7D7D", fontSize: "14px" }} className="text-uppercase">
              {client.name}
            </strong>
            <div>{client.address.street}, {client.address.zipCode} {client.address.city}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <table style={{ fontSize: "10px", width: "90%", margin: "10px auto 0", border: "solid white 2px", borderSpacing: "10px" }}>
              <thead>
                <tr style={{ background: "#F9A319", color: "#FFF" }}>
                  <th className="text-center" style={{ padding: "5px" }}>QTE</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Prix Unitaire HT</th>
                  <th className="text-center">Prix Total HT</th>
                </tr>
              </thead>
              <tbody>

                {items.map((i, index) =>
                  <BillItem {...i} key={index} />
                )}

                <tr><td colSpan={4}><div style={{ margin: "20px" }} /></td></tr>
                <tr>
                  <td colSpan={2} style={{ padding: "5px 0" }}>
                    <strong>IBAN:</strong> {company.iban}
                  </td>
                  <td style={{
                    textAlign: "right",
                    background: "#D9D9D9",
                    padding: "5px",
                    fontWeight: "bold",
                    borderRight: "1px solid white"
                  }}>
                    Mode de paiement
                  </td>
                  <td style={{ textAlign: "right", background: "#D9D9D9", padding: "5px" }}>
                    {paiementMethod}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: "5px 0" }}>
                    <strong>BIC:</strong> {company.bic}
                  </td>
                  <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                    Total HT
                  </td>
                  <td style={{ textAlign: "right", padding: "5px" }}>
                    {totalHT}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                    Taux TVA
                  </td>
                  <td style={{ textAlign: "right", padding: "5px" }}>
                    {tauxTVA}%
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                    TVA
                  </td>
                  <td style={{ textAlign: "right", padding: "5px" }}>
                    {tva}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} />
                  <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                    Total TTC
                  </td>
                  <td style={{ textAlign: "right", padding: "5px" }}>
                    {totalTTC}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div id="pageFooter" style={{ margin: 0, padding: "10px 10px 0" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12" style={{ fontSize: "10px", color: "#A7A7A7", position: "relative" }}>
            <div className="row">
              <div className="col-xs-8" style={{ fontSize: "8px" }}>
                {company.structure} au capital de {company.capital} - 
                SIRET : {company.siret} - Code APE : {company.ape} - 
                N° TVA: {company.tvaNumber} - {company.rcs} - 
                Paiement sous 30 jours - En cas de retard de paiement,
                une pénalité de 3 (trois) fois le taux d'intérêt légal
                sera appliquée, à laquelle s'ajoutera une indemnité forfaitaire
                pour frais de recouvrement de 40 €.
              </div>
            </div>

            <div style={{ position: "absolute", bottom: 0, right: "20px" }}>
              Page <strong>{"{{page}}"}</strong> sur <strong>{"{{pages}}"}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

BillIdvive.propTypes = BillPropType

export default BillIdvive
