const express = require('express');
const app = express();
const config = require('./config');
const items = require('./apis/routes/items');
const logger = require('./middlewares/logger');

app.use(logger);

app.use(config.prefix.base, items);

app.listen(config.port, () => {
    console.log('-+'.repeat(14));
    console.log(`Express served on port ${config.port}`);
    console.log('-+'.repeat(14));
});