import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCardItem from './servicecarditem'; // Import the ServiceCardItem component
import { services } from '../../utils/constants';
import styled from 'styled-components'; // Import styled-components

// Styled Component for Heading
const Heading = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #024656;
  line-height: 57.6px;
`;
const Subtitle = styled.h3`
  font-size: 17px;
  font-weight: 500;
  color: #ef5226;
  line-height: 20.4px;
  letter-spacing: 0.15em;
  text-align: left;
  margin-top: 10px;
`;
const StyledH4 = styled.h4`
font-size: 17px;
font-weight: 500;
line-height: 17px;
letter-spacing: -0.03em;
  color: #ef5226;
  cursor: pointer;
  margin: 0;
`;
const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ServiceCard = () => {
  return (
    <Container className="services-section">
      <Subtitle>Other Services</Subtitle>
      <HeadingWrapper>
        <Heading>Our Range of Services</Heading>
        <StyledH4>See all services</StyledH4> {/* Replaced the button with h4 */}
      </HeadingWrapper>
      <Row>
        {services.map((service) => (
          <Col key={service.id} md={6}>
            <ServiceCardItem
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCard;
