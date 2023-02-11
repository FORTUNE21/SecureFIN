import LoginForm from "./LoginForm/LoginForm";
import { Card } from "components/ui";
import "../Auth.scss";
import "./Login.scss";
import ForgotPasswordDesktop from "./ForgotPasswordDesktop/ForgotPasswordDesktop";

const Login = () => {
  return (
    <>
      <div className="auth">
        <Card className="auth__card">
          <h1> WELCOME BACK!</h1>
          <div className="auth__text">
            Enter your details to proceed to your dashboard
          </div>
          <LoginForm />
          <ForgotPasswordDesktop />
        </Card>
      </div>
    </>
  );
};

export default Login;
