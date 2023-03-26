import { useState } from "react";

import PageBackButton from "@components/PageBackButton";
import FilePicker from "@components/FilePicker";
import Label from "@components/Label";
import Input from "@components/Input";
import Select from "@components/Select";
import TextArea from "@components/TextArea";
import Tags from "@components/Tags";
import { convertCentsToBRL } from "@utils/formatNumber";

import {
  Container,
  Content,
  FirstInputRow,
  Form,
  FormGroup,
  PageTitle,
  SecondInputRow,
  SubmitButton,
  TextFields,
} from "./styles";
import { validate } from "./validations";

const CATEGORIES = [
  { value: "meal", label: "Refeição" },
  { value: "dessert", label: "Sobremesa" },
  { value: "drink", label: "Bebida" },
];

function DishFormTitle({ children }) {
  return <PageTitle>{children}</PageTitle>;
}

function DishForm({ initialValues, method, action, children }) {
  const [data, setData] = useState({
    image: initialValues?.image || null,
    name: initialValues?.name || "",
    category: initialValues?.category || "meal",
    ingredients: initialValues?.ingredients || [],
    ingredient: "",
    price: initialValues?.price || 0,
    description: initialValues?.description || "",
  });

  if ((!method, !action)) {
    throw new Error(
      "Você precisa fornecer a método (ex: post, put) e a action (ex: /add-dish, /edit-dish) do formulário."
    );
  }

  const errors = validate(data);

  const handleAddTag = () => {
    if (data.ingredient) {
      setData((prevState) => ({
        ...prevState,
        ingredients: Array.from(
          new Set([...prevState.ingredients, prevState.ingredient])
        ),
        ingredient: "",
      }));
    }
  };

  const handleDeleteTag = (tag) => {
    setData((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter((t) => t !== tag),
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  const update = (name, value) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;

    update(name, files[0]);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    const price = value.replace(/\D/g, "");

    update(name, price);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    update(name, value);
  };

  return (
    <Container>
      <PageBackButton />

      <Content>
        {children}

        <Form method={method} action={action} encType="multipart/form-data">
          <FormGroup>
            <Label htmlFor="image">Imagem do prato</Label>
            <FilePicker
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageChange}
              uploadedImage={data.image}
            />
          </FormGroup>

          <TextFields>
            <FirstInputRow>
              <FormGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Salada Ceasar"
                  value={data.name}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="category">Categoria</Label>
                <Select
                  name="category"
                  id="category"
                  value={data.category}
                  onChange={handleInputChange}
                >
                  {CATEGORIES.map((category) => (
                    <Select.Option key={category.value} value={category.value}>
                      {category.label}
                    </Select.Option>
                  ))}
                </Select>
              </FormGroup>
            </FirstInputRow>

            <SecondInputRow>
              <FormGroup>
                <Label htmlFor="ingredient">Ingredientes</Label>
                <Tags>
                  <Tags.List>
                    {data.ingredients.map((ingredient) => (
                      <Tags.Item
                        key={ingredient}
                        onDeleteTag={handleDeleteTag}
                        tag={ingredient}
                      >
                        {ingredient}
                      </Tags.Item>
                    ))}

                    <Tags.AddTag onAddTag={handleAddTag}>
                      <Tags.Input
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        placeholder="Adicionar"
                        onKeyDown={handleKeyDown}
                        value={data.ingredient}
                        onChange={handleInputChange}
                      />
                    </Tags.AddTag>
                  </Tags.List>
                </Tags>
                <input
                  type="hidden"
                  name="ingredients"
                  value={data.ingredients}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="price">Preço</Label>
                <Input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="R$ 18,90"
                  value={convertCentsToBRL(data.price)}
                  onChange={handlePriceChange}
                />
              </FormGroup>
            </SecondInputRow>

            <FormGroup>
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                name="description"
                id="description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                rows="7"
                value={data.description}
                onChange={handleInputChange}
              />
            </FormGroup>

            <SubmitButton errors={errors}>Salvar alterações</SubmitButton>
          </TextFields>
        </Form>
      </Content>
    </Container>
  );
}

DishForm.Title = DishFormTitle;

export default DishForm;
