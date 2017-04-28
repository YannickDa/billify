import PropTypes from "prop-types"

const AddressPropType = {
  street: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}
const ClientPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  address: PropTypes.shape(AddressPropType).isRequired,
}).isRequired
const CompanyPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  address: PropTypes.shape(AddressPropType).isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  iban: PropTypes.string.isRequired,
  bic: PropTypes.string.isRequired,
  structure: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  siret: PropTypes.string.isRequired,
  ape: PropTypes.string.isRequired,
  rcs: PropTypes.string.isRequired,
  tvaNumber: PropTypes.string.isRequired
}).isRequired
const ItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  qte: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
}))

export const BillPropType = {
  billnumber: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,

  client: ClientPropType,
  company: CompanyPropType,
  
  items: ItemsPropType,
  
  paiementMethod: PropTypes.string.isRequired,
  totalHT: PropTypes.string.isRequired,
  tva: PropTypes.string.isRequired,
  tauxTVA: PropTypes.number.isRequired,
  totalTTC: PropTypes.string.isRequired
}

export const BillItemPropType = {
  qte: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
}
