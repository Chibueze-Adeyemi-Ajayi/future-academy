const http = require("http");
const PORT = process.env.PORT | 5000;
const server = http.createServer((req, res) => {
    let param = req.url;
    console.log(param)
    res.write("<h1>Jilo developer</h1>");
    res.end()
});

server.listen(PORT);
