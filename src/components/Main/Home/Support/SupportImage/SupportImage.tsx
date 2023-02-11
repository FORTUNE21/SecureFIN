import supportImage from "assets/support-image.png";

const SupportImage = () => {
  return (
    <>
      <div className="support__container">
        <img
          src={supportImage}
          className="support__container-image"
          alt="Support"
        />
      </div>
    </>
  );
};

export default SupportImage;
