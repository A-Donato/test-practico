const config = {
    port: 5000,
    prefix: {
        base: '/api',
        items: '/items'
    },
    endpoints: {
        searchItems: 'https://api.mercadolibre.com/sites/MLA/search',
        item: 'https://api.mercadolibre.com/items/:id',
        itemDescription: 'https://api.mercadolibre.com/items/:id/description',
    }
}

module.exports = config;