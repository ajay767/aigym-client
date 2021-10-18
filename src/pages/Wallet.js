import React from "react";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Typography from '@ui/Typography';
import Section from '../layout/Section';
import Button from "../UI/Button";
import {GiTwoCoins} from "react-icons/gi";
import { Link } from "react-router-dom";

const Wallet = () =>{
   return(
       <div>
           <PageHeader title="Wallet"/>
        <Section>
           <Typography type="secondary" className="m-1">Your Wallet</Typography>
           <div className="flex items-center">
           <GiTwoCoins className="text-yellow-400 text-2xl"/>
           <Typography type="content" className="m-2">₹0.00</Typography>
           </div>
        </Section>
        <Section className="mt-10">
            <Typography type="header" className="m-1">Add Money</Typography>
            <div className="py-2 grid">
              <input type="number" name="amount"
              placeholder="Amount" className="border-b-4 w-full border-blue-500 focus:outline-none"/>
              <Typography type="small" className="mx-1 my-3 w-4/5 justify-self-center text-center">Money will be added to <span className="text-yellow-400 font-semibold">FitX Wallet</span></Typography>
              <Link to="/WalletConfirm" className="">
              <Button btnType="primary" className="my-2 w-full">Add Amount</Button>
              </Link>
            </div>
        </Section>
        <Section>
        <Typography type="header" className="m-1">Use Your Wallet to</Typography>
        <div className="grid">
            <div ><Typography type="title" className="m-1 py-2">Make a Payment</Typography><hr/></div>
            <div><Typography type="title" className="m-1 py-2">Send Gift Voucher</Typography><hr/></div>
            <div><Typography type="title" className="m-1 py-2">Send Money to Bank</Typography><hr/></div>

        </div>
        </Section>
           <Footer/>
       </div>
   ) 
}

export default Wallet;