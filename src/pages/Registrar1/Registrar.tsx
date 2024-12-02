import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Steps from "../../components/Steps";

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 540px;
  height: 440px;
  margin-top: 96px;
  margin-left: 429.5px;
  font-family: "Roboto", sans-serif;
  gap: 24px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 278px;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #323238;
  background-color: #202024;
  gap: 16px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 492px;
  height: 76px;
  gap: 4px;

  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #e1e1e6;
  }

  input {
    width: 492px;
    height: 46px;
    padding: 8px 12px;
    border: none;
    background-color: #121214;
    border-radius: 6px;
    color: #e1e1e6;
    font-family: "Roboto", sans-serif;
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
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

const Registrar: React.FC = () => {
  const navigate = useNavigate();

  // Estado para armazenar os valores dos inputs
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  // Estado para armazenar mensagens de erro
  const [errors, setErrors] = useState({
    username: "",
    fullName: "",
  });

  // Função de validação
  const validate = () => {
    let isValid = true;
    let errorMessages = {
      username: "",
      fullName: "",
    };

    if (!username) {
      errorMessages.username = "Nome de usuário é obrigatório!";
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/.test(username)) {
      errorMessages.username = "Nome de usuário inválido!";
      isValid = false;
    }

    if (!fullName) {
      errorMessages.fullName = "Nome completo é obrigatório!";
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleNavigate = () => {
    if (validate()) {
      navigate("/Registrar2");
    }
  };

  return (
    <Content>
      <Header
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
      />
      <Steps currentStep={1} totalSteps={4} />
      <Modal>
        <InputBox>
          <p>Nome de usuário</p>
          <input
            type="text"
            placeholder="cal.com/joseph"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span>{errors.username}</span>}
        </InputBox>
        <InputBox>
          <p>Nome completo</p>
          <input
            type="text"
            placeholder="Joseph Oliveira"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span>{errors.fullName}</span>}
        </InputBox>
        <NextButton onClick={handleNavigate}>
          Próximo passo
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </Modal>
    </Content>
  );
};

export default Registrar;
