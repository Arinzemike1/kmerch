const express = require('express');
const config = require('./config/config');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(helmet({
    frameguard: {
        action: 'sameorigin',
    },
    xssFilter: {
        setOnOldIE: true,
    },
    noSniff: true,
}));

app.disable('x-powered-by');

app.use(express.static(`${__dirname}/build`, { redirect: false }));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(config.web.port, () => {
    console.log('Server running on port: ', config.web.port);
});

module.exports = app;
