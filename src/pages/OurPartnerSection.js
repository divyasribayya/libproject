import React from 'react';
import styled from 'styled-components';
import { partnerData } from '../utils/constants'; // Adjust the path as needed
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SliderWrapper = styled.div`
  height: 170px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
  background-color: #fff;
  padding: 16px 0;

  .slide-track {
    display: flex;
    width: calc(250px * ${partnerData.length * 2}); /* Double the length for continuous effect */
    animation: scroll 40s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * ${partnerData.length}));
    }
  }
 

  .slide:nth-child(1) img {
    
    opacity: 0.8; /* Example: reduce opacity for the first slide */
  }

  .slide {
    height: 100px;
    width: 250px;
    filter: grayscale(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    opacity: 0.7;
    box-sizing: border-box;
  }

  .slide:hover {
    filter: grayscale(0%);
   
}
  }
`;

const OurPartnerSection = () => {
  return (
    <SliderWrapper>
      <div className="slide-track">
        {partnerData.map((partner, index) => (
          <div key={index} className="slide">
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="partner-item">
               <Link to={partner.link} >
                <img src={partner.imgSrc} alt={partner.alt} />
              </Link>
            </Col>
          </div>
        ))}
        {/* Duplicate the logos for continuous scrolling effect */}
        {partnerData.map((partner, index) => (
          <div key={index + partnerData.length} className="slide">
             <Col key={index} xs={6} sm={4} md={3} lg={2} className="partner-item">
               <Link to={partner.link} >
                <img src={partner.imgSrc} alt={partner.alt} />
              </Link>
              {/* target="_blank" */}
            </Col>
          </div>
        ))}
      </div>
    </SliderWrapper>
  );
};

export default OurPartnerSection;