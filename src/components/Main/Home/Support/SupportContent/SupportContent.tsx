import { Icon } from "../../../../ui";

const SupportContent = () => {
  return (
    <>
      <div>
        <h1> Do you need help? Our support team ready to help you </h1>
        <h2>
          {" "}
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design system guidelines ever.
        </h2>

        <div className="suppport__item">
          <div className="support__item-live">
            <div className="item-mail">
              <Icon icon="mail" />
            </div>

            <div className="item-client">
              <h3>
                Email client support
                <Icon icon="arrowRight" className="item-arrow" />
              </h3>
              <p>
                {" "}
                Ultimate access to all credit popular exercises and assessments
                materials.
              </p>
            </div>
          </div>

          <div className="support__item-live">
            <div className="item-codetag">
              <Icon icon="code" />
            </div>

            <div className="item-client">
              <h3>
                Live ticket support
                <Icon icon="arrowRight" className="item-arrow" />
              </h3>
              <p>
                {" "}
                Total assessments corrections with live support tickets
                downloads access system
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportContent;
