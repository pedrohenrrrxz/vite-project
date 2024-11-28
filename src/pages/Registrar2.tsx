import React from "react"
import "../styles/Registrar2.css"; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Registrar2: React.FC = () => {
    return (
        <div className="content">
        <div className="header">
            <div className="title">
                <h2>Conecte sua agenda!</h2>
                <p>
                Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
                </p>
            </div>
        </div>
        <div className="steps">
            <div className="text">
                <h4>Passo 2 de 4</h4>
            </div>
            <div className="quadrados">
                <div className="step"></div>
                <div className="step active"></div>
                <div className="step"></div>
                <div className="step"></div>
            </div>
        </div>
        <div className="modal">
           <div className="inputBox">
              <p>Google Agenda</p>
              <button>Conectar<FontAwesomeIcon icon={faArrowRight}/></button>
           </div>
        </div>
    </div>
    );
;}


export default Registrar2;