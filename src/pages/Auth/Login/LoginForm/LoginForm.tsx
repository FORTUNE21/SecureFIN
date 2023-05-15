import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Auth.scss";
// const passwordRegex =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [request, setRequest] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target || {};
    setRequest({ ...request, [name]: value });
  };

  const onSubmitSignIn = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    console.log({ request });
    await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(request),
    })
      .then(async (res) => {
        setLoading(false);
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          const data = await res.json();
          localStorage.setItem("access_token", data.access_token);
          navigate("/home");
        }
      })
      .catch((err) => {
        const errMsg = JSON.parse(err?.message);
        setErrorMessage(errMsg?.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <main className="pa4 black-80">
          <form className="measure" onSubmit={onSubmitSignIn}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
              <div className="input-field col s12">
                <input
                  value={request?.email}
                  // type="email"
                  required={true}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field col s12">
                <input
                  value={request?.password}
                  type="password"
                  placeholder="Password"
                  required={true}
                  name="password"
                  onChange={handleChange}
                />
              </div>
<!--               <label className="pa0 ma0 lh-copy f6 pointer">
                <input type="checkbox" /> Remember me
              </label> -->
            </fieldset>
            <div>
              <button
                style={{
                  background:
                    "linear-gradient(120deg, hotpink 0%, lightblue 100%)",
                  textDecoration: "none",
                  color: "white",
                }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100 center-align"
                type="submit"
                disabled={loading}
              >
                {loading ? "Please wait!!!" : "Sign In"}
              </button>
            </div>
            <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
              {errorMessage}
            </p>
            <div className="lh-copy mt3 f6 link dim db pointer">
              Remember Me
              <Link to="/" className="f6 link dim db pointer">
                Forgot your password?
              </Link>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default LoginForm;
