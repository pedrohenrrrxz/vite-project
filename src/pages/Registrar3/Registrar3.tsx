import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Checkbox from "../../components/Checkbox";
import Steps from "../../components/Steps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 709px;
  margin-top: 96px;
  margin-left: 429.5px;
  padding: 24px;
  gap: 24px;
`;

const Modal = styled.div`
  width: 540px;
  height: 544px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background-color: #202024; /* Cor corrigida */
  border-radius: 6px;
  padding: 24px;
  border: 1px solid #323238;
`;

const Frame = styled.div`
  width: 492px;
  height: 434px;
  background-color: #29292e;
  border-radius: 6px;
  border: 1px solid #323238;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #323238;
`;

const WeekDay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    color: #fff;
  }
`;

const TimeRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 138px;
  height: 38px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #121214;
  border: 1px solid #29292e;
  color: #fff;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 14px;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 492px;
  height: 44px;
  padding: 10px 14px;
  gap: 8px;
  background-color: #00875f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00a372;
  }
`;

const Registrar3: React.FC = () => {
  const navigate = useNavigate();

  const [selectedDays, setSelectedDays] = useState<boolean[]>(
    new Array(7).fill(false)
  );
  const [timeRanges, setTimeRanges] = useState<
    { start: string; end: string }[]
  >(new Array(7).fill({ start: "", end: "" }));

  const weekDays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  const handleDayChange = (index: number) => {
    const updatedDays = [...selectedDays];
    updatedDays[index] = !updatedDays[index];
    setSelectedDays(updatedDays);
  };

  const handleTimeChange = (
    index: number,
    timeType: "start" | "end",
    value: string
  ) => {
    const updatedTimeRanges = [...timeRanges];
    updatedTimeRanges[index] = {
      ...updatedTimeRanges[index],
      [timeType]: value,
    };
    setTimeRanges(updatedTimeRanges);
  };

  const handleNavigate = () => {
    navigate("/Registrar4");
  };

  return (
    <Container>
      <Header
        title="Configuração Finalizada"
        description="Agora que você completou as etapas, finalize o processo para concluir seu cadastro."
      />

      <Steps currentStep={3} totalSteps={4} />

      <Modal>
        <Frame>
          {weekDays.map((day, index) => (
            <InputBox key={index}>
              <WeekDay>
                <Checkbox
                  checked={selectedDays[index]}
                  onChange={() => handleDayChange(index)}
                />
                <label>{day}</label>
              </WeekDay>
              <TimeRange>
                <Input
                  type="text"
                  placeholder="09:00h"
                  value={timeRanges[index].start}
                  onChange={(e) =>
                    handleTimeChange(index, "start", e.target.value)
                  }
                />
                <Input
                  type="text"
                  placeholder="17:00h"
                  value={timeRanges[index].end}
                  onChange={(e) =>
                    handleTimeChange(index, "end", e.target.value)
                  }
                />
              </TimeRange>
            </InputBox>
          ))}
        </Frame>
        <NextButton onClick={handleNavigate}>
          Próximo passo
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </Modal>
    </Container>
  );
};

export default Registrar3;
