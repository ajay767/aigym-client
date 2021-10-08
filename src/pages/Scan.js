import React from 'react';
import Footer from '@component/Footer';
import PageHeader from '@component/PageHeader';
import Section from '@layout/Section';
import QrReader from 'react-qr-reader';

function Scan() {
  const handleError = (err) => {
    console.log(err);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };

  return (
    <div>
      <PageHeader title="Scan" />
      <QrReader
        className="shadow-md"
        facingMode="environment"
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%', height: '100%' }}
      />
      <Section className="py-2"></Section>
      <Footer />
    </div>
  );
}

export default Scan;
