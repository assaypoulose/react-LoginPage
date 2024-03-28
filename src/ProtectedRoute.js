import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
    let authenticated = localStorage.getItem("isAuthenticated");
    return authenticated === "true" ? props.children : <Navigate to="/" />;
  }
  