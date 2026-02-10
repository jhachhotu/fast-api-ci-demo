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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">User Dashboard</h2>
            <button onClick={logout} className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm sm:text-base">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={joinQueue}
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? "Processing..." : "Join Queue"}
            </button>

            <button
              onClick={getStatus}
              disabled={loading}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? "Loading..." : "Check Status"}
            </button>
          </div>

          {status && (
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Queue Status</h3>
              {status.error ? (
                <p className="text-red-600 bg-red-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">{status.error}</p>
              ) : (
                <pre className="bg-white p-3 sm:p-4 rounded-lg overflow-auto text-xs sm:text-sm border border-gray-200">
                  {JSON.stringify(status, null, 2)}
                </pre>
              )}
            </div>
          )}

          {!status && (
            <div className="text-center py-8 sm:py-12 text-gray-500">
              <p className="text-base sm:text-lg">Click a button above to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
