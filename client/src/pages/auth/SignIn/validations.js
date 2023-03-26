import { object, string } from "yup";

const signInSchema = object().shape({
  email: string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export function validate(data) {
  try {
    signInSchema.validateSync(data, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.map((error) => error.message);

    return errors;
  }
}
