import express from 'express';
import axios from 'axios';

const router = express.Router();
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

router.get('/products', async (req, res) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE_URL}/products`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ message: error.message });
    }
});

export default router;