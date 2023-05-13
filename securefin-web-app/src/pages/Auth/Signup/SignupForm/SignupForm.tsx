import  { /*Component,*/ useState } from 'react';
import "../../Auth.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitSignUp = async (e: any) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/users/signup', {
      mode: 'cors',
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      console.log("Sign up successful!")
      console.log(data)
      navigate('/login')
    } else {
      console.error("Sign up failed. ")
    }    
  }


    return (
      <>
        <div className="container">
          <div className="">
            <div className="col s8 offset-s2">
              <Link to="/home" className="btn-flat waves-effect">
                {/*<i className="material-icons left">keyboard_backspace</i> */}
                Back to home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Sign up</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
              <form>
                <div className="input-field col s12">
                  <input
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                    placeholder='Name'
                    type="text"
                  />
                  <label htmlFor="name"></label>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Email'
                    type="email"
                  />
                  <label htmlFor="email"></label>
                </div>
                <div className="input-field col s12">
                  <input
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    placeholder='Password'
                    type="password"
                  />
                  <label htmlFor="password"></label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <div
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      color: "white",
                      background: 'linear-gradient(120deg, hotblue 0%, lightblue 100%)',
                    }}
                    
                    onClick={onSubmitSignUp}
                    className="btn center waves-effect waves-light hoverable blue accent-3"
                  >
                    Sign Up
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );

}


  export default SignUpForm;

  
