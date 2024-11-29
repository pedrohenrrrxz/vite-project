import React, { useState } from "react";
import "../styles/Registrar4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Registrar4: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>("/fotodeperfil.png");

  // Função para tratar a troca de imagem
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL); // Atualiza a imagem com a URL gerada
    }
  };

  return (
    <div className="content">
      <div className="header">
        <div className="title">
          <h2>Defina sua disponibilidade</h2>
          <p>Por último, uma breve descrição e uma foto de perfil.</p>
        </div>
      </div>
      <div className="steps">
        <div className="text">
          <h4>Passo 4 de 4</h4>
        </div>
        <div className="quadrados">
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step active"></div>
        </div>
      </div>
      <div className="modal">
        <div className="inputbox column">
          <p>Foto de Perfil</p>
          <div className="frame">
            <img src={profileImage} alt="Foto selecionada" />
            <button>
              <label htmlFor="file-upload">Selecionar Foto</label>
            </button>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="inputbox">
          <label htmlFor="about">Sobre você</label>
          <textarea id="about"></textarea>
          <p>Fale um pouco sobre você. Isto será exibido em sua página pessoal.</p>
        </div>
        <button className="next-button">
          Finalizar
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Registrar4;
