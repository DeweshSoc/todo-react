// import User from "./User";
// import UserClass from "./UserClass";

import Accordian from "../Accordian";

const data = [
  {
    title:'Kolkata',
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo debitis sunt, accusantium ab natus necessitatibus, numquam repellendus.",
    imageUrl: "https://picsum.photos/300/200",
    id:1,
    isPromoted:false
  },
  {
    title:'Bengal',
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo debitis sunt, accusantium ab natus necessitatibus, numquam repellendus.",
    imageUrl: "https://picsum.photos/300/200",
    id:2,
    isPromoted:true
  },
  {
    title:'Singapore',
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo debitis sunt, accusantium ab natus necessitatibus, numquam repellendus.",
    imageUrl: "https://picsum.photos/300/200",
    id:3,
    isPromoted:false
  },
];

export const About = () => {
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
      <Accordian title="Recommended" data={data}/>
      <Accordian title="Recommended" data={data}/>
      <Accordian title="Recommended" data={data}/>
    </>
  );
};

export default About;
