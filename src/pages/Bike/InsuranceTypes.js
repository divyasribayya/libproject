import React from 'react';
import { Container, Row, Col, Image as BootstrapImage } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components
const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  color: #000;

  span {
    color: #ef5226;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 31.25px;
  text-align: left;
  color: #000;
`;

const FeaturesHeading = styled.h5`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-top: 20px;
`;

const StyledImage = styled(BootstrapImage)`
  width: 482px;
  height: 350px;
  border-radius: 10px 0 0 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 19.6px;
  }
`;

const FlexRow = styled(Row)`
  @media (max-width: 768px) {
    .image-col {
      order: 2;
    }
    .text-col {
      order: 1;
    }
  }
`;

const ParagraphText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: left;
`;

// Main component
const InsuranceTypes = ({ content }) => {
  return (
    <Container className="text-center py-5">
      <Heading>
        {content.heading.split(' ')[0]} <span>{content.heading.split(' ').slice(1).join(' ')}</span>
      </Heading>
      <DescriptionText>
        {content.description}
      </DescriptionText>

      {content.plans.map((plan, index) => (
        <FlexRow className="mb-5" key={index}>
          {index % 2 === 0 ? (
            <>
              {/* Image on the left for even index */}
              <Col md={6} className="d-flex align-items-center justify-content-between image-col">
                <StyledImage src={plan.image} alt={plan.altText} fluid />
              </Col>
              <Col md={6} className="text-start d-flex align-items-center text-col justify-content-between">
                <div>
                  <SubHeading>{plan.title}</SubHeading>
                  <ParagraphText>{plan.text}</ParagraphText>
                  <FeaturesHeading>Features:</FeaturesHeading>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </>
          ) : (
            <>
              {/* Image on the right for odd index */}
              <Col md={6} className="text-start d-flex align-items-center text-col justify-content-between">
                <div>
                  <SubHeading>{plan.title}</SubHeading>
                  <ParagraphText>{plan.text}</ParagraphText>
                  <FeaturesHeading>Features:</FeaturesHeading>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-center justify-content-between image-col">
                <StyledImage src={plan.image} alt={plan.altText} fluid />
              </Col>
            </>
          )}
        </FlexRow>
      ))}
    </Container>
  );
};

export default InsuranceTypes;
