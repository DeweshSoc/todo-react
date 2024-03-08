import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export const ContextExample = () =>{

    const {name} = useContext(UserContext);

    return (
        <div>
            <h1>{name}</h1>
        </div>

    );

}

export default ContextExample;