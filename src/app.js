import express from 'express';
import cors from 'cors';

const app = express();

// cors : cross origin resource sharing
// it handles who should be allowed to access the database

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true, // allow sending cookies
    })
);

app.use(express.json({limit : "16kb"}));       // express middleware



export {app};