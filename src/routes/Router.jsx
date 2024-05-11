import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import DetailsJob from "../pages/jobDetails/DetailsJob";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/registration",
            element:<Registration></Registration>
        },
        {
            path:"/jobDetails/:id",
            element: <DetailsJob></DetailsJob>
        }
      ]
    },
  ]);

  export default router