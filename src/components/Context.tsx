import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import ContextExample from "./ContextExample";

export const Context = () => {
    const [inputName, setInputName] = useState("");
    const { name } = useContext(UserContext);
    console.log(name);
    return (
        <>
            <h1 className="font-montserrat text-5xl">About Us</h1>
            <div className="m-8">
                <h1>Default user context</h1>
                <p>{name}</p>
            </div>
            <div>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setInputName(e.target.value)
                    }}
                />
            </div>
            <UserContext.Provider value={{ name:inputName, nameChange:setInputName }}>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
                <ContextExample></ContextExample>
            </UserContext.Provider>
                <ContextExample></ContextExample>
        </>
    );
};

export default Context;
