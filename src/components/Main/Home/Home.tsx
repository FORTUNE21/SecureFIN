import "./Home.scss";
import { Icon } from "../../ui";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import HeroImage from "./Hero/HeroImage/HeroImage";
import LayoutFooter from "../../Layout/LayoutFooter/LayoutFooter";
import HeroSide from "./Hero/HeroSide/HeroSide";

const Home = () => {
  return (
    <>
      <header className="layout-header">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" style={{ height: '70px', padding: '0px' }} />
            <span>SecureFin</span>
          </div>
          <div className="layout-header__desktop">
            <ul className="ul-items">
              <li className="li-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/pricing">Pricing</Link>

              </li>

            </ul>
          </div>
          <div className="layout-header__mobile">
          <Icon icon="menu" className="layout-header--icon" />
        </div>
        </nav>
      </header>

      <div style={{ height: "45vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s16 center-align">
            <h2>
              <b style={{ fontFamily: "calligraphy" }}>Welcome to SecureFIN</b>{" "}
              {/* <span style={{ fontFamily: "monospace" }}>MERN</span> stack */}
              </h2>
              <div className="flow-text grey-text text-darken-1">
            SecureFin, a system built to handle the most complex of security threats
            <p> To get Started, Register with us for a Secure Experience</p>
          </div>
          <br />
          <div className="col s12 center-align">
            <Link
              to="/register"
              style={{
                width: "200px",
                borderRadius: "5px",
                letterSpacing: "1.5px",
                color: "white",
                fontWeight: "800"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-2"
            >
              Register
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
    </div >
       
       <section className="hero">
                    <Row className="hero__content">


                         <Col lg={6} xs={12} md={12} sm={12} className="hero--desktop-only">
                              <HeroSide />
                         </Col>

                         <Col lg={6} xs={12} md={12} sm={12}>
                              <HeroImage />
                         </Col>

                         <Col lg={6} xs={12} md={12} sm={12} className="hero--mobile-only">
                              <HeroSide />
                         </Col>


                    </Row>
               </section> 
        <LayoutFooter/>
        </>
    );
};
export default Home;