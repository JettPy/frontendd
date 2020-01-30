'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url, request.status);
    if (request.url == '/myjs.js'){
        const myscript = fs.readFileSync('myjs.js','utf8');
        response.end(myscript);
    } else if (request.url == '/img/bird.png') {
        const media = fs.readFileSync('img/bird.png', 'utf8');
        response.end(media);
    } else if (request.url == '/img/bg.png') {
        const media = fs.readFileSync('img/bg.png', 'utf8');
        response.end(media);
    } else if (request.url == '/img/fg.png') {
        const media = fs.readFileSync('img/fg.png', 'utf8');
        response.end(media);
    } else if (request.url == '/img/pipeUp.png') {
        const media = fs.readFileSync('img/pipeUp.png', 'utf8');
        response.end(media);
    } else if (request.url == '/img/pipeBottom.png') {
        const media = fs.readFileSync('img/pipeBottom.png', 'utf8');
        response.end(media);
    } else if (request.url == '/audio/fly.mp3') {
        const media = fs.readFileSync('audio/fly.mp3', 'utf8');
        response.end(media);
    } else if (request.url == '/audio/score.mp3') {
        const media = fs.readFileSync('audio/score.mp3', 'utf8');
        response.end(media);
    } else {
        const text = fs.readFileSync('index.html','utf8');
        response.end(text);
    }
});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('Server started!');