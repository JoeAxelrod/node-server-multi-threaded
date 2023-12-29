import { describe, it } from 'node:test';
import assert from 'assert';
import axios from 'axios';
import os from "os";

const serverUrl = 'http://localhost:3000';
const numberOfRequests = 100;

const numCPUs = os.cpus().length;

describe('Server functionality tests', () => {

    it('should respond to multiple concurrent HTTP GET requests', async () => {
        const requests = Array.from({length: numberOfRequests}, () =>
            axios.get(serverUrl)
        );

        const responses = await Promise.all(requests);
        responses.forEach(response => {
            assert.strictEqual(response.status, 200);
            assert.ok(response.data.includes('Hello World from worker'));
        });
    });

    it('should balance load across workers', async () => {
        const workerResponses = new Set();
        const requests = Array.from({length: numberOfRequests}, () =>
            axios.get(serverUrl).then(response => workerResponses.add(response.data))
        );

        await Promise.all(requests);
        assert.ok(workerResponses.size === numCPUs);
    });
});
