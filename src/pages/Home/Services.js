import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { serviceList } from '../../utils/constants';

const Section = styled.section`
  padding: 60px 0;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #004643;
  margin-bottom: 40px;
`;

const Subtitle = styled.h5`
  font-size: 18px;
  color: #ff4500;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ServiceCard = styled.div`
  background-color: #e0f7fa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  color: #004643;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h4`
  font-size: 24px;
  color: #004643;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #6c757d;
`;

const ServiceButton = styled(Button)`
  background-color: #004643;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: #003834;
  }
`;

const Services = () => {
    return (
      <Section>
        <Container>
          <Subtitle>Our Services</Subtitle>
          <Row className="justify-content-between">
            <Col md={6} className="mb-3">
              <Title>Our Range of Services</Title>
            </Col>
            <Col md={6} className="text-end mb-3">
              <Button variant="link" className="text-danger">
                See All Services
              </Button>
            </Col>
          </Row>
          <Row>
            {serviceList.map((service, index) => (
              <Col md={6} key={index}>
                <ServiceCard>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceButton>See more</ServiceButton>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    );
  };
export default Services;
