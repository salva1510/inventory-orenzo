exports.handler = async (event) => {
  // Kukunin natin Shopee credentials galing Netlify ENV
  const partnerId = process.env.SHOPEE_PARTNER_ID;
  const partnerKey = process.env.SHOPEE_PARTNER_KEY;

  if (!partnerId ||!partnerKey) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        connected: false,
        message: "Wala pa Shopee keys. Lagay mo sa Netlify > Site settings > Environment variables",
        how: "SHOPEE_PARTNER_ID at SHOPEE_PARTNER_KEY"
      })
    }
  }

  // Dito na yung totoong API call pag may keys ka na
  // Example: fetch orders, products
  return {
    statusCode: 200,
    body: JSON.stringify({
      connected: true,
      message: "Connected na sa Shopee Open Platform!",
      partner_id: partnerId,
      next: "Punta ka sa https://open.shopeec.com para i-authorize shop mo"
    })
  }
}
