import { useState } from "react"
import seachicone from"../../assets/Icones/search.png"
import "./homepagestyle.css"
import { useAppDispatch } from "../../store/hooks"
import actGetsearchresalut from "../../store/SearchResalut/aCtSearchResalut"
import { useNavigate } from "react-router-dom"

const Searchbare = () => {
  const dispatch=useAppDispatch()
  const navigate=useNavigate()

    const [serach,Setsearch]=useState("")


    const Handlesubmit=()=>{
      dispatch(actGetsearchresalut(serach.replace(/ /,"+")))
        navigate("/searchresalut")
        
        
        
        
      }

  return (

    <div className="searchcontainer">

        <form action="" onSubmit={()=>Handlesubmit()}>
        <input 
        onChange={(event)=>{
          Setsearch(event.target.value)
        }}
        type="text" placeholder="seacrh for movie or tvseries" className="inputstyle"/>
<button >

       <img 
       className="seacrhicone"
       src={seachicone}
        
        />
</button>
        </form>


        

    </div>
      
  )
}

export default Searchbare
