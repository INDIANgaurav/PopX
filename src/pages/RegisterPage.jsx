import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
   
    const emailExists = existingUsers.some(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );
  
    if (emailExists) {
      alert("This email is already registered!");
      return;
    }
  
 
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  
 
    localStorage.setItem("userData", JSON.stringify(formData));
  
    navigate("/home");
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 leading-tight">
          Create your <br /> PopX account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Full Name<span className="text-purple-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Phone number<span className="text-purple-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
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

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Inc."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-2">
              Are you an Agency?<span className="text-purple-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="inline-flex items-center text-sm">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center text-sm">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#6C25FF] text-white rounded-sm p-2 w-full"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
