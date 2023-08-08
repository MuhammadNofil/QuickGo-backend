import bcrypt from "bcryptjs";
import { CompanySignupdto } from "../interface/interfaces";
import jwt from "jsonwebtoken";
// password hash function
export const hashPassword = async (user: CompanySignupdto): Promise<void> => {
  try {
    user.password = await bcrypt.hash(user.password, 10);
  } catch (error) {
    throw new Error(error);
  }
};

// compare password
export const comparePassword = async (
  password: string,
  passwordToCompareWith: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, passwordToCompareWith);
  } catch (error) {
    throw new Error(error);
  }
};

// generate jwt
export const getJwt = (user : any) :Promise<string> =>  {
    return jwt.sign( user, "nacfuu-cafhcuhuacfnhacf-ulsdkoxf", {
    });
  };