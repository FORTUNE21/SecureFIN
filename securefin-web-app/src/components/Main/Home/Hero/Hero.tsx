import "./Hero.scss";
import HeroImage from "./HeroImage/HeroImage";
import { Col, Row } from "react-bootstrap";
import HeroSide from "./HeroSide/HeroSide";

const Hero = () => {
    return (
        <>
        <section className= "hero">
            <Row className= "hero__content">

            <Col lg={6} xs={12} md={12} sm={12}>
              <HeroSide />
            </Col>

            <Col lg={6} xs={12} md={12} sm={12} className="hero--desktop-only">
                <HeroImage/>
            </Col>

            <Col lg={6} xs={12} md={12} sm={12} className="hero--mobile-only">
              <HeroSide />
            </Col>

            
          </Row>
        </section>
        </>
    );
};
export default Hero;