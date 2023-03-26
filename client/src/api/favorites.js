import api from "@services/api";

export async function addToFavorites({ dishId, onError }) {
  try {
    await api.post(`/favorites/${dishId}`);
  } catch {
    onError();
  }
}

export async function removeFromFavorites({ dishId, onError }) {
  try {
    await api.delete(`/favorites/${dishId}`);
  } catch {
    onError();
  }
}
