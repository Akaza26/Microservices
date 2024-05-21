import { Router } from "express";
import { addToCart, placeOrder, removeCartItem } from "../controllers/order.controller.js";
import { getCartItems } from "../controllers/getcart.controller.js";
import {authenticate} from "../middlewares/auth.middleware.js"

const Cartrouter = Router();

Cartrouter.route('/order/add').post(authenticate, addToCart);
Cartrouter.route('/order/place').get(authenticate, placeOrder);
Cartrouter.route('/order/cart/:userId').get(getCartItems);
Cartrouter.route('order/remove').delete(removeCartItem);

export {Cartrouter}