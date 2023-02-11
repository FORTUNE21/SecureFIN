import { Link } from "react-router-dom";

const ForgotPasswordDesktop = () => {
  return (
    <>
      <div className="auth-link">
        <Link to="/" className="auth-link__forgot">
          Forgot Password
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordDesktop;
