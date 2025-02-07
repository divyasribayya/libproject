import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import OfferCard from "./OfferCard";
import OurPartnerSection from "./OurPartnerSection";
import Testimonials from "./Home/Testimonials";
import CallToAction from "./Home/CallToAction";
import HowItWorks from "./HowItWorks"
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  text-align: left;
  padding: 20px;
  max-width: 70vw; /* Matches video width */
  margin: 0 auto;

  @media (max-width: 992px) {
    max-width: 90vw;
  }

  @media (max-width: 768px) {
    max-width: 95vw;
  }

  @media (max-width: 480px) {
    max-width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px; /* Space between title and subtitle */
  color: #fff;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #bbb;
  margin-bottom: 20px; /* More space before video */
`;

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-start; /* Align video to the left */
  width: 70vw;
  height: 70vh;
  background: #ccc;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 90vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 95vw;
    height: 40vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 30vh;
  }
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title>All Home</Title>
        <Subtitle>Home - Digital go Wish</Subtitle>
      </Wrapper>
      <Container>
        <VideoIframe
          src="https://www.youtube.com/embed/TWdDZYNqlg4?autoplay=1&mute=1&loop=1&playlist=TWdDZYNqlg4"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </Container>
      <Categories />
      <OfferCard />
      <OurPartnerSection />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
