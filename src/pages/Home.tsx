import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleNavigate = () => {
    navigate("/Registro"); // Redireciona para a rota /Registro
  };

  return (
    <div className="container">
      <div className="left">
        <div className="frame">
          <div className="textos">
            <h2>Agendamento descomplicado</h2>
            <p>Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</p>
          </div>
        </div>

        <button onClick={handleNavigate}>
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          Criar conta com Google
        </button>
      </div>
      <img src="/imagem.png" alt="Ilustração de agendamento" />
    </div>
  );
};

export default Home;
