import express from 'express';
import axios from 'axios';

const router = express.Router();
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

router.post('/login', async (req, res) => {
    try {
        const response = await axios.post(`${USER_SERVICE_URL}/login`, req.body);
        res.json(response.data);
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        res.status(status).json({ message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const response = await axios.post(`${USER_SERVICE_URL}/register`, req.body);
        res.json(response.data);
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        res.status(status).json({ message });
    }
});

export default router;
