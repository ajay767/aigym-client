import React from 'react';
import Section from '../layout/Section';
import Typography from '@ui/Typography';

function Landing() {
  return (
    <Section>
      <Typography type="secondary" className="text-gray-700 mt-4">
        Hi, <span className="text-blue-500">Vivek</span>
      </Typography>
      <Typography type="header">Good Morning</Typography>
    </Section>
  );
}

export default Landing;
