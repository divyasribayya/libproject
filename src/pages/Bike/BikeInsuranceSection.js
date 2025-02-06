import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { bikecontent } from '../../utils/constants';

// Styled components for the heading
const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 52.08px;
  text-align: left;
  color: #e94e1b;

  span {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const StyledContainer = styled(Container)`
  background-color: #fff;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 532px;
  height: auto;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const BikeInsuranceSection = () => {
  const { heading, description, imageSrc, altText } = bikecontent.bikeInsurance; 
  return (
    <StyledContainer>
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <Heading>
            {heading.textBefore} <span>{heading.textSpan}</span>
          </Heading>
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Col>
        <Col lg={6} md={12} className="text-center">
          <StyledImage
            src={imageSrc}
            alt={altText}
            className="img-fluid"
          />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default BikeInsuranceSection;
