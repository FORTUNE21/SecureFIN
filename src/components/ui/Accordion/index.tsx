import { useState } from 'react';
import { AccordionData } from "../types/uiTypes";
import AccordionItem from "./AccordionItem";
import "./Accordion.scss";

interface Props {
  items: Array<AccordionData>
}

const Accordion = (props: Props) => {
  const { items } = props;
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };
    return (
        <>
        <ul className="accordion">
          {items.map((item, idx) => (
            <AccordionItem
            key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)} 
          />
          ))}
        </ul>
        </>
  );
};

export default Accordion;