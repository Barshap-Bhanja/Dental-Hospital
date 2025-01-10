import React from "react";
import T1 from "../src/assets/T1.png";
import Doctor from "../src/assets/Doctor.png";
import Womanbrush from "../src/assets/Womanbrush.png";
const Herosection = () => {
    return(
        <div className="bg-blue-600 w-full lg:h-[35rem] flex lg:flex-row md:flex-col items-center justify-between lg:px-12 ">
           <div className="my-5">
            <h2 className="text-[2rem] text-white font-semibold ">Better Life Through</h2>
            <p className="text-[3rem] text-white font-bold">Better Dentistry</p>
            <p className="text-[0.7rem] text-white font-bold w-[30rem] mt-4">Join us a fun a friendly dental enviroment. Our Professionals are warking so<br></br>
            her to see mile on your face that you deserve! We are dedicated about our<br></br> duties.</p>
            <div className="flex gap-3 my-5">
                <button className=" bg-pink-500 px-3 py-2 rounded-md hover:bg-white">Appointment</button> 
                <button className=" border border-white px-3 py-2 rounded-md hover:bg-pink-600">Learnmore</button>
            </div>
            </div>
           
            <div className="">
           <img src={T1}alt=""  />          
           <div className='absolute right-70 top-96 '>
           <img src={Doctor}alt=""  />
           <div className='absolute right-25 top-12 '>
           <img src={Womanbrush}alt=""  />  
           </div>
           </div>
            </div>
        </div>
    )
}
export default Herosection