import { redirect } from "react-router-dom";

import api from "@services/api";

export async function signIn({ request }) {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData.entries());

  try {
    const response = await api.post("/sessions", { email, password });
    const { token, user } = response.data;

    return { token, user };
  } catch (err) {
    if (err.response.data.message) {
      return { error: true, message: err.response.data.message };
    }

    return { error: true, message: "Erro ao realizar login" };
  }
}

export async function signUp({ request }) {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData.entries());

  try {
    await api.post("/users", { name, email, password });

    return redirect("/sign-in");
  } catch (err) {
    if (err.response.data.message) {
      return { error: true, message: err.response.data.message };
    }

    return { error: true, message: "Erro ao criar usuário" };
  }
}
