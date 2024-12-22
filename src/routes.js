import { userSchema } from "./schemas/user-schema.js";
import { CreateUserService } from "./services/user/user-services.js";

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
                try {
                    const userService = new CreateUserService()
                    const data = JSON.parse(body)
                    userSchema.parse(data)
                    userService.execute(data.type, data.name, data.email, data.CPF)
                    res.writeHead(201, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({
                        message: 'Resource Ok'
                    }));                    
                } catch (error) {
                    res.writeHead(400, {
                        'Content-Type': 'application/json'
                    })
                    res.end(
                        JSON.stringify({
                            error: 'Invalid request',
                            message: error
                        })
                    )
                }
            });
        }
    }
}