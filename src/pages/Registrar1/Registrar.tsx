import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Registrar.module.css"; // Importando o CSS Module

const Registrar: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleNavigate = () => {
    navigate("/Registrar2"); // Redireciona para a rota /Registrar2
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Bem-vindo ao Ignite Call!</h2>
          <p>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </p>
        </div>
      </div>
      <div className={styles.steps}>
        <div className={styles.text}>
          <h4>Passo 1 de 4</h4>
        </div>
        <div className={styles.quadrados}>
          <div className={`${styles.step} ${styles.active}`}></div>
          <div className={styles.step}></div>
          <div className={styles.step}></div>
          <div className={styles.step}></div>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.inputbox}>
          <p>Nome de usuário</p>
          <input type="text" placeholder="cal.com/joseph" />
        </div>

        <div className={styles.inputbox}>
          <p>Nome completo</p>
          <input type="text" placeholder="Joseph Oliveira" />
        </div>

        <button className={styles.nextButton} onClick={handleNavigate}>
          Próximo passo
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Registrar;
