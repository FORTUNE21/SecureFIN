import LoginForm from "./LoginForm/LoginForm";
import { Card } from "../../../components/ui";
import "../Auth.scss";

const Login = () => {
  return (
    <>
      <div className="auth">
        <Card className="auth__card">
          <h1> WELCOME BACK!</h1>
          <LoginForm />
        </Card>
      </div>
    </>
  );
};

export default Login;
