import React, { PureComponent, PropTypes } from "react"
import Moment from "react-moment"

export default class Idvive extends PureComponent {
  static propTypes = {
    billnumber: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientAddress: PropTypes.object.isRequired,
    companyName: PropTypes.string.isRequired,
    companyAddress: PropTypes.object.isRequired,
    companyWebsite: PropTypes.string.isRequired,
    companyEmail: PropTypes.string.isRequired
  }

  render() {
    const {
      billnumber,
      clientName,
      clientAddress,
      companyName,
      companyAddress,
      companyWebsite,
      companyEmail
    } = this.props

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
                <div>{companyAddress.street}</div>
                <div>{companyAddress.zipCode} {companyAddress.city}</div>
                <div><a href={companyWebsite} style={{ color: "#F9A319" }}>{companyWebsite}</a></div>
                <div><a href={companyEmail} style={{ color: "#F9A319" }}>{companyEmail}</a></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-right" style={{ fontSize: "10px", color: "#949494" }}>
                <strong style={{ color: "#7D7D7D", fontSize: "14px" }} className="text-uppercase">
                  {clientName}
                </strong>
                <div>{clientAddress.street}</div>
                <div>{clientAddress.zipCode} {clientAddress.city}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <table style={{ fontSize: "10px", width: "90%", margin: "10px auto 0" }}>
                  <thead>
                    <tr style={{ background: "#F9A319", color: "#FFF" }}>
                      <th className="text-center" style={{ padding: "5px" }}>QTE</th>
                      <th className="text-center">Description</th>
                      <th className="text-center">Prix Unitaire HT</th>
                      <th className="text-center">Prix Total HT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center" style={{ padding: "5px" }}>2</td>
                      <td>Développeur Javascript</td>
                      <td className="text-right">500,00€</td>
                      <td className="text-right">1 000,00€</td>
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

