import React, { useState } from "react";
import "./Registrar4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Registrar4: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/calendar");
  }

  const [profileImage, setProfileImage] = useState<string>("/fotodeperfil.png");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="content4">
      <div className="header4">
        <div className="title4">
          <h2>Defina sua disponibilidade</h2>
          <p>Por último, uma breve descrição e uma foto de perfil.</p>
        </div>
      </div>
      <div className="steps4">
        <div className="text4">
          <h4>Passo 4 de 4</h4>
        </div>
        <div className="quadrados4">
          <div className="step4"></div>
          <div className="step4"></div>
          <div className="step4"></div>
          <div className="step4 active"></div>
        </div>
      </div>

      
      <div className="modal4">
        <div className="inputbox column4">
          <p>Foto de Perfil</p>
          <div className="frame4">
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
        <div className="inputbox4">
          <label htmlFor="about4">Sobre você</label>
          <textarea id="about4"></textarea>
          <p>Fale um pouco sobre você. Isto será exibido em sua página pessoal.</p>
        </div>
        <button className="next-button4" onClick={handleNavigate}>
          Finalizar
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Registrar4;
