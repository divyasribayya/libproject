import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { constants } from '../../utils/constants';

const Section = styled.section`
  padding: 60px 0;

  @media (max-width: 992px) {
    padding: 40px 0;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.h5`
  color: #ff4500;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
  line-height: 20.4px;
  letter-spacing: 0.15em;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const VisionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 25.6px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #6c757d;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
  }
`;

const ParagraphTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: left;
  color: #ef5226;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: #004643;
  border: none;
  font-size: 16px;
  padding: 10px 20px;

  &:hover {
    background-color: #003834;
  }

  @media (max-width: 992px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  & > img {
    border-radius: 10px;
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensure images cover the area */
  }

  & > img:nth-child(1) {
    grid-row: span 2;
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;

    & > img:nth-child(1) {
      flex: 1 1 100%; /* Take full width on mobile */
      margin-bottom: 10px; /* Add margin below */
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex: 1 1 100%; /* Take full width on mobile */
    }

    & > div > img {
      flex: 1;
      margin-bottom: 10px; /* Add margin below */
    }
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <ImageGrid>
              <Image src={constants.home_img_1} alt="Image 1" fluid />
              <div>
                <Image src={constants.home_img_2} alt="Image 2" fluid className='mb-1' />
                <Image src={constants.home_img_3} alt="Image 3" fluid className='mt-1'/>
              </div>
            </ImageGrid>
          </Col>
          <Col md={6}>
            <Subtitle>About Us</Subtitle>
            <Title>Innovating Insurance Solutions</Title>
            <ParagraphTitle>Our Vision</ParagraphTitle>
            <VisionText>
              "Our vision is to revolutionize the insurance industry by providing innovative, customer-centric solutions that offer unparalleled protection and peace of mind, fostering trust and security in every aspect of life."
            </VisionText>
            <LearnMoreButton>Learn More</LearnMoreButton>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default AboutSection;
