import React, { useState } from 'react';
import Header from "./Header";

const SubmitForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    track: "",
    projectName: "",
    technologies: "",
    category: "برمجي",
    trainer: "",
    duration: "أسبوع",
    projectUrl: "",
    description: "",
    image: null,
  });

  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (e.target.type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    fetch("http://localhost:3000/projects", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => alert("تم إرسال المشروع بنجاح"))
      .catch(() => alert("!حدث خطأ أثناء الإرسال"));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex justify-center pt-20 px-4" dir="rtl">
        <form
          onSubmit={handleSubmit}
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
              <input name="name" className="border p-2 rounded w-full" placeholder="الاسم" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1">البريد الإلكتروني</label>
              <input name="email" type="email" className="border p-2 rounded w-full" placeholder="example@example.com" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1">رقم الجوال</label>
              <input name="phone" className="border p-2 rounded w-full" placeholder="05xxxxxxxx" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1">المسار التدريبي</label>
              <input name="track" className="border p-2 rounded w-full" placeholder="front-end" onChange={handleChange} />
            </div>
          </div>



          <h3 className="font-semibold mb-4 text-xl">معلومات المشروع</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block mb-2 text-base">اسم المشروع</label>
              <input name="projectName" className="border p-3 rounded w-full text-lg" placeholder="اسم المشروع" onChange={handleChange} />
            </div>

            <div>
              <label className="block mb-2 text-base">التقنيات المستخدمة</label>
              <input name="technologies" className="border p-3 rounded w-full text-lg" placeholder="HTML, CSS, JS" onChange={handleChange} />
            </div>

            <div>
              <label className="block mb-2 text-base">فئة المشروع</label>
              <select name="category" className="border p-3 rounded w-full text-lg" onChange={handleChange}>
                <option>برمجي</option>
                <option>تصميم</option>
                <option>أخرى</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-base">اسم المدرب</label>
              <input name="trainer" className="border p-3 rounded w-full text-lg" placeholder="اسم المدرب" onChange={handleChange} />
            </div>

            <div>
              <label className="block mb-2 text-base">مدة التنفيذ</label>
              <select name="duration" className="border p-3 rounded w-full text-lg" onChange={handleChange}>
                <option>أسبوع</option>
                <option>شهر</option>
                <option>أكثر</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-base">رابط المشروع</label>
              <input name="projectUrl" type="url" className="border p-3 rounded w-full text-lg" placeholder="https://github.com/user/project" onChange={handleChange} />
            </div>

            <div>
              <label className="block mb-2 text-base">صور المشروع</label>
              <input name="image" type="file" accept="image/*" className="border p-3 rounded w-full text-lg" onChange={handleChange} />
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-base">الوصف</label>
            <textarea name="description" className="border p-3 rounded w-full text-lg" rows="4" placeholder="اكتب وصف المشروع هنا" onChange={handleChange}></textarea>
          </div>

          <div className="flex justify-center mt-8">
            <button type="submit" className="bg-indigo-900 text-white font-semibold py-2 px-12 rounded-full hover:bg-purple-900 transition duration-300">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitForm;