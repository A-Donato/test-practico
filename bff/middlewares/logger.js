const logger = (req, res, next) => {
    const message = `path: ${req.path} | params: ${JSON.stringify(req.params)} | query params: ${JSON.stringify(req.query)}`;
    console.log('Request:', message);
    next();
}

module.exports = logger;