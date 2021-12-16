const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const game = fs.readFileSync('./index.html')
const shoot = fs.readFileSync('./shoot.html')
const tic = fs.readFileSync('./tic.html')
const snake = fs.readFileSync('./snake.html')
const ball = fs.readFileSync('./ball.html')

const server = http.createServer((req, res) => {

    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(game);
    }
    else if (url == '/shoot') {
        res.end(shoot);
    }
    else if (url == '/tic') {
        res.end(tic);
    }
    else if (url == '/snake') {
        res.end(snake);
    }
    else if (url == '/ball') {
        res.end(ball);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
