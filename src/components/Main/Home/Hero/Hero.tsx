import "./Hero.scss";
import { Button, Icon } from "../../../ui";

const Hero = () => {
    return (
        <>

            <section className="main-hero">
                <div className="hero__content">
                    <h1>
                        {" "}
                        SecureFin {" "}
                    </h1>

                    <div className="hero__content-info">
                        <div className="hero__content-date">
                            <Icon icon="calendar" className="hero__content-icons" />
                            September 11-13, 2022
                        </div>

                        <div className="hero__content-location">
                            <Icon icon="location" className="hero__content-icons" />
                           Lagos.
                        </div>
                    </div>

                    <Button
                        text="Buy Ticket"
                        isLoadingText="Please wait"
                        className="hero__content-button"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;