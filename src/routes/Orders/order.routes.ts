import express from "express";
import {
  CreateOrder,
  GetAllorder,
} from "../../controller/Orders/order.controller";
import {validate,authenticateToken} from '../../middleware/middleware'
import {createOrder} from "../../validations/index";
const OrderRouter = express.Router();

OrderRouter.post("/create",validate(createOrder),authenticateToken, CreateOrder);
OrderRouter.get("/get",authenticateToken, GetAllorder);

export default OrderRouter;
