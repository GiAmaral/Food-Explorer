import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";

import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import FormGroup from "@components/FormGroup";
import Input from "@components/Input";
import Label from "@components/Label";
import Link from "@components/Link";
import { useAuth } from "@hooks/auth";
import { useNotification } from "@hooks/notification";

import SignForm from "../components/SignForm";
import { validate } from "./validations";

function SignIn() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const action = useActionData();
  const { notify } = useNotification();
  const { storeUser } = useAuth();

  const errors = validate(formState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { user, token, error, message } = action ?? {};

    if (user && token) {
      storeUser({ user, token });
    }
    if (error) {
      notify("error", message);
    }
  }, [action]);

  return (
    <SignForm method="post" action="/sign-in">
      <SignForm.Title>Faça login</SignForm.Title>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={formState.email}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          name="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={formState.password}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormSubmitButton errors={errors}>Entrar</FormSubmitButton>
      <Link to="/sign-up">Criar uma conta</Link>
    </SignForm>
  );
}

export default SignIn;
