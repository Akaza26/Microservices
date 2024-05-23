import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add the extended option here
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // Properly configure body-parser
app.use(bodyParser.json()); // Properly configure body-parser

import { userRouter } from './Routes/user.route.js';

app.use('/api/user', userRouter);

export { app };
