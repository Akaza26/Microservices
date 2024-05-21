import express from 'express';
import dotenv from 'dotenv';
import routes from './Routes/index.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/api', routes);

export default app;