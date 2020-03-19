const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes.js');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

/*The connection with mongo database is set to mongodb.net server. You can use this user but there is no guarantee that it's will work forever because it's a free account */
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-dl6hs.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
