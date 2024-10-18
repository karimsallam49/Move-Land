import homeicone from "../../assets/Icones/homeicone.png"
import tvicone from "../../assets/Icones/tvseries.png"
import movieicone from "../../assets/Icones/movies.png"
import Bookmarks from "../../assets/Icones/bookmarked.png"
import { Link, useLocation } from "react-router-dom"
import "./sidebare.css"
const navelinks=[
    {
        name:"home",
        icone:homeicone,
        link:"/"
        
    },
    {
        name:"Tvseries",
        icone:tvicone,
        link:"/Tvseries"
        
    },
    {
        name:"Movies",
        icone:movieicone,
        link:"/Movies"
        
    },
    {
        name:"Bookmark",
        icone:Bookmarks,
        link:"/Bookmark"
        
    }
]
const Sidebare = () => {
    const {pathname}=useLocation()
  return (

    <div className="sidebarecontainer"
    >
    {navelinks.map((items)=>(

        <Link
        
        to={items.link}
        key={items.name}
        className={pathname===items.link ?"active":""}
       style={{width:"100%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        margin:"1rem",
        padding:".1rem",
        paddingTop:"1rem",
        color:"white",
        textDecoration:"none",
        borderRadius:"20px",
        gap:"10px",
        position:"relative",
       }}
        
        

        >
            <img src={items.icone} alt="" width={"30px"} />
            {items.name}
        </Link>
    ))}

    </div>
    
  )
}

export default Sidebare
