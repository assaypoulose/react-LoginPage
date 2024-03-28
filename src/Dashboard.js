import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success("Logout successfully");
    navigate("/");
  };
  return (
    <div>
      Dashboard Component
      <div className="mt-5">
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}
