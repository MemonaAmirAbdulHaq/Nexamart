
import { useNavigate } from "react-router-dom";
import SignUp from "../components/Signup/Signup.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignUpPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignUpPage;
