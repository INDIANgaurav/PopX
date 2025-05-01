import React from "react";
import { FaCamera } from "react-icons/fa";

const HomePage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md overflow-hidden">
 
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800">Account Settings</h1>
        </div>

 
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 text-white">
                <FaCamera size={12} />
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                {userData?.fullName || "Guest User"}
              </h3>
              <p className="text-sm text-gray-600">{userData?.email}</p>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
            Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
