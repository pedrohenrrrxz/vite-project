import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  width: 492px;
  height: 46px;
  padding: 12px 191px;
  gap: 8px;
  border-radius: 6px 0px 0px 0px;
  background-color: #00875f;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    background-color: #6d967f;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
