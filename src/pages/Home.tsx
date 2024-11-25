import React from "react";
import '../styles/Home.css'

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

                <button><i></i>Criar conta com Google</button>
            </div>
                <img src="/imagem.png" alt="" />
        


        </div>
    );
};

export default Home;