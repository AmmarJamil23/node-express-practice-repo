import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.write("Islamabad");
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCOde = 404;

    console.log(req.url);
    console.log(req.method)

    res.writeHead(200, {'Content-Type' : 'text/html'  })
    res.end('<h1>Hello Again Times 2</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});