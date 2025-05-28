import React from 'react';
import Header from "./Header";

const SubmitForm = () => {
  return (
<>
<Header/>
    <div className="min-h-screen bg-white flex justify-center pt-20 px-4" dir="rtl">
     <div
  className="w-full max-w-3xl bg-[#E3D8FF]/40 bg-cover bg-center  bg-no-repeat bg-blend-multiplay rounded-xl shadow-lg p-8"
  style={{ backgroundImage: "url('/fform.png')" }}


>
  <div className="text-center">
  <h2 className="text-3xl font-bold mb-2">شارك مشروعك</h2>
  <div className="border-b border-gray-300 w-full mx-auto mb-6"></div>
</div>


     <h3 className="font-semibold mb-3 text-xl">معلومات المستخدم</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div>
    <label className="block mb-1">الاسم باللغة العربية</label>
    <input className="border p-2 rounded w-full" placeholder="الاسم" />
  </div>
  <div>
    <label className="block mb-1">البريد الإلكتروني</label>
    <input className="border p-2 rounded w-full" type="email" placeholder="example@example.com" />
  </div>
  <div>
    <label className="block mb-1">رقم الجوال</label>
    <input className="border p-2 rounded w-full" placeholder="05xxxxxxxx" />
  </div>
  <div>
    <label className="block mb-1">المسار التدريبي</label>
    <input className="border p-2 rounded w-full" placeholder="front-end" />
  </div>
</div>




   <h3 className="font-semibold mb-4 text-xl">معلومات المشروع</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div>
    <label className="block mb-2 text-base">اسم المشروع</label>
    <input className="border p-3 rounded w-full text-lg" placeholder="اسم المشروع" />
  </div>
  
  <div>
    <label className="block mb-2 text-base">التقنيات المستخدمة</label>
    <input className="border p-3 rounded w-full text-lg" placeholder="HTML, CSS, JS" />
  </div>

  <div>
    <label className="block mb-2 text-base">فئة المشروع</label>
    <select className="border p-3 rounded w-full text-lg">
      <option>برمجي</option>
      <option>تصميم</option>
      <option>أخرى</option>
    </select>
  </div>

  <div>
    <label className="block mb-2 text-base">اسم المدرب</label>
    <input className="border p-3 rounded w-full text-lg" placeholder="اسم المدرب" />
  </div>

  <div>
    <label className="block mb-2 text-base">مدة التنفيذ</label>
    <select className="border p-3 rounded w-full text-lg">
      <option>أسبوع</option>
      <option>شهر</option>
      <option>أكثر</option>
    </select>
  </div>

  <div>
    <label className="block mb-2 text-base">رابط المشروع</label>
    <input className="border p-3 rounded w-full text-lg" type="url" placeholder=" https://github.com/user/project" />
  </div>

  <div>
    <label className="block mb-2 text-base">صور المشروع</label>
    <input className="border p-3 rounded w-full text-lg" type="file" accept="image/*" />
  </div>
</div>

<div className="mb-8">
  <label className="block mb-2 text-base">الوصف</label>
  <textarea className="border p-3 rounded w-full text-lg" rows="4" placeholder="اكتب وصف المشروع هنا"></textarea>
</div>

<div className="flex justify-center mt-8">
  <button className="bg-indigo-900 text-white font-semibold py-2 px-12 rounded-full hover:bg-purple-900 transition duration-300">
    إرسال
  </button>
</div>
      </div>
    </div>
    </>
  );
};

export default SubmitForm;