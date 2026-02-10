import { useEffect, useState } from "react";
import api from "../api/axios";
import { getMe } from "../api/user";

export default function StaffDashboard() {
  const [me, setMe] = useState(null);
  const [serving, setServing] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const user = await getMe();
        if (user.role !== "staff") {
          setError("Access denied: Staff only");
          return;
        }
        setMe(user);
        fetchStatus();
      } catch {
        setError("Unauthorized");
      }
    };
    load();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await api.get("/queue/status");
      setServing(res.data.current_token);
    } catch (e) {
      console.error("Failed to fetch status", e);
    }
  };

  const serveNext = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/queue/next");
      setServing(res.data.serving_token ?? null);
    } catch (e) {
      setError(e.response?.data?.detail || "No tokens in queue");
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
  };

  if (error && !me) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600 px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button onClick={() => window.location.href = '/login'} className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!me) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Staff Dashboard</h2>
            <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Logged in as</p>
              <p className="text-lg font-semibold text-gray-800">{me.email}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Role</p>
              <p className="text-lg font-semibold text-gray-800 capitalize">{me.role}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border-2 border-green-300 mb-8">
            <p className="text-lg font-semibold text-gray-700 mb-3">Currently Serving</p>
            <p className="text-5xl font-bold text-green-600">
              {serving ?? "None"}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <button
            onClick={serveNext}
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Serve Next Token"}
          </button>
        </div>
      </div>
    </div>
  );
}
