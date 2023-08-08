import Rider from "../../models/rider.model";
import { Riderdto } from "../../utils/interface/interfaces";
import { Message } from "../../response";
const CreateRider = async (data: Riderdto): Promise<boolean | Rider> => {
  try {
    const findrider = await Rider.findOne({where:{email:data.email}})
    if (findrider) {
        return Message.EMAIL_ALREADY_EXIST
    }
    const rider = await Rider.create(data);
    if (!rider) {
      return false;
    }
    return rider;
  } catch (error) {
    throw new Error(error);
  }
};

const GetallRider = async (data: Orderdto): Promise<boolean | Rider> => {
  try {
    const rider = await Rider.findAll();
    if (!rider) {
      return false;
    }
    return rider;
  } catch (error) {
    throw new Error(error);
  }
};
export default { CreateRider, GetallRider };
