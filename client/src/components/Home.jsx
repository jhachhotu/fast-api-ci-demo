import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Smart Queue System</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-95 px-4">Manage queues efficiently with real-time updates and intelligent scheduling</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/login" className="bg-white text-indigo-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all text-sm sm:text-base">Get Started</Link>
            <Link to="/register" className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all text-sm sm:text-base">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-800">How It Works</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">Our intelligent queue management system streamlines the entire process from registration to service completion</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="bg-blue-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">1</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Join Queue</h3>
              <p className="text-sm sm:text-base text-gray-600">Users register and join the virtual queue instantly through our platform. No more physical waiting lines.</p>
            </div>
            <div className="text-center px-4">
              <div className="bg-purple-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">2</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Real-Time Updates</h3>
              <p className="text-sm sm:text-base text-gray-600">Get instant notifications about your position, estimated wait time, and when it's your turn.</p>
            </div>
            <div className="text-center px-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-pink-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">3</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Get Served</h3>
              <p className="text-sm sm:text-base text-gray-600">Staff efficiently manages the queue and serves customers in order, reducing wait times significantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Real-Time Updates</h3>
            <p className="text-sm sm:text-base text-gray-600">Get instant notifications about your queue position and estimated wait time</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📊</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Smart Analytics</h3>
            <p className="text-sm sm:text-base text-gray-600">Track queue metrics and optimize service delivery with data-driven insights</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔒</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Secure & Reliable</h3>
            <p className="text-sm sm:text-base text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📱</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Mobile Friendly</h3>
            <p className="text-sm sm:text-base text-gray-600">Access from any device with our responsive design</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16">Why Choose Smart Queue?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Reduce Wait Times</h3>
                <p className="text-sm sm:text-base opacity-90">Cut average waiting time by up to 70% with intelligent queue management</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Improve Customer Satisfaction</h3>
                <p className="text-sm sm:text-base opacity-90">Keep customers informed and happy with transparent wait time estimates</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Increase Efficiency</h3>
                <p className="text-sm sm:text-base opacity-90">Staff can focus on service quality instead of managing physical queues</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Data-Driven Insights</h3>
                <p className="text-sm sm:text-base opacity-90">Make informed decisions with comprehensive analytics and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 px-4">Ready to Transform Your Queue Management?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">Join thousands of businesses already using Smart Queue System</p>
          <Link to="/register" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
