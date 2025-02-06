import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { testimonialsData } from "../../utils/constants";

// Styled Components
const GradientContainer = styled(Container)`
  // background-color: #f8f9fa;
  width: 100%;
  height: auto;
  padding: 0%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  background-color: transparent;
`;

const StyledCardBody = styled(Card.Body)`
  background-color: transparent !important;
  padding: 2rem;
`;

const StyledCarouselItem = styled(Carousel.Item)`
  .row {
    justify-content: center;
  }
  .text-center.text-lg-start {
    text-align: center;
    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  margin-top: 5vh;

  button {
    background: none;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e93906;
    border: none;
    font-size: 3rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
      background: none;
    }
  }
`;

export const Title = styled.h3`
  font-size: 40px;
  color: #ef5226;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Testimonials = () => {
  // State for carousel index
  const [index, setIndex] = useState(0);

  // Handle carousel index change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="text-center w-100 w-md-50 p-md-5">
      <div id="hero" className="animated-section">
        <Title className="text-center pt-4 pt-md-0">Testimonials</Title>
        <GradientContainer>
          <StyledCard>
            <StyledCardBody className="px-2 py-md-2">
              <CarouselWrapper className="bg-transparent">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  indicators={false}
                  controls={false}
                  variant="dark"
                >
                  {testimonialsData.map((testimonial, idx) => (
                    <StyledCarouselItem key={idx}>
                      <Row className="d-flex justify-content-center">
                        <Col
                          md={12}
                          className="text-center text-md-start mx-auto mx-lg-0 text-white"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(50px)",
                            borderRadius: "20px",
                            border: "20px solid rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            height: "auto",
                            padding: "2%",
                            width: window.innerWidth >= 992 ? "65%" : "100%",
                          }}
                        >
                          <p
                            className="mb-0 pd-3 text-black w-75 m-auto"
                            style={{ color: "#3F3D56" }}
                          >
                            {testimonial.testimonial}
                          </p>
                          <CarouselControls>
                            <button
                              onClick={() => handleSelect(index - 1)}
                              disabled={index === 0}
                            >
                              &#8592;
                            </button>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <h4 className="mb-0 mt-3 fs-4 fs-md-3 text-black">
                                {testimonial.name}
                              </h4>
                            </div>
                            <button
                              onClick={() => handleSelect(index + 1)}
                              disabled={index === testimonialsData.length - 1}
                            >
                              &#8594;
                            </button>
                          </CarouselControls>
                        </Col>
                      </Row>
                    </StyledCarouselItem>
                  ))}
                </Carousel>
              </CarouselWrapper>
            </StyledCardBody>
          </StyledCard>
        </GradientContainer>
      </div>
    </Container>
  );
};

export default Testimonials;
