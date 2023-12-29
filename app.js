import http from 'http';
import express from 'express';
import cluster from 'cluster';
import os from 'os';

const app = express();
const numCPUs = os.cpus().length;
let httpServer;

console.log(`this machine has ${numCPUs} CPUs`);

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    httpServer = http.createServer(app);
    app.get('/', (req, res) => {
        res.send('Hello World from worker ' + process.pid);
    });
    await httpServer.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}

// npm install express cluster os http
// npm install -D axios
