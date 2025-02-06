import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { constants } from '../../utils/constants';

// Styled Components
const Section = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Subtitle = styled.h5`
  font-size: 18px;
  color: #004643;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #004643;
  margin-bottom: 20px;
`;

const StepNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #004643;
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #004643;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 20px;
`;

const GetStartedButton = styled(Button)`
  background-color: #ff4500;
  border: none;
  margin-top: 30px;
  padding: 15px 30px;
  font-size: 16px;
  &:hover {
    background-color: #e03d00;
  }
`;

// Styled component for images
const StyledImage = styled.img`
  width: 520px;
  height: 296px;
  gap: 0;
  border-radius: 10px 0px 0px 0px;
  opacity: 1;
`;

const HowItWorks = () => {
  return (
    <Section>
      <Container>
        {/* Header */}
        <Header>
          <Subtitle>How It Works</Subtitle>
          <Title>How Our Insurance Process Works</Title>
        </Header>

        {/* Step 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <StyledImage src={constants.home_work_process_1} alt="Consultation and Assessment" className="img-fluid" />
          </Col>
          <Col md={6}>
            <StepNumber>01</StepNumber>
            <StepTitle>Consultation and Assessment</StepTitle>
            <StepDescription>
              <strong>Initial Meeting</strong>
              <br />
              During the initial meeting, we discuss your insurance needs, assess risks, and tailor solutions to ensure comprehensive coverage and satisfaction.
            </StepDescription>
            <StepDescription>
              <strong>Assessment of Needs</strong>
              <br />
              Assessment of needs involves evaluating your specific requirements, risks, and goals to customize insurance solutions that offer optimal protection and value.
            </StepDescription>
          </Col>
        </Row>

        {/* Step 2 */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="order-md-2">
            <StyledImage src={constants.home_work_process_2} alt="Customized Plan Selection" className="img-fluid" />
          </Col>
          <Col md={6} className="order-md-1">
            <StepNumber>02</StepNumber>
            <StepTitle>Customized Plan Selection</StepTitle>
            <StepDescription>
              <strong>Plan Options Presented</strong>
              <br />
              Plan options presented showcase tailored insurance solutions, highlighting coverage details and benefits to help you choose the best fit for your needs.
            </StepDescription>
            <StepDescription>
              <strong>Review and Decision</strong>
              <br />
              Review and decision involve evaluating plan details, addressing any questions, and making an informed choice to secure the most suitable coverage.
            </StepDescription>
          </Col>
        </Row>

        {/* Step 3 */}
        <Row className="align-items-center">
          <Col md={6}>
            <StyledImage src={constants.home_work_process_3} alt="Enrollment and Coverage Activation" className="img-fluid" />
          </Col>
          <Col md={6}>
            <StepNumber>03</StepNumber>
            <StepTitle>Enrollment and Coverage Activation</StepTitle>
            <StepDescription>
              <strong>Enrollment Process</strong>
              <br />
              Complete the necessary paperwork and provide required information to finalize your insurance policy and begin the enrollment process.
            </StepDescription>
            <StepDescription>
              <strong>Coverage Activation</strong>
              <br />
              After enrollment, your coverage is activated, ensuring immediate protection and access to benefits as outlined in your chosen policy.
            </StepDescription>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <GetStartedButton>Get Started</GetStartedButton>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
