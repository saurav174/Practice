const express = require('express'),
    http = require('http');
const dishRouter = require('./routes/dishesRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use('/dishes',dishRouter);
app.use('/promotions',promotionRouter);
app.use('/leaders',leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});