import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const FooterSection = styled.footer`
  background-color: #1c1c2b; /* Dark background */
  padding: 20px 0;
  color: #ffffff;
  font-size: 14px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  font-size: 14px;
  border-top: 1px solid #2c2c3d; /* Divider line */
  margin-top: 20px;

  a {
    color: #a5a5b8;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    a {
      margin: 5px 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterBottom>
          <span>© 2024 www.gowish.app | All rights reserved</span>
          <span>
            <Link to="/terms">Terms and Conditions</Link> |{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </span>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
