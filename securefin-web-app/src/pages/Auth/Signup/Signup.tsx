import { Card } from "../../../components/ui";
import "../Auth.scss";
import SignupForm from "./SignupForm/SignupForm";

const Signup = () => {
  return (
    <>
      <div style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)', height: '100lvh'}} className="auth">
        <Card className="auth__card">
          <SignupForm />
        </Card>
      </div>
    </>
  );
};

export default Signup;
