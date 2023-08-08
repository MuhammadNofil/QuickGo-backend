import express, { Request, Response } from "express";
import OrderService from "../../service/Orders/order.service";
import { genericResponse, Message } from "../../response";

export const CreateOrder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const order = await OrderService.CreateOrder(req.body);
      const response = genericResponse(200, true, Message.ORDER_CREATED, {
        order,
      });
      return res.status(response.status.code).json(response);
    } catch (error) {
      console.log(error);
      const response = genericResponse(500, false, error.message);
      return res.status(response.status.code).json(response);
    }
  };

  export const GetAllorder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const order = await OrderService.Getallorder();
      const response = genericResponse(200, true, Message.ORDER_CREATED, {
        order,
      });
      return res.status(response.status.code).json(response);
    } catch (error) {
      console.log(error);
      const response = genericResponse(500, false, error.message);
      return res.status(response.status.code).json(response);
    }
  };
  