import {useState,useEffect} from 'react';

const User = ({name}) => {
    const [count] = useState(0);
    useEffect(()=>{
        console.log("useEffect");
        const timer = setInterval(()=>{
            console.log("Namaste React");
        },1000)
        return(()=>{
            clearInterval(timer);
            console.log("useEffect Render");
        }
        )
    })
    console.log("render");
    return(
        <div className="user-card">
        <h1>This is a React functional Component</h1>
        <h2>Count: {count}</h2>
        <h2>{name}</h2>
        </div>
    )
}
export default User;