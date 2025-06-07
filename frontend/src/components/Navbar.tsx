import { Link, useLocation } from 'react-router-dom';

const navs = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-island-primary p-4 md:p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide">My Island House</div>
        <div className="space-x-6 md:space-x-8">
          <ul className="flex space-x-6">
            {navs.map(nav => (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
                    location.pathname === nav.path
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                  }`}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;