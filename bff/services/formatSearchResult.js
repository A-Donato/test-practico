const priceFormater = require('./priceFormater');
const getAuthor = require('./author');

const formatSearchResponse = (rawSearchResponse) => {
    const results = rawSearchResponse.results;
    const availableFilters = rawSearchResponse.available_filters;

    const formatedItems = results.length > 0 ? parseResultsIntoItems(results) : [];
    const formatedCategories = availableFilters.length > 0 ? parseFiltersIntoCategories(availableFilters) : [];
    
    return {
        author: getAuthor(),
        categories: formatedCategories,
        items: formatedItems
    };
};

const parseResultsIntoItems = (results) => {
    const items = results.map(result => {
        return {
            id: result.id,
            title: result.title,
            price: priceFormater(result.price, result.currency_id),
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping
        };
    });

    return items;
};

const parseFiltersIntoCategories = (availableFilters) => {
    const categoryFilter = availableFilters.find(filter => filter.id === 'category');
    const categories = categoryFilter.values.map( category => category.name );

    return categories;
};

module.exports = formatSearchResponse;
