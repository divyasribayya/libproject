import React from "react";
import styled from "styled-components";

// Styled components

const Section = styled.section`
  padding: 40px 0;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

const SectionSubtitle = styled.p`
  font-size: 17px;
    font-weight: 500;
    line-height: 20.4px;
    letter-spacing: 0.15em;
    text-align: center;
    color:#ef5226;
`;
const SectionSubtitles = styled.p`
  font-size: 17px;
    font-weight: 500;
    line-height: 20.4px;
    letter-spacing: 0.15em;
    text-align: center;
    color:#ef5226;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #b2e4ef;
  border-radius: 10px;
  cursor: pointer;
  max-width: 340px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,
    rgba(173, 216, 230, 0.7) 0px 6px 6px;

  @media (max-width: 992px) {
    margin: 0 10px;
  }
`;

const Price = styled.h1`
font-size: 24px;
font-weight: 700;
line-height: 28.8px;
text-align: left;

  margin-bottom: 10px;
  span {
    font-size: 16px;
    color: #ef5226;
  }
`;

const PlanTitle = styled.h2`
font-size: 30px;
font-weight: 700;
line-height: 38.4px;
letter-spacing: -0.02em;
text-align: left;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CoverageHeading = styled.h3`
  margin-bottom: 10px;
  text-align: left;
font-size: 16px;
font-weight: 500;
line-height: 19.2px;
letter-spacing: 0.15em;
text-align: left;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CoverageList = styled.ul`
  text-align: left;
  margin-bottom: 20px;
  padding-left: 20px;
font-size: 14px;
font-weight: 400;
line-height: 22.4px;
letter-spacing: -0.03em;

`;

const CoverageItem = styled.li`
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
 background-color: #ff5722;
    color: white;
    border: none;
    height: 57px;
    width: 264px;
    gap: 10px;
    padding: 20px 30px 20px 30px;
    border-radius: 99px;
    cursor: pointer;
    font-size: 14px;

  &:hover {
    background-color: #e64a19;
  }

  @media (max-width: 992px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const PricingSection = ({ title, subtitle, plans ,subtitles }) => (
  <Section>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
    <SectionTitle>{title}</SectionTitle>
    <SectionSubtitles>{subtitles}</SectionSubtitles>
    <CardContainer>
      {plans.map((pkg, index) => (
        <Card
          key={index}
          style={{ background: pkg.background, color: pkg.color }}
        >
          <Price>
            {pkg.price} <span>/ Month</span>
          </Price>
          <PlanTitle>{pkg.title}</PlanTitle>
          <Description>{pkg.description}</Description>
          <CoverageHeading>Coverage Included</CoverageHeading>
          <CoverageList>
            {pkg.coverages.map((coverage, i) => (
              <CoverageItem key={i}>{coverage}</CoverageItem>
            ))}
          </CoverageList>
          <CoverageHeading>Key Features</CoverageHeading>
          <CoverageList>
            {pkg.keyFeatures.map((feature, i) => (
              <CoverageItem key={i}>{feature}</CoverageItem>
            ))}
          </CoverageList>
          <Button>Get Started</Button>
        </Card>
      ))}
    </CardContainer>
  </Section>
);

export default PricingSection;
