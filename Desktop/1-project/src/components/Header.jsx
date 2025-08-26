import React from 'react';
const Header = () => {
    return (
      <>
        <header className="bg-indigo-800 text-white font-bold h-16 w-56 mx-auto -mt-5 rounded-b-lg flex items-center justify-center">
          <h1 className="text-xl">أرشيف طويق</h1>
        </header>

        <img src="/logo.png" alt="logo" className="w-[140px] h-auto absolute top-4 right-7" />
        
     <button className="bg-indigo-800 text-white text-sm px-4 py-1 rounded-full absolute top-4 left-7 hover:bg-indigo-900 transition">
  تسجيل الدخول
</button>
      </>
    );
  };
  
  export default Header;
  