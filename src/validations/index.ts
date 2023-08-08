import Joi from "Joi";

export const createUser = Joi.object({
  companyname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const createOrder = Joi.object({
  address: Joi.string().required(),
  city: Joi.string().required(),
  postalcode: Joi.string().required(),
});

export const createRider = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
});
