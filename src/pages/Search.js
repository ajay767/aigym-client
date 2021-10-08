import React from 'react';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Typography from '@ui/Typography';

function Search() {
  return (
    <div className="p-2">
      <PageHeader title="Search" />
      <Typography className="mt-2" type="primary">
        This is Primary Header
      </Typography>
      <Typography className="mt-2" type="secondary">
        This is Secondary Header
      </Typography>
      <Typography className="mt-2" type="header">
        This is header
      </Typography>
      <Typography className="mt-2" type="section">
        This is Section
      </Typography>

      <Typography className="mt-2" type="title">
        This is title
      </Typography>
      <Typography className="mt-2" type="content">
        This is content
      </Typography>
      <Typography className="mt-2" type="caption">
        This is caption
      </Typography>
      <Typography className="mt-2" type="small">
        This is small
      </Typography>
      <Footer />
    </div>
  );
}

export default Search;
