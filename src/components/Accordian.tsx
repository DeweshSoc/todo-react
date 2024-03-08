import React, { useState } from "react";
import arrowImg from "../assets/down-arrow.png";
import AccordianBody,{IAccordianData} from "./AccordianBody";



interface IAccordian {
  title: string;
  isOpen: boolean;
  onOpen: Function;
  data?: Array<IAccordianData>;
}



export const Accordian: React.FC<IAccordian> = ({
  title,
  isOpen,
  data,
  onOpen,
}) => {
  const [addedClasses, setAddedClasses] = useState("");
  // const [showItems, setShowItems] = useState(false);

  const handleClick = (ev: React.MouseEvent) => {
    setAddedClasses((addedClasses) => (addedClasses ? "" : "rotate-180"));
    onOpen();
  };

  return (
    <div className="my-4">
      <div
        className={`flex justify-between shadow-md bg-primary text-primary-text p-4 rounded-md text-lg cursor-pointer`}
        onClick={handleClick}
      >
        <span>
          {title}({data?.length})
        </span>
        <span>
          <img
            className={`max-w-8 duration-500 ${addedClasses}`}
            src={arrowImg}
            alt="arrow-image"
          />
        </span>
      </div>
      {isOpen && <AccordianBody data={data} />}
    </div>
  );
};

export default Accordian;
