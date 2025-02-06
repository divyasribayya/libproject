
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
const StyledCard = styled(Card)`
  background-color: #e9f7ff;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const IconWrapper = styled.div`
  width: 100px;
  height: 60px;
  background: #024656;
  margin-right: 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 768px) {
   width: 30vh;
        height: 8vh;
        font-size: 2.25rem;
  }
`;
const CardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a3d62;
`;
const CardDescription = styled(Card.Text)`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #065a60;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #fff;

  &:hover {
    background-color: #048ba8;
  }
`;
const ServiceCardItem = ({ title, description, icon: Icon, link }) => {
  return (
    <StyledCard>
      <CardContent>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Card.Body>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <StyledButton variant="primary" href={link}>
            See more
          </StyledButton>
        </Card.Body>
      </CardContent>
    </StyledCard>
  );
};
export default ServiceCardItem;
