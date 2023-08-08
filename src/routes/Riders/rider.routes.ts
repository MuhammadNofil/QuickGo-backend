import express from "express";
import {
  CreateRider,
  GetAllrider,
} from "../../controller/Riders/rider.controller";
import {validate,authenticateToken} from '../../middleware/middleware'
import {createRider} from "../../validations/index";
const RiderRouter = express.Router();

RiderRouter.post("/create",validate(createRider),authenticateToken, CreateRider);
RiderRouter.get("/get",authenticateToken, GetAllrider);

export default RiderRouter;
