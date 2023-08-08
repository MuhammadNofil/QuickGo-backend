import { ApiResponse } from "../utils/interface/interfaces";

export const genericResponse = <T>(
  status: number,
  success: boolean,
  message: string,
  data?: T
): ApiResponse<T> => {
  return {
    status: {
      code: status,
      success: success,
      message: message,
    },
    data: data!,
  };
};

export const Message = {
  COMPANY_REGISTERED:"Company Registered successfully",
  SOMETHINGWENT_WRONG:'Something Went Wrong',
  USER_NOT_EXIST:"user does not exist",
  WRONG_PASSWORD: "Wrong password",
  LOGIN_SUCCESS:"Login SUccessfully",
  ORDER_CREATED:"Order created successfully",
  EMAIL_ALREADY_EXIST:"email address already exist"
};
