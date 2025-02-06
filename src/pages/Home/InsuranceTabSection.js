import React, { useState } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { products } from '../../utils/constants';

const Container = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #024656;
  color: #fff;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;

    span {
      color: #FF4600;
    }
  }

  .nav-tabs {
    display: flex;
    justify-content: center;
    border-bottom: none;
    margin-bottom: 30px;

    .nav-link {
      font-size: 18px;
      font-weight: 500;
      background: none !important;
      color: #fff;
      padding: 10px 20px;
      border: none;

      &:hover {
        color: #FF4600;
      }

      &.active {
        color: #FF4600;
        font-weight: 700;
        border-bottom: 3px solid #FF4600;
      }
    }
  }

  .product-card {
    background: #fff;
    border-radius: 16px;
    width: 25vh;
    padding: 20px;
    text-align: center;
    margin: 0 10px 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      max-width: 60px;
      margin-bottom: 15px;
    }

    .product-name {
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
  }

  .learn-more {
    color: #FF4600;
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
  }
`;

const InsuranceTabSection = () => {
  const [activeTab, setActiveTab] = useState('Car');

  return (
    <Container>
      <h2>Types of <span>Insurance</span> Products</h2>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav variant="tabs" className="nav-tabs">
          <Nav.Item>
            <Nav.Link eventKey="Car">Car</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Bike">Bike</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Health">Health</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Life">Life</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          {Object.keys(products).map((category) => (
            <Tab.Pane eventKey={category} key={category}>
              <Row className="justify-content-center">
                {products[category].map((product, index) => (
                  <Col key={index} xs={12} md={3} className="product-card">
                    {product.icon}
                    <div className="product-name">{product.name}</div>
                  </Col>
                ))}
              </Row>
              <Link to={`/${category.toLowerCase()}`} className="learn-more">
                Learn more about {category.toLowerCase()} &gt;
              </Link>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default InsuranceTabSection;
