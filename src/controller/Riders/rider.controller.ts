import express, { Request, Response } from "express";
import RiderService from "../../service/Riders/rider.service";
import { genericResponse, Message } from "../../response";

export const CreateRider = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rider = await RiderService.CreateRider(req.body);
    if (rider === Message.EMAIL_ALREADY_EXIST) {
      const response = genericResponse(
        400,
        false,
        Message.EMAIL_ALREADY_EXIST,
      );
      return res.status(response.status.code).json(response);
    }
    const response = genericResponse(200, true, Message.ORDER_CREATED, {
      rider,
    });
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = genericResponse(500, false, error.message);
    return res.status(response.status.code).json(response);
  }
};

export const GetAllrider = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rider = await RiderService.GetallRider();
    const response = genericResponse(200, true, Message.ORDER_CREATED, {
      rider,
    });
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = genericResponse(500, false, error.message);
    return res.status(response.status.code).json(response);
  }
};
