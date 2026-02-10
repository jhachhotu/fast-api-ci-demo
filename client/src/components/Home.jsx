import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
      <div className="px-4 py-20 md:py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Smart Queue System</h1>
          <p className="text-lg md:text-xl mb-10 opacity-95">Manage queues efficiently with real-time updates and intelligent scheduling</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all">Get Started</Link>
            <Link to="/register" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">Sign Up</Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Real-Time Updates</h3>
            <p className="text-gray-600">Get instant notifications about your queue position and estimated wait time</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Analytics</h3>
            <p className="text-gray-600">Track queue metrics and optimize service delivery with data-driven insights</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile Friendly</h3>
            <p className="text-gray-600">Access from any device with our responsive design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
