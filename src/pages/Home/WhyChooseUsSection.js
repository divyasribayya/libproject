import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

const WhyUsSection = styled.section`
  background-color: #04303b; 
  color: #ffffff;
  padding: 50px 0;

  @media (max-width: 992px) {
    padding: 30px 0;
  }
`;
const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const SubHeading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #90a4ae;

  @media (max-width: 992px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const IconBox = styled.div`
  display: flex; 
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  img {
    margin-right: 20px; 
    background-color: #B2E4EF;
    width: 80px;
    height: 92px;
    padding: 26px 20px;
    border-radius: 5px 0 0 0;
  }

  @media (max-width: 992px) {
    align-items: center;
    padding: 15px;
    
    img {
      width: 60px;
      height: 70px;
      padding: 16px 15px;
    }
  }
`;

const FeatureText = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #cfd8dc; 

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CustomerImage = styled.img`
  width: 85vh;
  position: absolute;
  top: 160px;
  left: -167px;
  padding: 20px 40px 20px 30px;
  border-radius: 10px 999px 999px 10px;

  @media (max-width: 992px) {
   width: 100%;
        position: relative;
        top: -386px;
        left: -98px;
        padding: 10px;
        border-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const WhyChooseUsSection = ({ whyUsContent }) => {
  const { subHeading, heading, features, imageSrc, customerSatisfactionSrc } = whyUsContent;

  return (
    <WhyUsSection>
      <Container>
        <Row>
          <Col md={6}>
            <SubHeading>{subHeading}</SubHeading>
            <Heading>{heading}</Heading>
            <Row>
              {features.map((feature, index) => (
                <Col md={12} key={index}>
                  <IconBox>
                    <img src={feature.img} alt={feature.title} />
                    <FeatureText>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureText>
                  </IconBox>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <ImageWrapper>
              <Image src={imageSrc} fluid rounded />
              <CustomerImage src={customerSatisfactionSrc} alt="Customer Satisfaction Icon" />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </WhyUsSection>
  );
};

export default WhyChooseUsSection;
