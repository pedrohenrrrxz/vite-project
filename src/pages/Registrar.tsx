import React from "react";
import "../styles/Registrar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Registrar: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleNavigate = () => {
      navigate("/Registrar2"); // Redireciona para a rota /Registro
    };


    return (
        <div className="content">
        <div className="header">
            <div className="title">
                <h2>Bem-vindo ao Ignite Call!</h2>
                <p>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </p>
            </div>
        </div>
        <div className="steps">
            <div className="text">
                <h4>Passo 1 de 4</h4>
            </div>
            <div className="quadrados">
                <div className="step active"></div>
                <div className="step"></div>
                <div className="step"></div>
                <div className="step"></div>
            </div>
        </div>
        <div className="modal">
            <div className="inputbox">
                <p>Nome de usuário</p>
                <input type="text" placeholder="cal.com/joseph" />
            </div>
            <div className="inputbox">
                <p>Nome completo</p>
                <input type="text" placeholder="Joseph Oliveira"/>
            </div>
            <div className="inputbox">
            <button onClick={handleNavigate}>
Próximo passo <FontAwesomeIcon icon={faArrowRight} />
</button>
            </div>
        </div>
    </div>
    );
};

export default Registrar;
