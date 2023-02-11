import "../faq.scss";
import { Button } from "../../../../ui";

const FaqSide = () => {
  return (
    <>
      <div className="question-content">
        <div className="question-content__support">
          <h2>Do you have any question? Please ask here we ready to support</h2>
          <p>
            if your question is not list here, please feel free to make a manual
            support
          </p>
        </div>
        <Button
          text="Ask your Question"
          isLoadingText="Please wait"
          className="question-content__button"
        />
      </div>
    </>
  );
};

export default FaqSide;
