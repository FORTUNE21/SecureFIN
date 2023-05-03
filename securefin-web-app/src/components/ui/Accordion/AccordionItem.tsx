import { useEffect, useRef, useState } from 'react';
import { AccordionData } from "../types/uiTypes";
import "./Accordion.scss";

interface Props {
    data:  AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;
}

const AccordionItem =(props: Props) => {
    const { data, isOpen, btnOnClick } = props;
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
          const contentEl = contentRef.current as HTMLDivElement;
    
          setHeight(contentEl.scrollHeight);
        } else {
          setHeight(0);
        }
      }, [isOpen]);
    return(
        <>
        <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <h3 className="accordion-item__title">
            <button className="accordion-item__btn" onClick={btnOnClick}>
                    {data.title}
                </button>
            </h3>
            <div className="accordion-item__container" style={{ height }}>
                <div ref={contentRef} className="accordion-item__content">
                    {data.content}
                </div> 
            </div>

        </li>
        </>
    );

};
export default AccordionItem;