const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const express = require('express');
const app = express();
const moment = require('moment');
const passport = require('./config/passport');
const logger = require('./config/logger');
const promClient = require('prom-client');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// Live Reload configuration
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

// Fontend route
const FrontRouter = require('./routes/front');
const AuthRouter = require('./routes/auth');
const ApiRouter = require('./routes/api');

// Set ejs template engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(connectLiveReload())

app.use(bodyParser.urlencoded({ extended: false }));
app.locals.moment = moment;

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Database connection
const db = process.env.MONGO_URI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => logger.info(`Mongodb Connected`))
    .catch(error => logger.error(error));

// Prometheus metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
});

app.use(FrontRouter);
app.use('/auth', AuthRouter);
app.use('/api', ApiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});
