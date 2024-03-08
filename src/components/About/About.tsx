// import User from "./User";
// import UserClass from "./UserClass";

import Accordian from "../Accordian";
import accordians from "../../json/accordianData.json";
import { useState } from "react";

export const About = () => {
  const [showAccordianIndex, setShowAccordianIndex] = useState<number>(-1);

  return (
    <>
      <h1 className="font-montserrat text-5xl">About Us</h1>
      <p className="m-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officiis
        tenetur ipsa incidunt ab soluta omnis veritatis? Mollitia veniam aliquid
        magni totam omnis laboriosam voluptates ab ad expedita numquam. Ex.
      </p>
      {/* <User name="Dewesh Jha" location="Jamshedpur" />
      <UserClass name="Dewesh Jha" location="Jamshedpur" /> */}

      {accordians.map((accordianData, index) => {
        return (
          <Accordian
            key={index}
            title={accordianData.title}
            data={accordianData.data}
            isOpen={showAccordianIndex === index}
            onOpen={() => {
              if(showAccordianIndex === index) return setShowAccordianIndex(-1);
              setShowAccordianIndex(index);
            }}
          />
        );
      })}
    </>
  );
};

export default About;
