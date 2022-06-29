import { AuthContext } from "../Auth";
import { useContext } from "react";
const useAuth = () => useContext(AuthContext);
export default useAuth;
