import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Steps from "../../components/Steps";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 540px;
  height: 345px;
  margin-top: 96px;
  margin-left: 429.5px;
  font-family: "Roboto", sans-serif;
  gap: 24px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 180px;
  padding: 24px;
  gap: 16px;
  border-radius: 6px;
  border: 1px solid #323238;
  background-color: #202024;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #323238;
  background-color: #323238;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #e1e1e6;
    margin: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 113px;
    height: 38px;
    border-radius: 6px;
    border: 2px solid #00875f;
    background: transparent;
    color: #00b37e;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #00b37e;
      color: #ffffff;
    }
  }
`;

const Registrar2: React.FC = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/Registrar3");
  };

  return (
    <Container>
      <Header
        title="Conecte sua agenda!"
        description="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados."
      />
      <Steps currentStep={2} totalSteps={4} />
      <Modal>
        <InputBox>
          <p>Google Agenda</p>
          <button>
            Conectar
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </InputBox>
        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default Registrar2;
