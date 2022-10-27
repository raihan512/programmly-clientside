import React from "react";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
        <h3 className='pt-40 text-center text-xl md:text-2xl lg:text-4xl text-white font-black uppercase'>
          Home
        </h3>
        <p className='text-center mt-5 lg:px-80 text-lg md:text-xl text-white font-normal'>
          Online courses are planned by industry professionals to make sure that
          you have the knowledge to build professional software
        </p>
      </div>
    </div>
  );
};

export default Home;
