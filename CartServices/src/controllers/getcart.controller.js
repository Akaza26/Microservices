// getcartitems.controller.js

import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { OISchema } from '../models/Order.Models.js';
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from '../DB/constants.js';

const getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user's active cart
    const cart = await OISchema.findOne({ user: userId, status: 'NEW' }).populate('items.food', 'name price');
    console.log(req.params)

    if (!cart) {
      throw new ApiError(NOT_FOUND, 'Cart not found');
    }

    // Return cart items
    res.json(new ApiResponse(200, cart.items, 'Cart items retrieved successfully'));
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(error.statusCode || INTERNAL_SERVER_ERROR).json(new ApiResponse(error.statusCode || INTERNAL_SERVER_ERROR, null, error.message));
  }
};

export { getCartItems };
