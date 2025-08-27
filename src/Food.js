import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestuarantMenu from './components/RestuarantMenu';
import {useParams} from 'react-router-dom';
import Logout from './components/Logout';
import {useEffect,useState} from 'react';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

// const styleCard = {  //js object
//     backgroundColor: "#f0f0f0"  
// }

const Grocery = lazy(()=>import('./components/Grocery'))

const AppLayout = () =>{

    const [userName,setUserName] = useState("Nikesh");
    useEffect(()=> {
        const data = {
            name: "Nikesh"
        }
        setUserName(data.name);
        console.log(data.name);
    },[])

    return(
        <Provider store = {appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>loading.....</h1>}><Grocery /></Suspense>
            },
            {
                path:'/restuarants/:resId',
                element: <RestuarantMenu/>
            },
            {
                path: '/logout',
                element: <Logout />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);