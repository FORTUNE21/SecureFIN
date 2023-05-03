import { UiProps } from "../types/uiTypes";
import "./Card.scss";

const Card = (props: UiProps) => {
  const { children, className } = props;
  return (
    <>
      <div className={`card ${className}`}>{children}</div>
    </>
  );
};

export default Card;
