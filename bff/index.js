const express = require('express');
var cors = require('cors');
const app = express();
const config = require('./config');
const items = require('./apis/routes/items');
const notFoundMiddleware = require('./middlewares/notFound')
const logger = require('./middlewares/logger');

app.use(cors());

app.use(logger);
app.use(config.prefix.base, items);
app.use(notFoundMiddleware);

app.listen(config.port, () => {
    console.log('-+'.repeat(14));
    console.log(`Express served on port ${config.port}`);
    console.log('-+'.repeat(14));
});
