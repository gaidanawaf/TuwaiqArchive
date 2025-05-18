import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FilterBar from "./FilterBar";
import ProjectGrid from "./ProjectGrid";
const projects = [
  {
    id: 1,
    title: "UX/UI تصميم تجربة المستخدم",
    author: "محمد السليطي",
    image: "/Rectangle 18.png",
    description:
      "عملت على تصميم واجهة مستخدم تركز على البساطة وسهولةالاستخدام بدات ببحث احتياجات المستخدمين وتحليل التجربة الحاليه ثم انتقلت الى رسم الwireframes",
    avatar: "/Ellipse 1.png",
  },

];

const TuwaiqArchive = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.includes(search)
  );

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
