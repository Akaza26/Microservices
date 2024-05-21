import express from 'express';
import axios from 'axios';

const router = express.Router();
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

router.post('/login', async (req, res) => {
    try {
        const response = await axios.post(`${USER_SERVICE_URL}/login`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ message: error.message });
    }
});

export default router;