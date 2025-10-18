const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // trabalho que consome CPU por uns ms para simular carga
    const start = Date.now();
    while (Date.now() - start < 20) { /* busy work */ }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá da minha-loja\n');
});

server.listen(port, () => console.log(`Running on ${port}`));
