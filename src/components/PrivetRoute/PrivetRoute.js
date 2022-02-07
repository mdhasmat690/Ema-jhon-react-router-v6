import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user,isLoading } = UseAuth();
  let location = useLocation();
if(isLoading){
  return <>Loading</>
}
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
