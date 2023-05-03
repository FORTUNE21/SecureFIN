import { Link } from "react-router-dom";
import { Icon, Text } from "../../../components/ui";
import { Col, Row } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./LayoutFooter.scss";

const LayoutFooter = () => {
  return (
    <>
      <section className="footer">
        <div className="footer__row">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="footer__logo">
                <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Text className="footer__title" tag="h2">
                Navigation
              </Text>

              <Link to="/about" className="footer__row--link">
                {" "}
                About
              </Link>

              <Link to="/features" className="footer__row--link">
                {" "}
                Features
              </Link>

              <Link to="/contact" className="footer__row--link">
                {" "}
                Contact Us
              </Link>

              <Link to="/pricing" className="footer__row--link">
                {" "}
                Pricing
              </Link>
            </Col>

            <Col xs={6} sm={6} md={4} lg={4}>
              <Text className="footer__title" tag="h2">
                Socials
              </Text>

              <Link to="" className="footer__row--link">
                {" "}
                LinkedIn
              </Link>

              <Link to="" className="footer__row--link">
                {" "}
                Twitter
              </Link>

              <Link to="" className="footer__row--link">
                {" "}
                Instagram
              </Link>
            </Col>
          </Row>
          <div className="attribution">
            All Right Reserved{" "} coded by AWE MARY AYOBAMIDELE
            <i>
              <Icon icon="mail" />
            </i>{" "}
            2023
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutFooter;