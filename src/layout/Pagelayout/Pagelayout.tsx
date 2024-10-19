import { ReactNode } from "react"
import Sidebare from "../Sidebare/Sidebare"
import "./pagelayout.css"

type pagelayoutprops={
    children:ReactNode
}
const Pagelayout = ({children}:pagelayoutprops) => {
    
  return (
    <div>



    <div className="main-container" >

      
<Sidebare/>

<div style={{width:"100%", overflowY:"scroll"}}>{children}

  <div className="footer"><p style={{color:"white"}}>&copy; 2024 Movieland. All rights reserved.</p></div>
</div>


    </div>
    </div>
  )
}

export default Pagelayout
