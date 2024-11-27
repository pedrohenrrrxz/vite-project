import React from "react";



const Registrar : React.FC = () => {
    
    return (
       <div className="content">
            <div className="header">
                <div className="title">
                    <h2>Bem-vindo ao Ignite Call!</h2>
                    <p>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</p>
                </div>
            </div>
            <div className="steps">
                <div className="label">
                    <p>Passo 1 de 4</p>
                </div>
                <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
            </div>
            <div className="modal">
                <div className="inputbox">
                    <p>Nome de usuário</p>
                    <input type="text" />
                </div>
                <div className="inputbox">
                    <p>Nome completo</p>
                    <input type="text" />
                </div>
                <div className="inputbox">
                    <button>Próximo passo</button>
                    
                </div>

            </div>
       </div>
    );
};

export default Registrar;