import logo from '../../assets/logo.jfif'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  
  const handleLinkClick = () => {
    setMobileDrawerOpen(false);
  }

  return (
    <nav>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">Up Skills Hub</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Log In
              </Link>
              <Link to="/register" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md">
                Create an account
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-blue-200 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                <li className="py-4">
                  <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="py-4">
                  <Link to="/about" onClick={handleLinkClick}>About</Link>
                </li>
                <li className="py-4">
                  <Link to="/services" onClick={handleLinkClick}>Services</Link>
                </li>
                <li className="py-4">
                  <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                </li>
              </ul>
              <div className="flex space-x-6">
                <Link to="/login" onClick={handleLinkClick} className="py-2 px-3 border rounded-md">
                  Log In
                </Link>
                <Link to="/register" onClick={handleLinkClick} className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800">
                  Create an account
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;