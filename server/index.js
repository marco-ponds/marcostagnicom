const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const next = require('next');

const server = express();
const PORT = process.env.PORT || 8080;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: '.' });
const handle = app.getRequestHandler();

// setting body parser middleware
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
server.use(bodyParser.json({ limit: '100mb', extended: true }));

const RESUME_PATH = './static/MarcoStagni_resume_latest.pdf';
const RESUME_FILENAME = 'MarcoStagni_resume.pdf';

const onListenComplete = function() {
    console.log(`> Ready on http://localhost:${PORT}`);
};

const onWildcard = function(req, res) {  return handle(req, res, req.url); };
const onResume = function(req, res) { return res.download(RESUME_PATH, RESUME_FILENAME); };

const onMail = function(req, res) {
    console.log(req.body);

    return 'hello';
};

const setupServer = function() {
    server.get('/resume', onResume);
    server.post('/email', onMail);
    server.get('*', onWildcard);

    // Running the server
    server.listen(PORT, onListenComplete);
};

// API routes
app
    .prepare()
    .then(setupServer);
