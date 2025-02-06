import React from 'react';
import AboutSection from './AboutSection';
import Services from '../Home/Services'
import WorkProcess from './WorkProcess';
import InsuranceTabSection from './InsuranceTabSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import { whyUsContent } from '../../utils/constants';
import HomeBannerSection from './CallToAction';
import RecordSection from './Testimonials';
const Home = () => {
  return (
    <>
  <HomeBannerSection />
  <RecordSection />
    <AboutSection />
    <Services />
    <WorkProcess />
    <InsuranceTabSection />
    <WhyChooseUsSection whyUsContent={whyUsContent} />
    </>
  );
}

export default Home;
