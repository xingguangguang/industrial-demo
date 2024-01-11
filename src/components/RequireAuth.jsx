import { Navigate } from "react-router-dom";

const RequireAuth = (Comp) => {
  return function () {
    const token = localStorage.getItem('token');
    if (token) {
      return <Comp />
    } else {
      return <Navigate replace to="/login" />
    }
  }
};

export default RequireAuth;