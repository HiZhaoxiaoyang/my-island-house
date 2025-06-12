import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-white to-blue-100">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-30 bg-white/90 shadow-md backdrop-blur">
        <Navbar />
      </header>
      {/* 主内容区 */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full bg-white/95 rounded-3xl shadow-2xl p-8 border border-blue-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      {/* 页脚 */}
      <footer className="text-center text-gray-400 py-6 text-sm tracking-wide">
        My Island House ©2025 Created by HiZhaoxiaoyang
      </footer>
      <div className="bg-red-500 text-white p-10">测试 Tailwind</div>
    </div>
  </Router>
);

export default App;