const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const swagger = require('./api/utils/swagger.util')

const app = express();
const PORT = 3120;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use("/api", require('./routes/index'));

app.listen(PORT, () => {
	console.info(`Running Server at http://localhost:${PORT}`)
	// swagger(app, PORT);
})

