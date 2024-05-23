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
<<<<<<< HEAD
    }
});

router.post('/register', async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.post(`http://localhost:3005/user/register`, req.body);
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        res.status(status).json({ message });
=======
>>>>>>> af1e54e12e1d0b94a8e194c81c69d12492c8cf81
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
