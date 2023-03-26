const { object, string } = require("yup");

const createSessionSchema = object().shape({
  email: string().email().required(),
  password: string().required().min(6),
});

function validate(data) {
  return createSessionSchema.validate(data, { abortEarly: true });
}

module.exports = { validate };
