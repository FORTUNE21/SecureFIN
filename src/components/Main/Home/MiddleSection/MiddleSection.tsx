import { Col, Row } from "react-bootstrap";
import "./MiddleSection.scss";

const MiddleSection = () => {
  return (
    <>
      <section className="middle-intro">
        <div className="intro__content">
          <Row>
            <Col lg={6} xs={12} md={6}>
              <h1> Have a look Around! </h1>
              <h2>
                {" "}
                And you will find everything you need to build a great looking
                website.{" "}
              </h2>
              <hr></hr>
            </Col>
            <Col lg={6} xs={12} md={6}></Col>
            <Col lg={6} xs={12} md={6}>
              <div className="content-count">
                <div className="content-demo">
                  <h3> 12 </h3>
                  <p>Demo Homepages</p>
                </div>

                <div className="content-flexible">
                  <h3> 50+ </h3>
                  <p>Flexible Components</p>
                </div>

                <div className="content-inner">
                  <h3> 47 </h3>
                  <p>Inner Page Templates</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
