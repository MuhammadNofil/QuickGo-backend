import express, { Request, Response } from "express";
import CompanyAuthService from "../../service/companyAuth/companyauth.service";
import { genericResponse, Message } from "../../response";
import { getJwt } from "../../utils/Authhelper";

export const CompanySignup = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const signup = await CompanyAuthService.CompanySignup(req.body);
    if (!signup) {
      const response = genericResponse(
        400,
        false,
        Message.COMPANY_REGISTERED,
        null
      );
      return res.status(response.status.code).json(response);
    }
    const response = genericResponse(
      200,
      true,
      Message.COMPANY_REGISTERED,
      signup
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = genericResponse(500, false, error.message);
    return res.status(response.status.code).json(response);
  }
};

export const CompanyLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const login = await CompanyAuthService.CompanyLogin(req.body);
    if (login === Message.USER_NOT_EXIST) {
      const response = genericResponse(
        400,
        false,
        Message.USER_NOT_EXIST,
        null
      );
      return res.status(response.status.code).json(response);
    }
    if (login === Message.WRONG_PASSWORD) {
      const response = genericResponse(
        400,
        false,
        Message.WRONG_PASSWORD,
        null
      );
      return res.status(response.status.code).json(response);
    }
    const Jwt = await getJwt(login.id);
    const response = genericResponse(200, true, Message.LOGIN_SUCCESS, {
      login,
      Jwt,
    });
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = genericResponse(500, false, error.message);
    return res.status(response.status.code).json(response);
  }
};
