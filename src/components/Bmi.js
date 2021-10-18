import React from "react";
import {IoIosArrowForward} from "react-icons/io";
//<div className="w-2 h-16 bg-blue-600 rounded-xl mx-2"></div> w-5/12
const Bmi = () =>{
    return (
        <div className="w-full grid absolute top-48">
             
             <div className="grid grid-cols-2 w-9/12 rounded-xl p-2 bg-blue-500 text-white font-semibold justify-self-center">
        <div className="flex items-center border-r-4 grid-start-1 grid-end-2">
            <form className="w-full">
            <p>Weight</p>
            <input type="number" name="weight" placeholder="_ _" className="bg-transparent w-full placeholder-white outline-none text-center"/>
            </form>
            <IoIosArrowForward size={20}/>
         </div>
        
        <div className="flex items-center w-full">
        <div className="w-4/6 pl-4 pr-2">
            <p>Bmi</p>
            <p className="text-center">_ _</p>
        </div>
        <IoIosArrowForward size={20} className="w-auto pl-4 flex-shrink-0"/>
        </div>
        
      </div>

        </div>
     
    )
}

export default Bmi;