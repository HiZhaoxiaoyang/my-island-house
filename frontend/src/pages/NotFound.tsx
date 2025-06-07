import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-16">
    <h1 className="text-6xl font-extrabold text-blue-400 mb-4">404</h1>
    <p className="text-lg text-gray-500 mb-8">页面未找到</p>
    <Link
      to="/"
      className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
    >
      返回首页
    </Link>
  </div>
);

export default NotFound;