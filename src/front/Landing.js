import React from 'react';
import Section from '../layout/Section';

function Landing() {
  return (
    <Section>
      <h1 className="text-gray-700 mt-4">
        <span className=" text-3xl font-bold">
          Hi, <span className="text-yellow-600">John</span>
        </span>
        <br />
        <span className="text-lg font-medium ">Good Morning</span>
      </h1>
    </Section>
  );
}

export default Landing;
