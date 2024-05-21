import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { storeProducts } from "../controllers/Products.controller.js";
import { getAllProducts } from "../controllers/getallproducts.controller.js";

const Productrouter = Router();


Productrouter.route('/products/store').post(upload.single('image'), storeProducts);
Productrouter.route('/products').get(getAllProducts)


export {Productrouter}

