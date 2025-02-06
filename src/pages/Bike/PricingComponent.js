import React from 'react';
import PricingSection from './PricingSection'; 
import { pricingPlans } from '../../utils/constants';
import { FaPhone } from "react-icons/fa6";

function PricingComponent() {
  return (
    <PricingSection 
      title="Legacy insurance brokers Insurance Plans"
      subtitle="Pricing Plans"
      subtitles={<><FaPhone /> +123 456 7891</>}
    plans={pricingPlans} />
  );
}
export default PricingComponent;
