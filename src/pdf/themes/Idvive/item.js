import React from "react"

import { BillItemPropType } from "./types"

const BillItem = ({ qte, description, price, total }) => (
  <tr className="BillItem">
    <td className="text-center" style={{ padding: "5px", fontWeight: "bold" }}>{qte}</td>
    <td>{description}</td>
    <td className="text-right" style={{ padding: "5px" }}>{price}</td>
    <td className="text-right" style={{ padding: "5px" }}>{total}</td>
  </tr>
)

BillItem.propTypes = BillItemPropType

export default BillItem
