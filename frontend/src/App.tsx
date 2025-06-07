import React from 'react';
// 由于 react-router-dom 中没有 Switch 成员，使用 Routes 替代
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 尝试不同路径引入，确保文件存在
import Home from "./pages/Home";
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';  // 新增导入

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />  {/* 新增导航栏 */}
        <main className="container mx-auto px-4 py-8 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
// 路由验证：App.tsx 已正确配置路由（当前上下文显示路由正常）: