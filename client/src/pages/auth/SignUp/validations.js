import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export function validate(data) {
  try {
    signUpSchema.validateSync(data, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.map((error) => error.message);

    return errors;
  }
}
