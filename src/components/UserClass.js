import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
           userInfo:{
            name: "dummy",
            location: "dummy",
           }
        }
        console.log(this.props.name+" Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name+" Component Did Mount");
        const data = await fetch("https://api.github.com/users/mauryanik");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        this.timer = setInterval(()=>{
            console.log("Namaste React");

        },1000);
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){

        clearInterval(this.timer);
        console.log("Component Will Unmount");
    }

    render(){
        //const {name,location} = this.props;
        //const {count,count2} = this.state;
        console.log(this.props.name+" Component Render");

        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">

                <img src={avatar_url} alt="avatar" />
                <h2>Name: {name}</h2>
                <h2>location : {location}</h2>
            </div>
        )
    }
}
export default UserClass;