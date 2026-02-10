import { useState } from "react";
import api from "../api/axios";

export default function UserDashboard() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const joinQueue = async () => {
    setLoading(true);
    try {
      const res = await api.post("/queue/join");
      setStatus(res.data);
    } catch (err) {
      setStatus({ error: err.response?.data?.detail || "Failed to join queue" });
    }
    setLoading(false);
  };

  const getStatus = async () => {
    setLoading(true);
    try {
      const res = await api.get("/queue/status");
      setStatus(res.data);
    } catch (err) {
      setStatus({ error: err.response?.data?.detail || "Failed to get status" });
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">User Dashboard</h2>
            <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={joinQueue}
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Join Queue"}
            </button>

            <button
              onClick={getStatus}
              disabled={loading}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Check Status"}
            </button>
          </div>

          {status && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Queue Status</h3>
              {status.error ? (
                <p className="text-red-600 bg-red-50 p-4 rounded-lg">{status.error}</p>
              ) : (
                <pre className="bg-white p-4 rounded-lg overflow-auto text-sm border border-gray-200">
                  {JSON.stringify(status, null, 2)}
                </pre>
              )}
            </div>
          )}

          {!status && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Click a button above to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
