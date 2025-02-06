import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { constants } from '../../utils/constants';

// Styled components
 
const Header = styled.header`
  width: 100%;
  padding: 0;
`;

const BackgroundImage = styled.div`
  background-image: url(${constants.bikebg});
  height: 75vh;
  background-size: 100%;
    background-repeat: no-repeat;
    background-position: unset;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem;
    height:auto;
      background-image: url(${constants.resbg});

  }

  @media (max-width: 480px) {
    padding: 1rem;
        height:auto;
  }
`;

const TextContent = styled.div`
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size:30px;
  line-height: 1.2;

  @media (max-width: 768px) {
font-size: 19px;
font-weight: 500;
line-height: 26.04px;
text-align: center;

  }

  @media (max-width: 480px) {
font-size: 19px;
font-weight: 500;
line-height: 26.04px;
text-align: center;

  }
`;
const Subheading = styled.h4`
font-size: 20px;
font-weight: 500;
line-height: 28px;
text-align: left;


  @media (max-width: 768px) {
font-size: 10px;
font-weight: 500;
line-height: 14px;
text-align: center;

  }

  @media (max-width: 480px) {
   
font-size: 10px;
font-weight: 500;
line-height: 14px;
text-align: center;

  }
`;

const BulletText = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ef5226;
  margin-bottom: 1rem;

  span {
    margin-left: 8px;
    font-size: 1.25rem;
    font-weight: 400;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;

    span {
      font-size: 0.875rem;
    }
  }
`;

const InputButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    width: 100%;
  }
`;

const InputField = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
      width: 50%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
            padding: 6px 12px;
  }

  @media (max-width: 480px) {
    margin-right: 0.5rem;
    width: 100%;
  }
`;

const GetQuoteButton = styled.button`
  background-color: #ef5226;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d94a1f;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    flex: none;
     padding: 6px 12px;
  }

  @media (max-width: 480px) {
        padding: 6px 12px;
          }
`;

const HeroImage = () => {
  return (
    <Header>
      <BackgroundImage>
        <Container>
          <Row>
            <Col xs={12} md={8} lg={6}>
              <TextContent>
                <BulletText>
                <span style={{ color: "#ef5226", fontSize: "30px" }}>•</span>
                <span className='ms-2'>Bike insurance</span>
                </BulletText>
                <Heading>Shield Your Ride with Confidence</Heading>
                <Subheading>
                  Our expert team offers personalized service to secure the best rates and coverage for your bike.
                  Experience substantial savings and peace of mind with our quick, hassle-free process.
                </Subheading>
                <InputButtonWrapper>
                  <InputField type="text" placeholder="Bike Number(TS07FA5099)" />
                  <GetQuoteButton>Get Quotes</GetQuoteButton>
                </InputButtonWrapper>
              </TextContent>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Header>
  );
};
export default HeroImage;
