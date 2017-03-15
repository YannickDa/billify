import React, { PureComponent } from "react"

export default class Idvive extends PureComponent {
  render() {
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
                    Facture n°{this.props.billnumber}
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
                Mardi 01 Mars 2017
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
                <strong style={{ color: "#F9A319", fontSize: "14px" }}>IDVIVE</strong>
                <div>616 Chemin du Vallon des Gavots</div>
                <div>13400 Aubagne</div>
                <div><a href="http://www.idvive.com" style={{ color: "#F9A319" }}>http://www.idvive.com</a></div>
                <div><a href="mailto:yannick@idvive.com" style={{ color: "#F9A319" }}>yannick@idvive.com</a></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-right" style={{ fontSize: "10px", color: "#949494" }}>
                <strong style={{ color: "#7D7D7D", fontSize: "14px" }} className="text-uppercase">
                  Client
                </strong>
                <div>address</div>
                <div>zipcode city</div>
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

