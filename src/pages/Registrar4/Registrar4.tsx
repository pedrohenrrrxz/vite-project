import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Steps from "../../components/Steps";
import Header from "../../components/Header";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121214;
  padding: 20px;
  box-sizing: border-box;
`;

const Modal = styled.div`
  width: 540px;
  max-width: 100%;
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #29292e;
  background-color: #202024; /* Cor corrigida */
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #e1e1e6;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ImagePreview = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const ButtonSelect = styled.button`
  background-color: #29292e;
  color: #fff;
  border: 1px solid #323238;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3e3e42;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  background-color: #121214;
  color: #fff;
  border: 1px solid #29292e;
  border-radius: 6px;
  resize: none;
`;


const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 492px;
  height: 44px;
  padding: 10px 14px;
  gap: 8px;
  background-color: #00875f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00a372;
  }
`;

const RegistrationStep4: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [aboutYou, setAboutYou] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavigate = () => {
    navigate("/calendar");
  };

  return (
    <Container>
      <Header
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil."
      />
      <Steps currentStep={4} totalSteps={4} />

      <Modal>
        <Person>
          <Label htmlFor="imageInput">Foto de Perfil</Label>
          <Frame>
            <ImagePreview
              src={selectedImage || "/fotodeperfil.png"}
              alt="Foto de perfil"
            />
            <ButtonSelect
              onClick={() => document.getElementById("imageInput")?.click()}
            >
              Selecionar Foto
            </ButtonSelect>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </Frame>
        </Person>

        <TextArea>
          <Label htmlFor="aboutYou">Sobre você</Label>
          <Input
            id="aboutYou"
            placeholder="Fale um pouco sobre você..."
            value={aboutYou}
            onChange={(e) => setAboutYou(e.target.value)}
          />
        </TextArea>
        <NextButton onClick={handleNavigate}>
          Próximo passo
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </Modal>
    </Container>
  );
};

export default RegistrationStep4;
