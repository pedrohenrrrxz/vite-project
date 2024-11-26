import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import '../styles/Home.css'

// quando voce faz isso, voce instala a dependencia, mas voce so utiliza se """""" importar, agora vai no tutorial do chatgpt


const Home : React.FC =() => {
    return (
        <div className="container">



            <div className="left">

                <div className="frame">
                        <div className="textos">
                            <h2>Agendamento descomplicado</h2>
                            <p>Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</p>
                        </div>
                </div>

                <button>
                <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                    Criar conta com Google
                </button>
            </div>
                <img src="/imagem.png" alt="" />
        


        </div>
    );
};

export default Home;