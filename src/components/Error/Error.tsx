import { useRouteError } from "react-router-dom";

export const Error = () =>{

    const error:any = useRouteError();
    console.log(error);

    // error has status, statusText, data, stack
    // data contains the error message
    // status - status code
    // statusText - status text as per the code
    // stack - the error stack

    return (
        <div>
            <h1>OOPS! Something went wrong.</h1>
            <h2>{error?.data}</h2>
            <h3>{error?.status}</h3>
            <h3>{error?.statusText}</h3>
        </div>
    )
}

export default Error;