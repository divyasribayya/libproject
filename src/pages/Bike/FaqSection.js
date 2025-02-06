import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { faqContent } from '../../utils/constants'; 

// Wrapper for full-width background
const FaqWrapper = styled.div`
  background-color: #0d4740;
  padding: 60px 0;
`;

const FaqContainer = styled.div`
  background-color: #0d4740;
  color: #ffffff;
  padding: 60px;
  max-width: 1200px; 
  margin: 0 auto;
  border-radius: 8px;

  @media (max-width: 992px) {
    padding: 30px;
    max-width: 800px;
  }
`;

const FaqTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const FaqSubTitle = styled.h3`
  text-align: left;
  font-size: 1rem;
  color: #ff6200;
  font-weight: bold;
`;

const StyledAccordionItem = styled(Accordion.Item)`
  border: none;
  margin-bottom: 10px;
  background-color: #0d4740; 
  border-radius: 8px;
`;

const StyledAccordionHeader = styled(Accordion.Header)`
  background:none !important; 
  color: #ff6200 !important; 
  font-size: 1.2rem;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
`;

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: #0d4740; 
  color: #ffffff;
  border-top: none;
  padding-left:20px
  font-size: 1rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FaqSection = () => {
  return (
    <FaqWrapper>
      <FaqContainer>
        <FaqSubTitle>{faqContent.subTitle}</FaqSubTitle>
        <FaqTitle>{faqContent.title}</FaqTitle>
        <Accordion defaultActiveKey="0">
          {faqContent.faqs.map((faq, index) => (
            <StyledAccordionItem eventKey={index.toString()} key={index}>
              <StyledAccordionHeader className="collapsed">
                {faq.question}
              </StyledAccordionHeader>
              <StyledAccordionBody>
                {faq.answer}
              </StyledAccordionBody>
            </StyledAccordionItem>
          ))}
        </Accordion>
        <FooterText>
          {faqContent.footerText}
        </FooterText>
      </FaqContainer>
    </FaqWrapper>
  );
};

export default FaqSection;
