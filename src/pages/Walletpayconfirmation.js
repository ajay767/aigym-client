import React from "react";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Typography from '@ui/Typography';
import Section from '../layout/Section';
import Button from "../UI/Button";

const WalletPayConfirmation = ()=>{

    return (
    <div>
        <PageHeader title={`Pay to Gym`}/>
        <section className="grid justify-center">
            <div className=" grid mt-24 mx-auto text-center">
                <Typography type="primary2" className="text-6xl mb-5 text-blue-500">Pay</Typography>
                <Typography type="primary2" className="text-6xl border-b-2 border-black w-8/12 justify-self-center">₹25</Typography>
                <Typography type="small" className="w-9/12 my-4 justify-self-center p-0">Money will be deducted through your <span className="text-yellow-400 font-semibold">FitX Wallet</span></Typography>
            </div>
            <Button btnType="primary" className="my-4 w-9/12 justify-self-center">Pay From Wallet</Button>
        </section>
        <Footer/>
    </div>
    )
}

export default WalletPayConfirmation;