import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../front/Landing';
import SearchBar from '../components/SearchBar';
import Typography from '@ui/Typography';
import Section from '../layout/Section';
import CategorySection from '../front/CategorySection';

function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <SearchBar />
      <CategorySection />
      <Section className="my-4">
        <Typography type="section">Explore</Typography>
        <Typography type="content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </Typography>
      </Section>
      <Footer />
    </div>
  );
}

export default Home;
