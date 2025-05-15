import React from 'react';
const Header = () => {
    return (
      <>
        <header className="bg-indigo-800 text-white font-bold h-16 w-56 mx-auto -mt-5 rounded-b-lg flex items-center justify-center">
          <h1 className="text-xl">أرشيف طويق</h1>
        </header>
        <img src="/logo-h.png" alt="logo" className="w-[140px] h-auto absolute top-4 right-7" />
        <img src="user 1.png" alt="usericon" className="w-[30px] h-auto absolute top-4 left-7" />
      </>
    );
  };
  
  export default Header;
  