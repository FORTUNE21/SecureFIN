import "../Hero.scss";
import Button from "../../../../ui/Button";
import { Link } from "react-router-dom";

const HeroSide = () => {
    return (
        <>
        <div className="hero-contain">
        <div className="hero-contain__intro">
          <h1>Do you have any question? Please ask here we ready to support</h1>
          <p>
            if your question is not list here, please feel free to make a manual
            support
          </p>
        </div>
        <Link to="/sign up">
        <Button
          text="Get Started"
          isLoadingText="Please wait"
          className="start-button"
        />
        </Link>
        
      </div>
        </>
    );
};

export default HeroSide;