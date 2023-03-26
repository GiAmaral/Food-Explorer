import { useEffect } from "react";
import { useActionData, useLoaderData, useNavigate } from "react-router-dom";

import { useNotification } from "@hooks/notification";
import api from "@services/api";

import DishForm from "../components/DishForm";

function EditDish() {
  const { dish } = useLoaderData();
  const { notify } = useNotification();
  const action = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (action?.success) {
      notify("success", "Prato editado com sucesso!");
      navigate("/");
    } else if (action?.error) {
      notify("error", action.message);
    }
  }, [action]);

  return (
    <DishForm
      initialValues={{
        ...dish,
        image: `${api.defaults.baseURL}/files/${dish.image}`,
      }}
      method="put"
      action={`/edit-dish/${dish.id}`}
    >
      <DishForm.Title>Editar prato</DishForm.Title>
    </DishForm>
  );
}

export default EditDish;
