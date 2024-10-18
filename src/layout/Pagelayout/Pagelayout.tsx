import { ReactNode } from "react"
import Sidebare from "../Sidebare/Sidebare"
import "./pagelayout.css"

type pagelayoutprops={
    children:ReactNode
}
const Pagelayout = ({children}:pagelayoutprops) => {
    
  return (
    <div className="main-container" >
      
<Sidebare/>

<div style={{width:"100%", overflowY:"scroll"}}>{children}</div>

    </div>
  )
}

export default Pagelayout
