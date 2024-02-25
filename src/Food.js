import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestuarantMenu from './components/RestuarantMenu'
import {useParams} from 'react-router-dom';

// const styleCard = {  //js object
//     backgroundColor: "#f0f0f0"  
// }

const AppLayout = () =>{
    return(
        <div>
        <Header/>
        <Outlet/>
        </div>
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
                path:'/restuarants/:resId',
                element: <RestuarantMenu/>
            }
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);