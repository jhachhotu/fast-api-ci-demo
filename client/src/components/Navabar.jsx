import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-bold hover:text-blue-400 transition">
            Smart Queue
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            
            {!loggedIn && (
              <>
                <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
                <Link to="/register" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Register</Link>
              </>
            )}

            {loggedIn && (
              <>
                <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-blue-400 transition">Home</Link>
          
          {!loggedIn && (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-blue-400 transition">Login</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-blue-400 transition">Register</Link>
            </>
          )}

          {loggedIn && (
            <>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-blue-400 transition">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
