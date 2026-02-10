import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/register", { email, password });
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">Create Account</h2>
        
        <form onSubmit={handleRegister} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm sm:text-base"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-sm sm:text-base"
              placeholder="Create a password"
              required
            />
          </div>

          {message && (
            <p className={`text-xs sm:text-sm text-center py-2 rounded-lg ${message.includes('successful') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            Register
          </button>
        </form>

        <p className="text-center mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm">
          Already have an account? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
