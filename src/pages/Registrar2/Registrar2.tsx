import React from "react";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from './Registrar2.module.css'; // Importando o CSS Module

const Registrar2: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleNavigate = () => {
        navigate("/Registrar3"); // Redireciona para a rota /Registrar3
    };

    return (
        <div className={styles.content2}> {/* Corrigido para usar as classes do CSS Module */}
            <div className={styles.header2}>
                <div className={styles.title2}>
                    <h2>Defina sua disponibilidade</h2>
                    <p>Por último, uma breve descrição e uma foto de perfil.</p>
                </div>
            </div>
            <div className={styles.steps2}>
                <div className={styles.text2}>
                    <h4>Passo 2 de 4</h4>
                </div>
                <div className={styles.quadrados2}>
                    <div className={styles.step2}></div>
                    <div className={styles.step2}></div>
                    <div className={styles.step2}></div>
                    <div className={`${styles.step2} ${styles.active}`}></div> {/* Corrigido para classNames dinâmicas */}
                </div>
            </div>

            <div className={styles.modal2}>
                <div className={styles.inputBox2}>
                    <p>Google Agenda</p>
                    <button>Conectar <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <button className={styles.nextButton2} onClick={handleNavigate}>
                    Próximo passo
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                
            </div>
        </div>
    );
};

export default Registrar2;
