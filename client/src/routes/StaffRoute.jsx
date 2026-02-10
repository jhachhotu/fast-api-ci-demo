import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export default function StaffRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
}
