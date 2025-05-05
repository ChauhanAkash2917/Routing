import React from 'react'
import Home from "./components/Home";
import Aboute from "./components/About";
import Service from "./components/Service";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import Error from './components/Error';


const Layout = () => {
  return(
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
<>
{/* <Header/>
<Outlet/>
<Footer/> */}
<RouterProvider router = {router}/>
</>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
  element:<Layout/>,
  children:[
    {path: '/home',
      element:<Home/>,
    },

    {path: '/about',
      element:<Aboute/>,
    },
    
    {path: '/service/:id',
      element:<Service/>,
      children:[
        {
          path:"service/globale",
          element:""
        },
      ]
    },
    
    {path: '*',
      element:<Error/>,
    },
    
  ],
  // errorElement:<Error/>
}
]);

export default App