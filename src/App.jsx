
import Signup from "./files/Signup";
import Signin from "./files/Signin";
import Middle from "./files/Home.jsx"
import Header from "./Header.jsx";
import Home from "./files/Home.jsx";
// import { Link } from "react-router-dom"

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Route, RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Appliances from "./files/Appliances.jsx";

function App() {

  const route  = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/appliances/:imageNumebr",
      element:<Appliances/>
    },
    {
      path:"/login",
      element:<><Header/><Signin/></>
    },
    {
      path:"/signup",
      element:<><Header/><Signup/></>
    },
  ])
  return (
    <>

    <RouterProvider router={route}/>

      {/* <Router className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
