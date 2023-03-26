import { array, mixed, number, object, string } from "yup";

const addDishSchema = object().shape({
  image: mixed().required("A imagem é obrigatória"),
  name: string().required("O nome é obrigatório"),
  category: string()
    .test(
      "category",
      "Categoria inválida",
      (value) => value === "meal" || value === "dessert" || value === "drink"
    )
    .required("A categoria é obrigatória"),
  ingredients: array()
    .min(1, "Adicione ao menos um ingrediente")
    .required("Os ingredientes são obrigatórios"),
  price: number()
    .moreThan(0, "O valor deve ser maior que zero")
    .required("O preço é obrigatório"),
  description: string().required("A descrição é obrigatória"),
});

export function validate(data) {
  try {
    addDishSchema.validateSync(data, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.map((error) => error.message);

    return errors;
  }
}
