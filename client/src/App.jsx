import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navabar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import StaffDashboard from "./queue/StaffDashboard";
import StaffRoute from "./routes/StaffRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff"
          element={
            <StaffRoute>
              <StaffDashboard />
            </StaffRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
