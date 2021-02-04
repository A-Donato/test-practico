const express = require('express');
const axios = require('axios');
const config = require('../../config');
const route = express.Router();
const errorMessages = require('../../assets/errorMessages');
const apiPrefix = config.prefix.items;

const itemsQueryValidator = require('../../middlewares/itemsQueryValidator');
const itemIdValidator = require('../../middlewares/itemIdValidator');
const formatSearchResponse = require('../../services/formatSearchResult');
const formatItemSearchResult = require('../../services/formatItemSearchResult');

// Middlewares for Item retrieve API
route.use(`${apiPrefix}/:id`, itemIdValidator);

// Item retrieve API
route.get(`${apiPrefix}/:id`, async (req, res) => {
    const itemId = req.params.id;
    const itemEndpoint = config.endpoints.item.replace(':id', itemId);
    const descriptionEndpoint = config.endpoints.itemDescription.replace(':id', itemId);

    try {
        const itemServerResponse = await axios.get(itemEndpoint);
        const itemDescriptionServerResponse = await axios.get(descriptionEndpoint);
        
        const formatedResponse = formatItemSearchResult(itemServerResponse.data, itemDescriptionServerResponse.data);
        res.status(200).json(formatedResponse);
    } catch (error) {
        const errorMessage = errorMessages.api.itemInformation.replace(':id', itemId);
        res.status(500).send(errorMessage);
    }
});

// Middlewares for Search API
route.use(apiPrefix, itemsQueryValidator);

// Search API
route.get(apiPrefix, async (req, res) => {
    const clientQuery = req.query.q;
    const queryParams = {q: clientQuery, limit: 4};
    
    try {
        const serverResponse = await axios.get(config.endpoints.searchItems, {params: queryParams});
        const formatedResponse = formatSearchResponse(serverResponse.data);
        
        res.status(200).json(formatedResponse);
    } catch (error) {
        res.status(500).send(errorMessages.generic);
    }
});

module.exports = route;
