const express = require('express');
const axios = require('axios');
const config = require('../../config');
const route = express.Router();
const itemsQueryValidator = require('../../middlewares/itemsQueryValidator');
const formatSearchResponse = require('../../services/formatSearchResult');

const apiPrefix = config.prefix.items;

// Api para obtener un producto
route.get(`${apiPrefix}/:id`, (req, res) => {
    res.status(200).json({});
});

// Middlewares
route.use(apiPrefix, itemsQueryValidator);

// Api para hacer search de productos
route.get(apiPrefix, async (req, res) => {
    const clientQuery = req.query.q;
    const queryParams = {q: clientQuery, limit: 4};
    
    const serverResponse = await axios.get(config.endpoints.searchItems, {params: queryParams});
    
    const formatedResponse = formatSearchResponse(serverResponse.data);
    res.status(200).json(formatedResponse);

});

module.exports = route;