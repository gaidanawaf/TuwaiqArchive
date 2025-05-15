import React from 'react';
const HeroSection = () => {
    return (
      <section className="flex flex-row-reverse items-start justify-start bg-purple-50 p-8 rounded-lg mb-2">
        <div className="w-1/2 text-end">
          <h2 className="text-indigo-600 text-2xl font-bold mb-2">أرشيفنا سجل إنجازاتنا 🗂️</h2>
          <p className="text-indigo-600 text-md mb-4">
            هنا تجد المحاضرات، المشاريع، والموارد التي صنعت فرقًا في رحلتنا التقنية
            تصفح، استلهم، وتعرّف على أفكار مبتكرة وابداعات طلاب طويق
          </p>
          <button className="bg-indigo-800 text-white px-6 py-2 rounded hover:bg-blue-600">
            استكشف الأرشيف
          </button>
        </div>
        <div className="w-1/2">
          <img src="Hero.png" alt="Hero Image" className="w-auto" />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  