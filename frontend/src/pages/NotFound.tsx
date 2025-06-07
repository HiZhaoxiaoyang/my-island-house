import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white p-12 md:p-16 rounded-lg shadow-xl text-center max-w-2xl w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>
        <p className="text-2xl text-gray-600 mb-8">哎呀，你访问的页面好像走丢啦～</p>
        {/* 确保 className 字符串在一行 */}
        <Link 
          to="/" 
          className="text-island-primary hover:bg-island-primary/10 transition-colors duration-200 px-6 py-2 rounded-lg text-lg font-medium"
        >
          返回数字岛屋首页
        </Link>
      </div>
    </div>
  );
};

export default NotFound;