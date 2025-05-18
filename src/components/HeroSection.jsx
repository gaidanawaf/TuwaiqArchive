import React from 'react';
const HeroSection = () => {
  return (
    <section className=" mt-10 flex flex-row-reverse items-center justify-between bg-purple-50 p-8 rounded-lg mb-6">

      <div className="w-1/2 text-end space-y-6">
        <h2 className="text-indigo-800 text-4xl font-bold">
          أرشيفنا سجل إنجازاتنا <span role="img" aria-label="folder">📂</span>
        </h2>
        <p className="text-indigo-700 text-lg leading-relaxed">
          هنا تجد المحاضرات، المشاريع، والموارد التي صنعت فرقاً في رحلتنا التقنية.
          تصفح، استلهم، وتعرّف على أفكار مبتكرة وإبداعات طلاب طويق.
        </p>
        <button className="bg-indigo-900 text-white px-6 py-3 text-base rounded hover:bg-purple-800 transition">
          اكتشف المزيد
        </button>
      </div>
      
      <div className="w-1/2 flex justify-start">
        <img src="/Hero.png" alt="Hero Image" className="max-w-full h-auto" />
      </div>

    </section>
  );
};

export default HeroSection;
  