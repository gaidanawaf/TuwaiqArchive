import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FilterBar from "./FilterBar";
import ProjectGrid from "./ProjectGrid";
const projects = [
 {
      title: "مشروع واجهة",
      description: "خلال فترة تدريبي، شاركت في مشروع تصميم واجهة مستخدم واطلعت على خطوات بناء واجهات تفاعلية وعصرية.,تعلمت أهمية تنظيم العناصر وتحسين تجربة المستخدم لضمان سهولة الاستخدام وسرعة الوصول للمحتوى.",
      image: "/Rectangle 2.png", 
      author: "محمد",
      authorImage: "/Ellipse 3.png", 
      position: "مصمم واجهات", 
      time: "منذ أسبوع"
    },
    {
      title: "تطبيق جوال",
      description: " شاركت في تصميم واجهة تطبيق جوال ضمن تجربة عملية ساعدتني على تطوير مهاراتي في تصميم واجهات المستخدم.",
      image: "/Rectangle 1.png",
      author: "حمد",
      authorImage: "/Ellipse 1.png",
      position: "مطور تطبيقات",
      time: "منذ 3 أيام"
    },
    {
      title: "تصميم تجربة المستخدم ux/ui",
      description:" عملت على تصميم واجهة مستخدم تركز على البساطة وسهولةالاستخدام بدات ببحث احتياجات المستخدمين وتحليل التجربة الحاليه ثم انتقلت الى رسم الwireframesم",
      image: "/Rectangle 18.png",
      author: "نورة",
      authorImage: "/Ellipse 2.png",
      position: "مصممة تجربة مستخدم",
      time: "منذ يومين"
    },
    {
      title: "مشروع واجهة",
      description: "خلال فترة تدريبي، شاركت في مشروع تصميم واجهة مستخدم واطلعت على خطوات بناء واجهات تفاعلية وعصرية. تعلمت أهمية تنظيم العناصر وتحسين تجربة المستخدم لضمان سهولة الاستخدام وسرعة الوصول للمحتوى.",
      image: "/Rectangle 5.png", 
      author: "محمد",
      authorImage: "/Ellipse 3.png",
      position: "مصمم واجهات",
      time: "منذ أسبوع"
    },
    {
      title: "تطبيق جوال",
      description: "شاركت في تصميم واجهة تطبيق جوال ضمن تجربة عملية ساعدتني على تطوير مهاراتي في تصميم واجهات المستخدم.",
      image: "/Rectangle 4.png",
      author: "حمد",
      authorImage: "/Ellipse 1.png",
      position: "مطور تطبيقات",
      time: "منذ 3 أيام"
    },
    {
           title: "تصميم تجربة المستخدم ux/ui",
      description:" عملت على تصميم واجهة مستخدم تركز على البساطة وسهولةالاستخدام بدات ببحث احتياجات المستخدمين وتحليل التجربة الحاليه ثم انتقلت الى رسم الwireframesم",
      image: "/Rectangle 3.png",
      author: "نورة",
      authorImage: "/Ellipse 2.png",
      position: "مصممة تجربة مستخدم",
      time: "منذ يومين"
    },
    {
      title: "مشروع واجهة",
      description: "خلال فترة تدريبي، شاركت في مشروع تصميم واجهة مستخدم واطلعت على خطوات بناء واجهات تفاعلية وعصرية.تعلمت أهمية تنظيم العناصر وتحسين تجربة المستخدم لضمان سهولة الاستخدام وسرعة الوصول للمحتوى",
      image: "/Rectangle 8.png", 
      author: "محمد",
      authorImage: "/Ellipse 3.png", 
      position: "مصمم واجهات", 
      time: "منذ أسبوع"
    },
    {
      title: "تطبيق جوال",
      description: "شاركت في تصميم واجهة تطبيق جوال ضمن تجربة عملية ساعدتني على تطوير مهاراتي في تصميم واجهات المستخدم.",
      image: "/Frame 7.png",
      author: "حمد",
      authorImage: "/Ellipse 1.png",
      position: "مطور تطبيقات",
      time: "منذ 3 أيام"
    },
        {
      title: "تصميم تجربة المستخدم ux/ui",
      description:" عملت على تصميم واجهة مستخدم تركز على البساطة وسهولةالاستخدام بدات ببحث احتياجات المستخدمين وتحليل التجربة الحاليه ثم انتقلت الى رسم الwireframesم",
      image: "/Rectangle 6.png",
      author: "نورة",
      authorImage: "/Ellipse 2.png",
      position: "مصممة تجربة مستخدم",
      time: "منذ يومين"
    },

];

const TuwaiqArchive = () => {

  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]); 
 

  
  useEffect(() => {
    setFilteredProjects(projects.filter((project) =>
    project.title.includes(search)
    )
)
  }, [search]);
  

  return (
    <div className="top-0 font-sans p-5 text-center rtl">
      <Header />
      <HeroSection />
      <FilterBar search={search} setSearch={setSearch} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default TuwaiqArchive;


