import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);
console.log(useAuth);
export default useAuth;
