import React from 'react';
const FilterBar = ({ search, setSearch }) => {
    return (
      <div className="flex flex-row-reverse items-center justify-between mb-6">
        <div className="flex flex-col items-start">
         
          <div className="flex flex-row-reverse gap-4">
            <button className="text-gray-600   hover:text-blue-600">الكل</button>
            <button className="text-gray-600   hover:text-blue-600">تطوير مواقع </button>
            <button className="text-gray-600   hover:text-blue-600">تطوير الألعاب</button>
            <button className="text-gray-600   hover:text-blue-600"> تجربة المستخدم</button>
          </div>
        </div>
  
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="ابحث..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-4 pr-10 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    );
  };
  
  export default FilterBar;
  