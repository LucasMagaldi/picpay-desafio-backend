export const routes = {
    '/': (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('PicPay test challenge')
    },
    '/user': (req, res) => {
        if(req.method === 'POST') {
            let body = ''; 
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                console.log('Dados recebidos:', body);

                res.writeHead(201, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({
                    message: 'Resource Ok'
                }));
            });
        }
    }
}