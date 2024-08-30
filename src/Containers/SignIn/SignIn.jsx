import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create new user
    console.log("SignIn attempt:", username, email, password, confirmPassword);
    // For demo purposes, assume signIn is successful
    setError(null);
  };

  return (
    <div className="flex flex-col h-screen  w-full">
      <NavBar />
      <div className="w-full h-[90%] flex items-center justify-center">
        <div className="bg-gray-300 border-black/10 rounded-lg p-5 border w-[50%]">
          <h1 className="mx-auto w-14">Sign Up</h1>
          <form onSubmit={handleSubmit} className="w-[70]  flex flex-col ">
            <div>
              <span className="text-lg">username</span>
              <label htmlFor="">
                <input type="text" className="rounded-full" />
              </label>
            </div>
            <div>
              <span className="text-lg">email</span>
              <label htmlFor="">
                <input type="text" className="rounded-full" />
              </label>
            </div>
            <div>
              <span className="text-lg">password</span>
              <label htmlFor="">
                <input type="password" className="rounded-full" />
              </label>
            </div>{" "}
            <div>
              <span className="text-lg">confirm password</span>
              <label htmlFor="">
                <input type="password" className="rounded-full" />
              </label>
            </div>
            <div className="bg-yellow-400 flex justify-center items-center cursor-pointer  h-14 active:bg-yellow-50/40 transition-colors w-32 rounded-full">
              submit
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
