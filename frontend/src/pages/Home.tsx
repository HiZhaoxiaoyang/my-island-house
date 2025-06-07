import React from 'react';
import Tree3D from '../components/Tree3D';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
      <h1 className="mb-12 text-center hover:scale-105 transition-transform duration-500">
        我的<span className="text-stroke text-transparent">数字岛屋</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 group">
          <Tree3D />
          <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4">岛屋实景</h3>
            <p className="text-gray-600">拖动视角可360°查看3D场景</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/20 transform transition-all hover:-translate-y-2">
            <h2 className="mb-6 flex items-center">
              <span className="w-8 h-8 bg-island-primary rounded-full mr-3 animate-pulse"></span>
              关于岛主
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              这里是数字世界的避风港，我是<span className="font-bold text-island-primary">岛屋主人</span>，
              专注于创造融合3D艺术与前端技术的沉浸式体验。
            </p>
            <div className="mt-10">
              <h3 className="text-xl mb-6">核心能力</h3>
              <div className="flex flex-wrap gap-4">
                {['React', 'Three.js', 'WebGL', 'UI/UX'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-5 py-2 bg-gradient-to-r from-island-primary/10 to-blue-100 rounded-full font-medium hover:from-island-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;