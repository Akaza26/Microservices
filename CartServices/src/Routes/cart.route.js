import { addToCart, placeOrder, removeCartItem } from "../controllers/order.controller.js";
import { getCartItems } from "../controllers/getcart.controller.js";

const Cartrouter = Router();

Cartrouter.route('/order/add').post(authMiddleware, addToCart);
Cartrouter.route('/order/place').get(authMiddleware, placeOrder);
Cartrouter.route('/order/cart/:userId').get(getCartItems);
Cartrouter.route('order/remove').delete(removeCartItem);

export {Cartrouter}