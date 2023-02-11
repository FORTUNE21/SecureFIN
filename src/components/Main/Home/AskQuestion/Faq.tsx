import "./Faq.scss";
import { Col, Row } from "react-bootstrap";
import FaqSide from "./FaqSide/FaqSide";
import FaqForm from "./FaqForm/FaqForm";

const Faq = () => {
  return (
    <>
      <section className="question">
        <div className="question__container">
          <div className="question__title">
            <h1>Frequently Ask Question </h1>
            <p> Ask your question and meet</p>
          </div>
          <Row className="question__row">
            <Col xs={12} sm={12} md={12} lg={6}>
              <FaqSide />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <FaqForm />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Faq;
