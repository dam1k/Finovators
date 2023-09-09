import { Navigate, Outlet } from "react-router-dom";
import routes from "../../routes/index.js";

const AuthLayout = () => {
  const isLogged = true;

  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to={routes.login} />;
  }
};

export default AuthLayout;
