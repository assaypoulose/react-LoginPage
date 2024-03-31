import { Card, CardBody, CardHeader, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/student")
      .then((res) => res.json())
      .then((data) => {
        let filterdata = data.filter(
          (res) => res.username === userForm.username
        );
        if (filterdata.length === 0) {
          toast.error("user not found");
        } else if (filterdata[0].password !== userForm.password) {
          toast.error("wrong password");
        } else {
          localStorage.setItem("isAuthenticated", "true");
          toast.success("login successfully");
          navigate("/dashboard");
        }
      });
  };

  return (
    <container>
      <Card
        className="my-2"
        style={{
          width: "25rem",
        }}
      >
        <CardHeader>Login Page</CardHeader>
        <CardBody>
          <div>
            <p>
              For test purpose use these credentials
              <div>username: Cindy43 password:wSfb7mkGzw3AIRL</div>
            </p>
          </div>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="mb-3 w-100"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="mb-5 w-100"
          />
          <Button color="primary" onClick={onSubmit}>
            Login
          </Button>
        </CardBody>
      </Card>
    </container>
  );
}
