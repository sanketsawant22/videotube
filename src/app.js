import express from 'express';
import cors from 'cors';


const app = express();

// cors : cross origin resource sharing
// it handles who should be allowed to access the database


// cors middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true, // allow sending cookies
    })
);

// common middleware
app.use(express.json({limit : "16kb"}));       // express middleware

// import routes
import router from './routes/healthcheck.routes.js';



// routes
app.use("/api/v1/healthcheck", router)

export {app};