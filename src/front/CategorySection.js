import React from 'react';
import Section from '../layout/Section';
import Typography from '../components/Typography';

function CategorySection() {
  const CategoryCard = () => {
    return (
      <div
        className="h-14 mr-2 w-max px-8 flex items-center justify-center  rounded-md text-white text-lg"
        style={{
          backgroundImage: "url('/assets/images/gym.jpg')",
          backgroundSize: 'cover',
        }}
      >
        Training
      </div>
    );
  };

  return (
    <Section className="my-4">
      <Typography type="section">Categories</Typography>
      <div className="mt-2 flex flex-nowrap justify-start items-center overflow-x-auto scrollbar-hide ">
        {new Array(8).fill(-10).map((item, index) => {
          return <CategoryCard key={index} />;
        })}
      </div>
    </Section>
  );
}

export default CategorySection;
