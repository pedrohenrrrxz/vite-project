import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa"; // Importa o ícone do Google

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;  
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 154px;
  margin-bottom: 100px;
  margin-left: 120px;
  gap: 24px;

  h2 {
    font-size: 64px;
    color: #FFF;
    font-weight: bold;
  }

  p {
    width: 480px;
    font-size: 20px;
    line-height: 32px;
    font-size: 1.2rem;
    color: #555;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 220px;
    height: 46px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #DB4437;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    line-height: 22.4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ae534b;
    }

    svg {
      font-size: 18px; /* Define o tamanho do ícone */
    }
  }
`;

const RightSection = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    width: 827px;
    height: 442px;
    top: 229px;
    left: 696px;
    gap: 0px;
    border-radius: 8px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Registrar");
  };

  return (
    <Container>
      <LeftSection>
        <h2>Agendamento Descomplicado</h2>
        <p>
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </p>
        <button onClick={handleNavigate}>
          <FaGoogle />Criar Conta Google
        </button>
      </LeftSection>
      <RightSection>
        <img src="/imagem.png" alt="Ilustração representando organização" />
      </RightSection>
    </Container>
  );
};

export default Home;
