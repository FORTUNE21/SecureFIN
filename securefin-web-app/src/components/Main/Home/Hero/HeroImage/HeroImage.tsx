import heroImage from "../../../../../assets/BakgroundImage.jpg";

const HeroImage = () => {
    return (
        <>
        <div className="hero__container">
            <img
            src={heroImage}
            className="hero__container-image"
            alt="Background Image"
            />
        </div>
        </>
    );
};
export default HeroImage;