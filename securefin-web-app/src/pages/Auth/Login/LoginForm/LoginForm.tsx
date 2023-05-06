//import { useAppContext } from "../../../../AppContext";
import axios from "axios";
import { Alert, Button, Input } from "../../../../components/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiQueryMethods, apiUrls } from "../../../../utils/api";
import { dataQueryStatus } from "../../../../utils/dataQueryStatus";
import "../../Auth.scss";

const { IDLE, LOADING, SUCCESS, ERROR } = dataQueryStatus;
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //const { updateToken, updateUser } = useAppContext();

  const [status, setStatus] = useState(IDLE);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const logIn = (data: any) => {
    setStatus(LOADING);
    setMessage("");
    axios({
      method: apiQueryMethods?.POST,
      url: apiUrls?.logIn,
      data,
    })
      .then((resp: { data: { data: { firstName: any; email: any; isActive: any; lastName: any; token: any; }; }; }) => {
        setStatus(SUCCESS);
        reset();
        const { firstName, email, isActive, lastName, token } = resp.data.data;
        updateUser({ firstName, email, isActive, lastName });
        updateToken(token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err: any) => {
        setMessage("Please Enter the Correct Credentials!");
        setStatus(ERROR);
      });
  };

  const onSubmit = (data: any) => logIn(data);

  return (
    <>
      <Alert
        title=""
        text="Redirecting you to dashboard."
        direction="RIGHT"
        show={status === SUCCESS ? true : false}
      />

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={`message ${status === SUCCESS ? "success" : "error"}`}>
          {message}
        </div>
        <Input
          placeholder="Enter Email Address"
          inputClass="auth-form__input"
          register={register}
          name="email"
          hasError={errors?.email ? true : false}
        />
        <Input
          placeholder="Enter Password"
          inputClass="auth-form__input"
          name="password"
          hasError={errors?.password ? true : false}
          register={register}
        />
        <Button
          text="Login"
          className="auth-form__button"
          isLoadingText="Please wait..."
          status={status}
        />
      </form>

      <div className="auth-link">
        <Link to="/" className="auth-link__forgot">
          Forgot Password
        </Link>

        <div className="auth-link__login">
          Don't have an account?
          <Link to="/signup/" className="auth-link__started">
            {" "}
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
function updateUser(arg0: { firstName: any; email: any; isActive: any; lastName: any; }) {
  throw new Error("Function not implemented.");
}

function updateToken(token: any) {
  throw new Error("Function not implemented.");
}

