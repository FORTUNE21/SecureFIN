import heroImage from "../../../../../assets/BakgroundImage.jpg";

const HeroImage = () => {
    return (
        <>
        <div className="hero__container">
            <img
            src={heroImage}
            className="hero__container-image"
            alt="Background"
            />
        </div>
        </>
    );
};
export default HeroImage;