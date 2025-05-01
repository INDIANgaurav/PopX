import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex justify-center items-center flex-col gap-2 w-[500px]   
        h-[500px] p-2"
      >
        <h1 className="font-bold text-2xl">Welcome to PopX</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Link
          to="/sign-up"
          className="bg-[#7F3DFF] w-full  text-white text-center rounded-sm font-semibold py-2 "
        >
          Create Account
        </Link>
        <Link to="/login"  className="bg-[#E9D7FE] w-full rounded-sm text-[#53389E] font-semibold py-2 text-center ">
        Already Registered? Login
        </Link>

       
      </div>
    </div>
  );
};

export default LandingPage;
