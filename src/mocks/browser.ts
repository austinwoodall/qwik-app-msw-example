import {setupWorker} from "msw/browser";
import {http} from "msw";


export const worker = setupWorker(
    http.get('/data', (req, res, ctx) => {
        return res();
    })
);

