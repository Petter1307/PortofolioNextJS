import { Navigate } from "react-router-dom";
// import { useAuth } from "../../hooks";
import useAuth from "../../Hooks/useAuth";
const ProtectedRoute = ({ children }) => {
  const { authed } = useAuth();
  if (!authed) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
