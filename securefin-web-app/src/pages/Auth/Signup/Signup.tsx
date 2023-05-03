import { Card } from "../../../components/ui";
import "../Auth.scss";
import SignupForm from "./SignupForm/SignupForm";

const Signup = () => {
  return (
    <>
      <div className="auth">
        <Card className="auth__card">
          <h1> CREATE AN ACCOUNT</h1>
          <SignupForm />
        </Card>
      </div>
    </>
  );
};

export default Signup;
