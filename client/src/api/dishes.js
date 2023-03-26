import api from "@services/api";

function getSearchTermFromUrl(request) {
  const url = new URL(request.url);
  return url.searchParams.get("q");
}

function buildSearchTermQuery(searchTerm) {
  return searchTerm ? `/dishes?q=${searchTerm}` : "/dishes";
}

export async function fetchDishes({ request }) {
  const searchTerm = getSearchTermFromUrl(request);
  const url = buildSearchTermQuery(searchTerm);

  try {
    const response = await api.get(url);
    const dishes = response.data;

    return {
      meals: {
        dishes: dishes.filter((dish) => dish.category === "meal"),
        title: "Refeições",
      },
      desserts: {
        dishes: dishes.filter((dish) => dish.category === "dessert"),
        title: "Sobremesas",
      },
      drinks: {
        dishes: dishes.filter((dish) => dish.category === "drink"),
        title: "Bebidas",
      },
    };
  } catch (err) {
    throw new Response(err.message, { status: err.response.status });
  }
}

export async function fetchDish({ params }) {
  const { id } = params;

  try {
    const response = await api.get(`/dishes/${id}`);

    return {
      dish: response.data,
    };
  } catch (err) {
    throw new Response(err.message, { status: err.response.status });
  }
}

export async function createDish({ request }) {
  const formData = await request.formData();

  try {
    await api.post("/dishes", formData);

    return { success: true };
  } catch (err) {
    return { error: true, message: err.response.data.message };
  }
}

export async function updateDish({ request, params }) {
  const { id } = params;
  const formData = await request.formData();

  try {
    await api.put(`/dishes/${id}`, formData);

    return { success: true };
  } catch (err) {
    return { error: true, message: err.response.data.message };
  }
}
