import React from 'react';
import Button from '../components/subcompenets/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F3F7] flex justify-center items-center h-screen">
      <div className="login bg-[#F7F7F7] w-[320px] sm:w-[380px] md:w-[420px] shadow-md rounded-xl text-gray-700 p-8 font-semibold flex flex-col gap-6 items-center">
        <h1 className="text-2xl text-gray-800">Login</h1>

        <div className="w-full text-center">
          <p className="text-lg mb-1">Username</p>
          <input type="text" className="border border-gray-300 w-full p-2 rounded-md " />
        </div>

        <div className="w-full text-center">
          <p className="text-lg mb-1">Password</p>
          <input type="password" className="border border-gray-300 w-full p-2 rounded-md  " />
        </div>

        <div className="w-full flex flex-col items-center gap-1 text-white mt-5">
          <Button text="Login" isBlue={true} className="w-full" onClick={() => navigate('/mainpage')}/>
          <p className="text-sm text-[#007bff] cursor-pointer hover:underline font-normal">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
