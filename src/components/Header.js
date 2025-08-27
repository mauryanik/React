import {LOGO_URL} from '../utils/constants';
import {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
import LogoutDialog  from "./LogoutDialog";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";
export const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

  const handleLogout = () => {
    console.log('Logout logic goes here');
    setLogoutDialogOpen(true);
  };
    //console.log("Header render");
    useEffect(()=>{
        //console.log("useEffect Called");
    },[btnName])
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg mb-2 sm:bg-yellow-200 lg:bg-green-200 z-10">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL} alt="image" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 z-10">
                    <li className="p-4 font-semibold">Online Status: {onlineStatus ? "online":"offline"}</li>
                    <li className="p-4 font-semibold"><Link to="/">ome</Link></li>
                    <li className="p-4 font-semibold"><Link to="/about">About us</Link></li>
                    <li className="p-4 font-semibold"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4 font-semibold"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4 font-bold"><Link to="/cart">Cart -({cartItems.length} items)</Link></li>
                    <button className="font-semibold" onClick = {()=> {
                        btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}> {btnName} </button>
                    <li className="p-4 font-semibold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;