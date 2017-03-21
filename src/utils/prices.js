export const formatPrice = (price, locale = "fr-FR", currency = "EUR") => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(price)
}

export const totalCalculation = items => {
  return items.reduce((c, i) => (c + (i.price * i.qte)), 0)
}

export const tvaCalculation = (total, tva) => {
  return Math.ceil(((total*tva)/100)*100)/100
}
