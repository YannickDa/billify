import React, { PureComponent, PropTypes } from "react"
import Moment from "react-moment"

const formatPrice = price => {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price)
}

const calculTotal = items => {
  return items.reduce((c, i) => (c + (i.price * i.qte)), 0)
}

const calculTva = (total, tva) => {
  return Math.ceil(((total*tva)/100)*100)/100
}

class BillItem extends PureComponent {
  static propTypes = {
    qte: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  render() {
    const { qte, description, price } = this.props

    return (
      <tr>
        <td className="text-center" style={{ padding: "5px" }}>{qte}</td>
        <td>{description}</td>
        <td className="text-right" style={{ padding: "5px" }}>{formatPrice(price)}</td>
        <td className="text-right" style={{ padding: "5px" }}>{formatPrice(price*qte)}</td>
      </tr>
    )
  }
}

export default class Idvive extends PureComponent {
  static propTypes = {
    billnumber: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientAddress: PropTypes.object.isRequired,
    companyName: PropTypes.string.isRequired,
    companyAddress: PropTypes.object.isRequired,
    companyWebsite: PropTypes.string.isRequired,
    companyEmail: PropTypes.string.isRequired,
    companyIban: PropTypes.string.isRequired,
    companyBic: PropTypes.string.isRequired
  }

  render() {
    const {
      billnumber,
      clientName,
      clientAddress,
      companyName,
      companyAddress,
      companyWebsite,
      companyEmail,
      companyIban,
      companyBic,
      items
    } = this.props

    const total = calculTotal(items)
    const tva = calculTva(total, 20)

    return (
      <div>
        <div id="pageHeader" style={{ margin: 0, padding: "10px 10px 0" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <div style={{ display: "table", width: "100%" }}>
                  <div style={{ display: "table-cell" }}>
                    <img
                      src="file:///home/yannick/workspace/billify/src/pdf/component/Idvive/logo.png"
                      style={{ width: "80px" }} />
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
                <Moment format="dddd Do MMMM YYYY" locale="fr" />
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
                <strong style={{ color: "#F9A319", fontSize: "14px" }} className="text-uppercase">{companyName}</strong>
                <div>
                  {companyAddress.street}, {companyAddress.zipCode} {companyAddress.city}
                </div>
                <div>
                  <a href={companyWebsite} style={{ color: "#F9A319" }}>{companyWebsite}</a> | 
                  &nbsp;<a href={companyEmail} style={{ color: "#F9A319" }}>{companyEmail}</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-right" style={{ fontSize: "10px", color: "#949494" }}>
                <strong style={{ color: "#7D7D7D", fontSize: "14px" }} className="text-uppercase">
                  {clientName}
                </strong>
                <div>{clientAddress.street}, {clientAddress.zipCode} {clientAddress.city}</div>
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
                    {items.map((i, index) => <BillItem {...i} key={index} />)}
                    <tr><td colSpan={4}><div style={{ margin: "20px" }} /></td></tr>
                    <tr>
                      <td colSpan={2} style={{ padding: "5px 0" }}>
                        <strong>IBAN:</strong> {companyIban}
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
                        Virement
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ padding: "5px 0" }}>
                        <strong>BIC:</strong> {companyBic}
                      </td>
                      <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                        Total HT
                      </td>
                      <td style={{ textAlign: "right", padding: "5px" }}>
                        {formatPrice(total)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} />
                      <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                        Taux TVA
                      </td>
                      <td style={{ textAlign: "right", padding: "5px" }}>
                        20%
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} />
                      <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                        TVA
                      </td>
                      <td style={{ textAlign: "right", padding: "5px" }}>
                        {formatPrice(tva)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} />
                      <td style={{ textAlign: "right", padding: "5px", fontWeight: "bold" }}>
                        Total TTC
                      </td>
                      <td style={{ textAlign: "right", padding: "5px" }}>
                        {formatPrice(total+tva)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
