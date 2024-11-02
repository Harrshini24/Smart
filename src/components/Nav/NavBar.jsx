import React from 'react';
import Logo from '../../assets/react.svg';

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="Smart Speak Logo" className="h-10 mr-3" />
        <h1 className="text-center text-5xl py-4">Smart Speak</h1>
      </div>
      <div className="text-left mt-4">
        
      </div>
    </div>
  );
};

export default NavBar;
