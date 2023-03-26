import styled from "styled-components";

import IconButton from "@components/Buttons/IconButton";

export const Container = styled.div`
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`;

export const TagsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const TagItem = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

  padding: 0.8rem 1rem 0.8rem 1.6rem;
  border-radius: 0.8rem;
`;

export const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    height: 0.8rem;
    transform: rotate(45deg);
  }
`;

export const AddTagContainer = styled.li`
  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.8rem;
  padding: 0.8rem 1rem 0.8rem 1.6rem;
`;

export const Input = styled.input`
  all: unset;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  max-width: 10ch;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const AddButton = styled(IconButton)`
  padding: 0;

  svg {
    height: 0.8rem;
  }
`;
