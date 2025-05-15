import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;