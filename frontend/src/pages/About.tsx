import React from 'react';

const About = () => {
  const techStack = [
    { name: "React 18", desc: "构建交互式用户界面" },
    { name: "Three.js", desc: "创建3D可视化效果" },
    { name: "Tailwind CSS", desc: "原子化CSS设计系统" },
    { name: "Vite", desc: "极速前端构建工具" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-3xl shadow-2xl border border-white/20">
        <h2 className="mb-10 pb-4 border-b border-island-primary/20 flex items-center">
          <svg className="w-8 h-8 mr-3 text-island-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          技术灯塔
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-island-primary">项目愿景</h3>
            <p className="text-lg leading-relaxed">
              打造一个融合<span className="font-bold text-island-primary">3D交互</span>与<span className="font-bold text-island-primary">个人品牌</span>的数字空间，
              让访客在探索岛屋的过程中，自然了解我的技术专长与设计理念。
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-island-primary">技术矩阵</h3>
            <ul className="space-y-4">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-start group">
                  <div className="w-3 h-3 mt-1.5 mr-3 bg-island-primary rounded-full group-hover:animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold">{tech.name}</h4>
                    <p className="text-gray-600">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;