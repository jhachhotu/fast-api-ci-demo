import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Smart Queue System</h3>
          <p className="text-xs sm:text-sm">Revolutionizing queue management with intelligent automation and real-time updates.</p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
            <li><Link to="/register" className="hover:text-white transition">Register</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Features</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>Real-Time Updates</li>
            <li>Smart Analytics</li>
            <li>Secure Platform</li>
            <li>Mobile Friendly</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>Email: support@smartqueue.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Queue St, Tech City</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm">
        <p>&copy; 2024 Smart Queue System. All rights reserved.</p>
      </div>
    </footer>
  );
}
