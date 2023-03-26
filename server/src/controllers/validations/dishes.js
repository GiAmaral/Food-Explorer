const { object, string, number, array } = require("yup");

const addDishSchema = object().shape({
  image: string().required(),
  name: string().required(),
  category: string()
    .test(
      "category",
      "Categoria inválida",
      (value) => value === "meal" || value === "dessert" || value === "drink"
    )
    .required(),
  ingredients: array().min(1).required(),
  price: number().moreThan(0).required(),
  description: string().required(),
});

function validate(data) {
  return addDishSchema.validate(data, { abortEarly: true });
}

module.exports = { validate };
