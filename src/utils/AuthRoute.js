import { Navigate } from "react-router-dom";

const AuthRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default AuthRoute;
