const Joi = require('joi');
module.exports.validatePassword = async (req, res, next) => {
  const schema = Joi.object({
    newPassword: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required(),
  }).options({stripUnknown: true});

  await schema.validateAsync(req.body);
  next();
};
