import { useState } from "react";

import { addToFavorites, removeFromFavorites } from "@api/favorites";
import { Fav } from "@components/Icons";
import { useNotification } from "@hooks/notification";

import { FavButton } from "./styles";

function FavoriteButton({ dishId, liked }) {
  const { notify } = useNotification();

  const [isLiked, setIsLiked] = useState(liked);

  const like = async () => {
    setIsLiked(true);

    addToFavorites({
      dishId,
      onError: () => {
        setIsLiked(false);
        notify("error", "Erro ao adicionar aos favoritos");
      },
    });
  };

  const dislike = async () => {
    setIsLiked(false);

    removeFromFavorites({
      dishId,
      onError: () => {
        setIsLiked(true);
        notify("error", "Erro ao remover dos favoritos");
      },
    });
  };

  const handleLikeClick = () => {
    if (isLiked) {
      dislike();
    } else {
      like();
    }
  };

  return (
    <FavButton isLiked={isLiked} onClick={handleLikeClick}>
      <Fav />
    </FavButton>
  );
}

export default FavoriteButton;
