const requiredQueryParams = ['q']

const itemsQueryValidator = (req, res, next) => {
    console.log('req', req.query)
    const requestQueryParams = Object.keys(req.query);
    const areRequiredParamsValid = validateParams(requestQueryParams, req);

    if ( areRequiredParamsValid ) {
        next();
    } else {
        res.status(400).send('Missing required query params');
    };
}

const validateParams = (requestQueryParams, req) => {
    const result = requiredQueryParams.every(requiredQueryParam => {
        return requestQueryParams.includes(requiredQueryParam) && req.query[requiredQueryParam] !== '';
    });

    return result;
}

module.exports = itemsQueryValidator;
