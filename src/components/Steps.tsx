import React from "react";
import styled from "styled-components";

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  height: 16px;
  border-radius: 2px;
  color: #a9a9b2;
  font-family: "Roboto", sans-serif;
  gap: 8px;

  .text {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 18px;
    gap: 8px;
  }

  .quadrados {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 6px;

    .step {
      flex: 1;
      height: 4px;
      background-color: #323238;
      border-radius: 2px;

      &.active {
        background-color: #ffffff;
      }
    }
  }
`;

interface StepsProps {
  currentStep: number;
  totalSteps: number;
}
const Steps: React.FC<StepsProps> = ({ currentStep, totalSteps }) => {
    return (
      <StepsContainer>
        <div className="text">
          <h4>Passo {currentStep} de {totalSteps}</h4>
        </div>
        <div className="quadrados">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`step ${index + 1 <= currentStep ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </StepsContainer>
    );
  };
  
export default Steps;
