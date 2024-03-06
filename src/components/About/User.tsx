import React from "react";

interface IUserProps{
    name:string,
    location:string
}

export const User : React.FC<IUserProps> = ({name,location}) =>{
    return (
      <div>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
      </div>
    );
}

export default User;