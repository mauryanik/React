import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }

    componentDidMount() {
        //console.log("Parent Component Did Mount")
    }

    render(){
        //console.log("Parent Render");
        return(
            <div className="about">
                <h1>This is about Page</h1>
                <User name={"Nikesh Kumar Maurya"}/>
                {/* <UserClass name={"First Child"} location={"greater noida 135"}/> */}
                {/* <UserClass name={"Second Child"} location={"greater noida 135"}/>
                <UserClass name={"Third Child"} location={"greater noida 135"}/> */}
                
            </div>
        )
    }
}

export default About;