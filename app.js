const http = require("http")
const fs = require('fs').promises

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(8080);
        console.log("[app] Server started.")
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

// const server = http.createServer((req,res) =>{
//     fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//     })
// })
// server.listen(8080);
// console.log("[app] Server started.")

// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
// };