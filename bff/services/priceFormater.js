const priceFormater = (price, currency) => {
    return {
        currency: currency,
        amount: Math.floor(price),
        decimals: getDecimalPart(price)
    };
}

const getDecimalPart = (price) => (price % 1).toFixed(2)*100;

module.exports = priceFormater;
