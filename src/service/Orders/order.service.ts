import Order from "../../models/order.model";
import { Orderdto } from "../../utils/interface/interfaces";

const CreateOrder = async (data: Orderdto): Promise<boolean | Order> => {
  try {
    const order = await Order.create(data);
    if (!order) {
      return false;
    }
    return order;
  } catch (error) {
    throw new Error(error);
  }
};

const Getallorder = async (data: Orderdto): Promise<boolean | Order> => {
  try {
    const order = await Order.findAll();
    if (!order) {
      return false;
    }
    return order;
  } catch (error) {
    throw new Error(error);
  }
};
export default { CreateOrder, Getallorder };
