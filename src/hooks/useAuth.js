import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);
export default useAuth;
