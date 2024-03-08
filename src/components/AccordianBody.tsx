import React from "react";

export interface IAccordianData {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  isPromoted: boolean;
}

interface AccordianBody {
  data: IAccordianData[];
}

export const AccordianBody: React.FC<AccordianBody> = ({ data }) => {
  return (
    <div>
      {data.map((data) => {

        const {title,description,imageUrl,id,isPromoted} = data;

        return (
          <div className="flex gap-4 p-4 my-4 rounded-md bg-[#393E46]" key={id}>
            <div className="text-left">
              <h2 className="font-bold text-lg">{title}</h2>
              <p>{description}</p>
            </div>
            <div>
              <img className=" rounded-md max-w-[150px]" src={imageUrl} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordianBody;
