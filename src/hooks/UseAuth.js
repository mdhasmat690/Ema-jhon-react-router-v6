import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;
