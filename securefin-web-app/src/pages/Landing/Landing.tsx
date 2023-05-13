import { Link } from 'react-router-dom';
import LayoutFooter from '../../components/Layout/LayoutFooter/LayoutFooter';
import LayoutHeader from '../../components/Layout/LayoutHeader/LayoutHeader';

const Landing = () => {
     return(
          <>
          < LayoutHeader/>
               <div style={{ height: "45vh" }} className="container valign-wrapper">
                    <div className="row">
                         <div className="col s16 center-align">
                              <h2>
                              <b style={{ fontFamily: "calligraphy"}}>Welcome to SecureFIN</b>{" "}
                                   {/* <span style={{ fontFamily: "monospace" }}>MERN</span> stack */}
                              </h2>
                         <p className="flow-text grey-text text-darken-1">
                              Create an account on a system built to handle the most complex of security threats
                         </p>
                         <br />
                         <div className="col s12 center-align">
                         <Link
                              to="/signup"
                              style={{
                              width: "200px",
                              borderRadius: "5px",
                              letterSpacing: "1.5px",
                              color: "white",
                              fontWeight: "800"
                              }}
                              className="btn btn-large waves-effect waves-light hoverable blue accent-2"
                         >
                             SIGN UP
                         </Link>
                         </div>
                         {/* <div className="col s6">
                         <Link
                              to="/login"
                              style={{
                              width: "140px",
                              borderRadius: "3px",
                              letterSpacing: "1.5px"
                              }}
                              className="btn btn-large btn-flat waves-effect white black-text"
                         >
                              Log In
                         </Link>
                         </div> */}
                         </div>
                    </div>
               </div>
               <LayoutFooter />
          </>
     );
}

export default Landing;