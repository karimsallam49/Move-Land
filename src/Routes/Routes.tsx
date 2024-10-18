import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import Error from "../pages/error/Error"
import Movies from "../pages/Movie/Movies"
import Tvseries from "../pages/Tvseries/Tvseries"
import Bookmark from "../pages/Bookmark/Bookmark"
import Mainlayout from "../mainlayout/Mainlayout"
import Searchresalut from "../pages/Searchresalut"
import Showdetails from "../pages/Showdetails"

 const routs=createBrowserRouter([

    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Error/>,

        children:[

            {
                index:true,
                element:<Homepage/>,


            },

            {

                path:"Tvseries",
                element:<Tvseries/>
            },
            {

                path:"Bookmark",
                element:<Bookmark/>
            },
            {

                path:"Movies",
                element:<Movies/>
            },
            {

                path:"searchresalut/",
                element:<Searchresalut/>
            },
            {

                path:"Movies/Showdetails/:MovieId",
                element:<Showdetails/>
            }
            

        ]


    }

])

const Approuter=()=>{


    return (
    
        <RouterProvider router={routs}/>
    )

}


export default Approuter