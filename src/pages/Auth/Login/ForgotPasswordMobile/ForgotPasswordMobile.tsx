import { Link } from "react-router-dom";

const ForgotPasswordMobile = () => {
  return (
    <>
      <div className="auth-link">
        <Link to="/" className="auth-link__forgotpass">
          Forgot Password?
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordMobile;
