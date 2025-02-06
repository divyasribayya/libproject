import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const CallToActionContainer = styled.div`
  background: linear-gradient(90deg, #16a34a, #0ea5e9);
  padding: 20px 40px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin: 5px 0 0;
`;

const StyledButton = styled(Button)`
  border: 1px solid white;
  color: white;
  background: transparent;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;

  &:hover {
    background: white;
    color: #16a34a;
  }
`;

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <TextContainer>
        <Title>Start With Gowish Today, Professional Video Editor!</Title>
        <Subtitle>Professionals Templates Community to Stay Ahead</Subtitle>
      </TextContainer>
      <StyledButton>Login Now</StyledButton>
    </CallToActionContainer>
  );
};

export default CallToAction;
