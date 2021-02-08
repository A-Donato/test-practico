const getAuthor = require('./author');
const priceFormater = require('./priceFormater');

const formatItemSearchResult = (rawItemServerResponseData, rawItemDescriptionServerResponseData) => {
    const {id, title, price, currency_id, condition, sold_quantity} = rawItemServerResponseData;
    const itemPicture = rawItemServerResponseData.pictures[0].url;

    const description = rawItemDescriptionServerResponseData.plain_text;

    return {
        author: getAuthor(),
        item: {
            id: id,
            title: title,
            price: priceFormater(price, currency_id),
            picture: itemPicture,
            condition: condition,
            sold_quantity: sold_quantity,
            description: description
        }
    };
};

module.exports = formatItemSearchResult;
