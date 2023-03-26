import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";

import { useNotification } from "@hooks/notification";
import DishForm from "../components/DishForm";

function AddDish() {
  const { notify } = useNotification();
  const action = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (action?.success) {
      notify("success", "Prato adicionado com sucesso!");
      navigate("/");
    } else if (action?.error) {
      notify("error", action.message);
    }
  }, [action]);

  return (
    <DishForm method="post" action="/add-dish">
      <DishForm.Title>Adicionar prato</DishForm.Title>
    </DishForm>
  );
}

export default AddDish;
