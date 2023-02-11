import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiQueryMethods, apiUrls } from "../../../../utils/api";
import { dataQueryStatus } from "../../../../utils/dataQueryStatus";
import { Alert, Button, Input } from "../../../../components/ui";
import "../../Auth.scss";
import { Link } from "react-router-dom";
//import { useAppContext } from "AppContext";

const { IDLE, LOADING, SUCCESS, ERROR } = dataQueryStatus;
const RegisterForm = () => {
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

  const signUp = (data: any) => {
    setStatus(LOADING);
    setMessage("");
    axios({
      method: apiQueryMethods?.POST,
      url: apiUrls?.signUp,
      data,
    })
      .then((resp) => {
        setStatus(SUCCESS);
        reset();
        // setTimeout(() => {
        //     navigate("/login/");
        //   }, 2000);
      })
      .catch((err) => {
        setMessage("An error occurred.");
        setStatus(ERROR);
      });
  };
  
  const onSubmit = (data: any) => signUp(data);

  return (
    <>
      <Alert
        title=""
        text="Account created successfully."
        direction="RIGHT"
        show={status === SUCCESS ? true : false}
      />
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`message text-center ${
            status === SUCCESS ? "success" : "error"
          }`}
        >
          {message}
        </div>

        <Input
          name="firstName"
          placeholder="Enter First Name"
          inputClass="auth-form__input"
          hasError={errors?.firstName ? true : false}
          register={register}
          required
        />

        <Input
          name="lastName"
          placeholder="Enter Last Name"
          inputClass="auth-form__input"
          hasError={errors?.lastName ? true : false}
          register={register}
          required
        />

        <Input
          name="email"
          placeholder="Enter Email Address"
          inputClass="auth-form__input"
          register={register}
          required
        />

        <Input
          name="password"
          placeholder="Enter Password"
          inputClass="auth-form__input"
          register={register}
          required
        />

        <Button
          text="Register"
          className="auth-form__button"
          isLoadingText="Please wait..."
          status={status}
        />
      </form>

      <div className="login-link">
        Already have an account?
        <Link to="/login/" className="login-link__signin">
          {" "}
          Login{" "}
        </Link>
      </div>
    </>
  );
};
export default RegisterForm;
