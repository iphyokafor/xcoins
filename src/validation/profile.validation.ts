import Joi from "joi";

export const profileValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).trim().lowercase().required(),
    nickame: Joi.string().trim().min(3).max(50).lowercase().required(),
    email: Joi.string()
      .email()
      .regex(/\S+@\S+\.\S+/)
      .min(3)
      .max(100)
      .trim()
      .required(),
    capital: Joi.number(),
    divisa: Joi.string().trim(),
    prefered_cryptocurrency: Joi.string().trim(),
  });
  return Joi.validate(data, schema);
};
