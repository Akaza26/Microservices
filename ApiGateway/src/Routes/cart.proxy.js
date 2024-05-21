import express from 'express';
import axios from 'axios';

const router = express.Router();
const CART_SERVICE_URL = process.env.CART_SERVICE_URL;

router.get('/cart', async (req, res) => {
    try {
        const response = await axios.get(`${CART_SERVICE_URL}/cart`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ message: error.message });
    }
});

export default router;