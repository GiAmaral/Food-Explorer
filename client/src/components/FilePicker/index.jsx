import { useRef } from "react";
import { Upload } from "@components/Icons";
import {
  Button,
  FilePickerInput,
  Image,
  ImageContainer,
  PreviewPlaceholder,
} from "./styles";

function FilePicker({ uploadedImage, ...props }) {
  const inputRef = useRef(null);

  const openFilePicker = () => {
    inputRef.current.click();
  };

  return (
    <>
      <FilePickerInput ref={inputRef} type="file" {...props} />

      {uploadedImage ? (
        <ImageContainer type="button" onClick={openFilePicker}>
          {typeof uploadedImage === "string" ? (
            <Image src={uploadedImage} alt="Imagem do prato selecionado" />
          ) : (
            <Image
              src={URL.createObjectURL(uploadedImage)}
              alt="Pré-visualização da imagem que acabou de ser enviada"
            />
          )}
        </ImageContainer>
      ) : (
        <PreviewPlaceholder>
          <p>Faça o upload de uma imagem</p>
          <Button type="button" onClick={openFilePicker}>
            <Upload />
            <span>Selecionar arquivo</span>
          </Button>
        </PreviewPlaceholder>
      )}
    </>
  );
}

export default FilePicker;
