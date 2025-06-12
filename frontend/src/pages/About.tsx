import React from 'react';

const About = () => {
  // 添加技术栈数据定义
  const techStack = [
    { name: "React", desc: "构建用户界面的 JavaScript 库" },
    { name: "Three.js", desc: "WebGL 3D 渲染引擎" },
    { name: "Tailwind CSS", desc: "实用优先的 CSS 框架" },
    { name: "TypeScript", desc: "强类型 JavaScript 扩展" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-3xl shadow-2xl border border-white/20"> */}
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">关于我</h1>
        <p className="text-gray-700 text-center mb-6">
          Hi，我是 HiZhaoxiaoyang，一名前端开发者和 3D 爱好者。热爱技术、设计与分享。
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="https://github.com/HiZhaoxiaoyang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            GitHub
          </a>
        </div>
        
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
      {/* </div> */}
    </div>
  );
};

export default About;