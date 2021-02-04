const formatSearchResponse = (rawSearchResponse) => {
    const results = rawSearchResponse.results;
    const availableFilters = rawSearchResponse.available_filters;

    const formatedItems = results.length > 0 ? parseResultsIntoItems(results) : [];
    const formatedCategories = availableFilters.length > 0 ? parseFiltersIntoCategories(availableFilters) : [];
    
    return {
        author: getAuthor(),
        categories: formatedCategories,
        items: formatedItems
    }
}

const parseResultsIntoItems = (results) => {
    const items = results.map(result => {
        return {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: Math.floor(result.price),
                decimals: getDecimalPart(result.price)
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping
        }
    });

    return items;
}

const parseFiltersIntoCategories = (availableFilters) => {
    const categoryFilter = availableFilters.find(filter => filter.id === 'category');
    const categories = categoryFilter.values.map( category => category.name );

    return categories;
}

const getDecimalPart = (price) => (price % 1).toFixed(2)*100;

const getAuthor = () => {
    return {
        name: 'Alexis',
        lastname: 'Donato'
    }
}

module.exports = formatSearchResponse;
