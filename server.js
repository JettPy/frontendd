'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    switch (request.url){
        case '/myjs.js':
            var myscript = fs.readFileSync('myjs.js');
            response.end(myscript);
        case '/img/bird.png':
            var media = fs.readFileSync('img/bird.png');
            response.end(media);
        case '/img/bg.png':
            var media = fs.readFileSync('img/bg.png');
            response.end(media);
        case '/img/fg.png':
            var media = fs.readFileSync('img/fg.png');
            response.end(media);
        case '/img/pipeUp.png':
            var media = fs.readFileSync('img/pipeUp.png');
            response.end(media);
        case '/img/pipeBottom.png':
            var media = fs.readFileSync('img/pipeBottom.png');
            response.end(media);
        case '/audio/fly.mp3':
            var media = fs.readFileSync('audio/fly.mp3');
            response.end(media);
        case '/audio/score.mp3':
            var media = fs.readFileSync('audio/score.mp3');
            response.end(media);
        default:
            var text = fs.readFileSync('index.html');
            response.end(text);
    }
});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('Server started!');