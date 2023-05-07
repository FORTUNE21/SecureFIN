import { Link } from 'react-router-dom';
import "../../Auth.scss";

const LoginForm = () => {

  return (
    <>
      <div>
        <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                  <div className="input-field col s12">
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                    <label htmlFor="email"></label>
                </div>
                <div className="input-field col s12">
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="password"></label>
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
              </fieldset>
              <div className="">
                <input style={{background: 'linear-gradient(120deg, hotpink 0%, lightblue 100%)'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100" type="submit" value="Sign in" />
              </div>
              <div className="lh-copy mt3">
                <Link 
                  to="/signup"
                  className="f6 link dim db pointer">
                  Sign up
                </Link>
                <a className="f6 link dim db pointer">Forgot your password?</a>
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

