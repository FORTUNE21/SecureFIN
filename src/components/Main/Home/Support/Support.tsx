import "./Support.scss";
import SupportImage from "./SupportImage/SupportImage";
import { Col, Row } from "react-bootstrap";
import SupportContent from "./SupportContent/SupportContent";

const Support = () => {
  return (
    <>
      <section className="support">
        <div className="support__content">
          <Row>
            <Col lg={6} xs={12} md={12} sm={12}>
              <SupportContent />
            </Col>

            <Col lg={6} xs={12} md={12} sm={12}>
              <SupportImage />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Support;
