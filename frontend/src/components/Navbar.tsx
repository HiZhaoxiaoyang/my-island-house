import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-island-primary p-4 md:p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide">My Island House</div>
        <div className="space-x-6 md:space-x-8">
          {/* 确保 className 字符串在一行 */}
          <Link 
            to="/" 
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            首页
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:opacity-70 transition-opacity duration-200"
          >
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;