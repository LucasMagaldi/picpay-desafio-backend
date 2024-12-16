import http from  'http'
import { routes } from './routes.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const routerHandler = routes[req.url]
    if(routerHandler) 
        routerHandler(req, res)
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Router not founded');
    }
});

server.listen(port, hostname, async () => {
    try {
        console.log(`Server running at http://${hostname}:${port}/`); 
    } catch (error) {
        throw new Error(error)
    }
});