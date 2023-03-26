const { object, string } = require("yup");

const signUpSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
});

function validate(data) {
  return signUpSchema.validate(data, { abortEarly: true });
}

module.exports = { validate };
