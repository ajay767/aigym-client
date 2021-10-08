import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Typography from '@ui/Typography';
import TextInput from '@ui/TextInput';
import Section from '../layout/Section';
import Button from '@ui/Button';
function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="relative">
      <PageHeader title="Profile" />
      <div className="inline-block h-44 w-full border relative">
        <img
          src="/assets/images/training.jpg"
          className="h-full w-full object-cover "
          alt="profile bg"
        ></img>
        <div className="bg-white p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-24 w-24 rounded-full ">
          <img
            src="/assets/images/yoga.jpg"
            className="w-full h-full rounded-full"
            alt="user"
          ></img>
        </div>
      </div>
      <div className="pt-16 pb-6 text-center">
        <Typography type="header" className="mt-1">
          Ajay Yadav
        </Typography>
        <Typography type="caption">aju@gmail.com</Typography>
      </div>
      <Section className="space-y-3">
        <TextInput
          type="text"
          value={name}
          setValue={setName}
          textType="primary"
          label="Name"
          placeholder="Ajay Yadav"
        />
        <TextInput
          type="email"
          value={email}
          setValue={setEmail}
          textType="primary"
          label="Email"
          placeholder="john@gmail.com"
        />
        <Button btnType="primary">Update Profile</Button>
      </Section>
      <Section className="mt-10">
        <div className="h-40 w-full bg-blue-500 rounded"></div>
      </Section>
      <Footer />
    </div>
  );
}

export default Profile;
