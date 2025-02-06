import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaDollarSign, FaEye } from "react-icons/fa";

const OfferCardWrapper = styled.div`
//   background-color: #0f0f29;
  padding: 20px;
  border-radius: 10px;
  color: white;
  height: 100%; /* Ensuring the card takes full height */

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, #2dbdff, #2d75ff);
    border-radius: 10px;
    padding: 20px;
    height: 100%; /* Ensuring the content container takes full height */

    .heading {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .subheading {
      font-size: 1rem;
      margin: 10px 0;
    }

    .features {
      display: flex;
    //   justify-content: space-between;
      margin: 20px 0;
gap:20px;
      .feature {
        display: flex;
        align-items: center;
        gap: 10px;

        .icon {
          background-color: white;
          color: #2dbdff;
          padding: 5px;
          border-radius: 50%;
        }

        .text {
          color: white;
        }
      }
    }

    .actions {
      display: flex;
      gap: 20px;

      button {
        // flex: 1;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
      }

      .signin {
        background-color: #28a745;
        color: white;
      }

      .guides {
        background-color: white;
        color: #2d75ff;
      }
    }
  }
`;

const ImageContainer = styled.div`
  height: 100%; /* Ensuring image container takes full height */
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensuring the image fills the container */
    border-radius: 10px;
  }
`;

const OfferCard = () => {
  const offerImage = require("../assets/offercard/Imageoffer.jpg"); // Adjust the path based on your folder structure

  return (
    <Container>
      <Row className="align-items-stretch"> {/* Makes both columns stretch */}
        <Col md={6} className="mt-3 mb-3">
          <ImageContainer>
            <img src={offerImage} alt="Offer" />
          </ImageContainer>
        </Col>
        <Col md={6}>
          <OfferCardWrapper>
            <div className="info-container">
              <div>
                <p className="heading">Get best offer</p>
                <p className="heading">Pro Tempetes</p>
                <p className="subheading w-75">
                  Flat cartoony and illustrations with vivid unblended purple hair lady
                </p>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="icon">
                    <FaDollarSign />
                  </div>
                  <div class="text-white">
                    <span class="fw-semibold d-block fs-8 opacity-75">Prie Per Cost</span>
                    <span class="fw-bold fs-7">Up to $ 1.00</span>
                    </div>
                </div>
                <div className="feature">
                  <div className="icon">
                    <FaEye />
                  </div>
                  <div class="text-white">
                <span class="fw-semibold opacity-75 d-block fs-8">Preview</span>
                <span class="fw-bold fs-7">Unlimited</span>
                </div>
                </div>
              </div>
              <div className="actions">
                <button className="signin">Signin</button>
                <button className="guides">Read Guides</button>
              </div>
            </div>
          </OfferCardWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferCard;
