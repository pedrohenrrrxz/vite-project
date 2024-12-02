import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 540px;
  height: 90px;
  padding: 0 24px;

  .title {
    width: 492px;
    height: 90px;
    color: #fff;

    p {
      width: 492px;
      height: 52px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 25.6px;
      text-align: left;
      color: #a9a9b2;
    }
  }
`;

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <HeaderContainer>
      <div className="title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
