import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks";
const ProtectedRoute = ({ children }) => {
  const { authed } = useAuth() || false;
  if (!authed) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
