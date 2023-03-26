import styled from "styled-components";

export const FilePickerInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  padding: 1.2rem 3.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`;

export const ImageContainer = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-radius: 1.6rem;
  border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
`;

export const Image = styled.img`
  aspect-ratio: 1/1;
  max-width: 100%;
  object-fit: cover;
  border-radius: 1.6rem;
`;

export const PreviewPlaceholder = styled.div`
  aspect-ratio: 1/1;
  max-width: 100%;
  border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.2rem;

  padding: 3.2rem;

  text-align: center;
`;
