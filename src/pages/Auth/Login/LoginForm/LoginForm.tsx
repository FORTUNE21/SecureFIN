//import { useAppContext } from "AppContext";
import axios from "axios";
import { Alert, Button, Input } from "components/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { apiQueryMethods, apiUrls } from "utils/api";
import { dataQueryStatus } from "utils/dataQueryStatus";
import "../../Auth.scss";
import ForgotPasswordMobile from "../ForgotPasswordMobile/ForgotPasswordMobile";

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
  //const navigate = useNavigate();

  const logIn = (data: any) => {
    setStatus(LOADING);
    setMessage("");
    axios({
      method: apiQueryMethods?.POST,
      url: apiUrls?.logIn,
      data,
    })
      .then((resp) => {
        setStatus(SUCCESS);
        reset();
        // setTimeout(() => {
        //   navigate("/provider/dashboard/");
        // }, 2000);
      })
      .catch((err) => {
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
          placeholder="Enter Your Email Address"
          inputClass="auth-form__input"
          register={register}
          name="email"
          hasError={errors?.email ? true : false}
        />

        <Input
          placeholder="Enter your Password"
          inputClass="auth-form__input"
          register={register}
          name="password"
          hasError={errors?.email ? true : false}
        />

        <ForgotPasswordMobile />

        <Button
          text="Login"
          className="auth-form__button"
          isLoadingText="Please wait..."
          status={status}
        />
      </form>
      
      <div className="auth-link__login">
        Don't have an account?
        <Link to="/signup/" className="auth-link__started">
          {" "}
          Get Started
        </Link>
      </div>

      <div className="auth-link__mobile">
        Not a user yet?
        <Link to="/signup/" className="auth-link__text">
          {" "}
          Sign Up
        </Link>
      </div>
    </>
  );
};
export default LoginForm;
