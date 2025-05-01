import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- fix here

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     localStorage.setItem("userData", JSON.stringify(formData));

     navigate("/home"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg flex flex-col gap-2">
        <h1 className="text-2xl font-semibold mb-6 leading-tight">
          Signin to your PopX account
        </h1>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <form
          action=""
          className="flex flex-col gap-2 "
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Enter FullName<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Email address<span className="text-purple-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Password<span className="text-purple-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#6C25FF] text-white rounded-sm p-2 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
