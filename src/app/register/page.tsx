"use client";
import React from "react";

const Register = () => {
  const [formDetails, setFormDetails] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formDetails);
  };
  return (
    <div className="">
      <div className="flex justify-center items-center pt-32">
        <div className="max-w-[36.6rem] w-full rounded-md bg-white p-20">
          <form
            onSubmit={handleSubmission}
            className="rounded-md p-16 border-2 border-purple-500/20"
          >
            <div className="flex flex-col text-black">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formDetails.fullName}
                onChange={handleOnChange}
                className="p-3 rounded-md mt-2 bg-white  border-[2px] border-[#4fc18f]/30"
              />
            </div>
            <div className="flex flex-col text-black">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formDetails.email}
                onChange={handleOnChange}
                className="p-3 rounded-md mt-2 bg-white  border-[2px] border-gray-400/30"
              />
            </div>
            <div className="mt-8 flex flex-col text-black">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formDetails.password}
                onChange={handleOnChange}
                className="p-3 rounded-md mt-2 bg-white  border-[2px] border-[#4fc18f]/30"
              />
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="bg-[#4fc18f] text-white w-full py-2 rounded-md font-medium"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
