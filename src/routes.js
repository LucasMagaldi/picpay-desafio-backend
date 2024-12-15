export const routes = {
    '/': (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/plan'
        })
        res.end('PicPay test challenge')
    }
}