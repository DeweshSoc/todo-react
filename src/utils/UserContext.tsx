import { createContext } from "react";

interface IUserContext {
    name:string,
    nameChange?:Function
    // email:string,
    // preferedMode:string
}

export const UserContext:React.Context<IUserContext> = createContext({name:'Default user'})