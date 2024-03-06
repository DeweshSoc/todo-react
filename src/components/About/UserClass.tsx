import React from "react";

interface IUserProps{
    name:string,
    location:string
}

class UserClass extends React.Component<IUserProps> {

    constructor(props:IUserProps){
        super(props);
        console.log(props);
    }

    componentDidUpdate(prevProps: Readonly<IUserProps>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

    componentDidMount(): void {
        
    }

    componentWillUnmount(): void {
        
    }

    render(): React.ReactNode {

        const {name, location} = this.props;

        return (
          <div>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
          </div>
        );
    }
}


export default UserClass;