import React, { useState } from "react";
import "./Registrar3.css";  
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Registrar3: React.FC = () => {
    const weekDays = [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo",
    ];

    const [selectedDays, setSelectedDays] = useState(
        weekDays.map(() => ({ checked: false, start: "", end: "" }))
    );
    const navigate = useNavigate();

    const handleCheckboxChange = (index: number) => {
        const updatedDays = [...selectedDays];
        updatedDays[index].checked = !updatedDays[index].checked;
        setSelectedDays(updatedDays);
    };

    const handleInputChange = (
        index: number,
        field: "start" | "end",
        value: string
    ) => {
        const updatedDays = [...selectedDays];
        updatedDays[index][field] = value;
        setSelectedDays(updatedDays);
    };

    const handleNavigate = () => {
        // Salvar dados no localStorage antes de navegar
        localStorage.setItem("selectedDays", JSON.stringify(selectedDays));
        navigate("/Registrar4");
    };

    return (
        <div className="content3">
            <div className="header3">
                <div className="title3">
                    <h2>Conecte sua agenda!</h2>
                    <p>
                        Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
                    </p>
                </div>
            </div>
            <div className="steps3">
                <div className="text3">
                    <h4>Passo 3 de 4</h4>
                </div>
                <div className="quadrados3">
                    <div className="step3"></div>
                    <div className="step3"></div>
                    <div className="step3 active"></div>
                    <div className="step3"></div>
                </div>
            </div>
            <div className="modal3">
                <div className="frame3">
                    {weekDays.map((day, index) => (
                        <div className="inputbox3" key={index}>
                            <div className="weekday3">
                                <input
                                    className="icone-checkbox3"
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    checked={selectedDays[index].checked}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <p className="day3">{day}</p>
                            </div>
                            <div className="timerange3">
                                <input
                                    className="inicio3"
                                    type="text"
                                    placeholder="Início"
                                    value={selectedDays[index].start}
                                    onChange={(e) =>
                                        handleInputChange(index, "start", e.target.value)
                                    }
                                />
                                <input
                                    className="fim3"
                                    type="text"
                                    placeholder="Fim"
                                    value={selectedDays[index].end}
                                    onChange={(e) =>
                                        handleInputChange(index, "end", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="next-button3" onClick={handleNavigate}>
                    Próximo passo
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Registrar3;
