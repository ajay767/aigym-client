import React from 'react';
import Typography from '@ui/Typography';
import PageHeader from '@component/PageHeader';
import Footer from '@component/Footer';
import Section from '@layout/Section';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Notification() {
  return (
    <div>
      <PageHeader title="Notification" />
      <Section className="py-2">
        <Typography className="my-2" type="title">
          Recent
        </Typography>
        <div className="flex items-start mb-2">
          <img
            src="/assets/images/yoga.jpg"
            alt="people in gym"
            className="h-10 w-10 rounded-lg  object-cover"
          />
          <Typography className="break-words  ml-2" type="small">
            Lorem Ipsum has been the <b>industry's standard</b> dummy text ever
            since the 1500s
          </Typography>
          <BsThreeDotsVertical size={24} className="w-8 ml-auto" />
        </div>
        <div className="flex items-start mb-2">
          <img
            src="/assets/images/training.jpg"
            alt="people in gym"
            className="h-10 w-10 rounded-lg  object-cover"
          />
          <Typography className="break-words  ml-2" type="small">
            It is a long <b>established</b> fact that a reader will be
            distracted by the readable content
          </Typography>
          <BsThreeDotsVertical size={24} className="w-8 ml-auto" />
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Notification;
