import { Card } from "../../../components/ui";
import "../Auth.scss";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
  return (
    <>
      <div className="auth">
        <Card className="auth__card">
          <h1> CREATE AN ACCOUNT</h1>
          <RegisterForm />
        </Card>
      </div>
    </>
  );
};

export default Register;
