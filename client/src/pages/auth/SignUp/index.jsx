import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";

import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import FormGroup from "@components/FormGroup";
import Label from "@components/Label";
import Input from "@components/Input";
import Link from "@components/Link";
import { useNotification } from "@hooks/notification";

import SignForm from "../components/SignForm";
import { validate } from "./validations";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const action = useActionData();
  const { notify } = useNotification();

  const errors = validate(values);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (action?.error) {
      notify("error", action.message);
    }
  }, [action]);

  return (
    <SignForm method="post" action="/sign-up">
      <SignForm.Title>Crie sua conta</SignForm.Title>
      <FormGroup>
        <Label htmlFor="name">Seu nome</Label>
        <Input
          name="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          value={values.name}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={values.email}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          name="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={values.password}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormSubmitButton type="submit" errors={errors}>
        Criar conta
      </FormSubmitButton>
      <Link to="/sign-in">Já tenho uma conta</Link>
    </SignForm>
  );
}

export default SignUp;
