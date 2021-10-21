import { createServer, IncomingMessage, ServerResponse } from 'http';  //need to install node types: npm i -D @types/node

export class Server {
    public startServer() {
        createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                console.log(`Got request from ${req.headers['user-agent']} for ${req.url}`);
                res.write('This is the response from the server');
                res.end();
            }
        ).listen(8080);
        console.log('Server started.')
    }
}