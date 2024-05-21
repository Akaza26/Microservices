import express from 'express';
import cartRoutes from './cart.proxy.js';
import productRoutes from './product.proxy.js';
import userRoutes from './user.proxy.js';

const router = express.Router();

router.use('/cart', cartRoutes);
router.use('/product', productRoutes);
router.use('/user', userRoutes);

export default router;