import CompanyAuth from "../../models/companyauth.model";
import { CompanySignupdto, Logindto } from "../../utils/interface/interfaces";
import { Message } from "../../response";
import { comparePassword } from "../../utils/Authhelper";

const CompanySignup = async (
  data: CompanySignupdto
): Promise<boolean | CompanyAuth> => {
  try {
    const authdata = await CompanyAuth.create(data);
    if (!authdata) {
      return false;
    }
    return authdata;
  } catch (error) {
    throw new Error(error);
  }
};

const CompanyLogin = async (
  data: Logindto
): Promise<boolean | CompanyAuth | Message> => {
  console.log(data);
  try {
    const authdata = await CompanyAuth.findOne({ where: {email:data.email} });
    if (!authdata) {
      return Message.USER_NOT_EXIST;
    }
    const compare = await comparePassword(data.password, authdata.password);
    if (!compare) {
      return Message.WRONG_PASSWORD;
    }
    return authdata;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default { CompanyLogin, CompanySignup };
