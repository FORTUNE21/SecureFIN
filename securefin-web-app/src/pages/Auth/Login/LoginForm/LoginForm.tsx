import { useAppContext } from "../../../../AppContext";
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
      <div>
        <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Email</label>
                  <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password" />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
              </fieldset>
              <div className="">
                <input style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100" type="submit" value="Sign in" />
              </div>
              <div className="lh-copy mt3">
                <a className="f6 link dim black db pointer">Sign up</a>
                <a className="f6 link dim black db pointer">Forgot your password?</a>
              </div>
            </form>
          </main>
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

