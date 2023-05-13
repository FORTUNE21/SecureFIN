import "./Hero.scss";
import HeroImage from "./HeroImage/HeroImage";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSide from "./HeroSide/HeroSide";

const Hero = () => {
     return (
       <>
               <div style={{ height: "50vh" }} className="container valign-wrapper">
                    <div className="row">
                         <div className="col s16 center-align">
                              <h2>
                                   <b style={{ fontFamily: "calligraphy" }}>Welcome to SecureFIN</b>{" "}
                                   {/* <span style={{ fontFamily: "monospace" }}>MERN</span> stack */}
                              
                              <p className="flow-text grey-text text-darken-1">
                           SecureFin, a system built to handle the most complex of security threats
                              </p>
                              <br />
                              </h2>

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
                    </div>
               </>
          );
};
export default Hero;