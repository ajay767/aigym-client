import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Typography from '@ui/Typography';
import Section from '../layout/Section';
import {Link} from "react-router-dom";
import Bmi from "../components/Bmi";
import {IoIosArrowForward} from "react-icons/io";
import Button from '../UI/Button';

function Profile() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  //absolute -top-1/4 transform -translate-x-1/2 translate-y-1/2

  return (
    <div className="relative">
      <PageHeader title="Profile" />
      <div className="inline-block h-44 w-full border relative">
        <img
          src="/assets/images/training.jpg"
          className="h-full w-full object-cover "
          alt="profile bg"
        ></img>
        <div className="flex absolute -top-0.5 ">
        <div> 
          <img
            src="/assets/images/yoga.jpg"
            
            alt="user"
            className="px-1 pt-2 left-14  h-24 w-24 rounded-full flex-1"
          ></img>
        </div>
        <Typography type="header" className="mt-1 ml-0 text-white self-center">
          Ajay
        </Typography>
        </div>
      </div>
      <Bmi/>
      <Section className="grid grid-rows-6 mt-9">
      <div className="mx-2 my-2 font-semibold"><Link to="/Account"><div className="flex items-center">Account<IoIosArrowForward size={16}/></div></Link></div>
      <div className="mx-2 my-2 font-semibold"><Link to="/Wallet"><div className="flex items-center">Your Wallet<IoIosArrowForward size={16}/></div></Link></div>
      <div className="ml-2 my-2 font-semibold"><Link to="#"><div className="flex items-center">Daily Active Subscriptions<IoIosArrowForward size={16}/></div></Link></div>
      <div className="ml-2 my-2 font-semibold"><Link to="#"><div className="flex items-center">Transactions<IoIosArrowForward size={16}/></div></Link></div>
      <div className="ml-2 my-2 font-semibold"><Link to="#"><div className="flex items-center">Support<IoIosArrowForward size={16}/></div></Link></div>
      <Button btnType="primary" className="px-6 py-3 rounded-3xl text-white w-48 justify-self-center">Logout</Button>
     </Section>
      <Footer />
    </div>
  );
}

export default Profile;
