import React from 'react';
import InsuranceTypes from './InsuranceTypes';
import { insuranceContent } from '../../utils/constants';

const InsuranceContent = () => {
  return (
    <div>
      <InsuranceTypes content={insuranceContent} />
    </div>
  );
};

export default InsuranceContent;
