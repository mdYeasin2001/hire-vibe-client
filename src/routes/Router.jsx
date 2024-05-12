import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import DetailsJob from "../pages/jobDetails/DetailsJob";
import AddJob from "../pages/addjob/AddJob";
import AllJobs from "../pages/all jobs/AllJobs";
import MyJobs from "../pages/my job/MyJobs";




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
            element: <DetailsJob></DetailsJob>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: "/add-job",
          element: <AddJob></AddJob>
        },
        {
          path: "/all-jobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/my-jobs",
          element: <MyJobs></MyJobs>
        }
      ]
    },
  ]);

  export default router