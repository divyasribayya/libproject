import React from 'react';
import HeroImage from './HeroImage';
import BikeInsuranceSection from './BikeInsuranceSection';
import ServiceCard from '../Services/servicecard';
import FaqSection from './FaqSection';
import PricingComponent from './PricingComponent';
import InsuranceContent from './insuranceContent';
function Bike() {
    return ( 
        <><HeroImage /><BikeInsuranceSection />
        <InsuranceContent />
        <ServiceCard/>
        <FaqSection/>
        <PricingComponent />
        </>
     );
}

export default Bike;