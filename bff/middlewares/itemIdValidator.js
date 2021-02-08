const itemIdValidator = (req, res, next) => {
    const isItemIdPresent = Object.keys(req.params).includes('id');
    if ( isItemIdPresent ) {
        next();
    } else {
        res.status(400).send('Missing required ID param');
    };
};

module.exports = itemIdValidator;
