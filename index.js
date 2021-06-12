const express = require('express');
const config = require('config');
const app = express();
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);
const logger = require('./middleware/logger');

const port = process.env.PORT || config.get('port');
app.listen(port, () => logger.info(`Listening on port ${port}...`));