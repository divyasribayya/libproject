import React from "react";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { howItWorksSteps } from "../utils/constants"; // Importing data

const Container = styled.div`
  background-color: #0d0d0d;
  color: #fff;
  padding: 40px 20px;
`;

const Title = styled.h2`
  color: #3bd14a;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #a0a0a0;
  margin-bottom: 30px;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Step = styled.div`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 48%; /* 2 items per row */

  text-align: center;

  @media (max-width: 768px) {
    width: 100%; /* 1 item per row on smaller screens */
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;

  svg {
    color: red;
    font-size: 24px;
  }
`;

const Image = styled.img`
  width: 100%; /* Ensures responsiveness */
  height: 220px; /* Fixed height */
  object-fit: cover; /* Maintains aspect ratio */
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 180px; /* Adjust height for smaller screens */
  }
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  margin-top: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #3bd14a;
`;

const HowItWorks = () => {
  return (
    <Container>
      <Title>How it Works Video Editor</Title>
      <Subtitle>
        Save thousands to millions of bucks by using a single tool for different
        amazing and great useful admin
      </Subtitle>
      <StepsContainer>
        {howItWorksSteps.map((step, index) => (
          <Step key={index}>
            <StepHeader>
              <FaYoutube /> {step.stepTitle}
            </StepHeader>
            <Image src={step.image} alt={step.alt} />
            <StepDescription>
              {step.description} <br />
              <Highlight>{step.highlight}</Highlight>
            </StepDescription>
          </Step>
        ))}
      </StepsContainer>
    </Container>
  );
};

export default HowItWorks;
