const notFoundMiddleware = (req, res, next) => {
    res.status(404).send(`No API found for this route: ${req.path}`);
}

module.exports = notFoundMiddleware;
