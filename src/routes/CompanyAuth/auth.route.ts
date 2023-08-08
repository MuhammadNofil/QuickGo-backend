import express from "express";
import {
  CompanySignup,
  CompanyLogin,
} from "../../controller/CompanyAuth/companyauth.controller";
import {validate} from '../../middleware/middleware'
import {createUser} from "../../validations/index";
const AuthRouter = express.Router();

AuthRouter.post("/signup",validate(createUser),CompanySignup);
AuthRouter.post("/login", CompanyLogin);

export default AuthRouter;
