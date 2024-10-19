import bookmark from"./../../assets/Icones/bookmark.png"
import isbookmarked from "./../../assets/Icones/bookmarked.png"
import { Trecords } from "../../shared/Trecords"
import { imageUrl } from "../../shared/imageurl"
import { useAppDispatch } from "../../store/hooks"
import  { addtobookmark, deletefrombookmark } from "../../store/Bookmark/bookmarkSlice"
import actgetbookmark from "../../store/Bookmark/actGetbookmarks"
import { Link } from "react-router-dom"
import"./cartsyle.css"


type carditemprops=Trecords


const Carditem = ({ original_title,id,backdrop_path,overview,vote_average,bookmarked}:
  
  carditemprops) => {
    
    const dispatch=useAppDispatch()
  return (
    <div className="card-container">

      <div className="card-img">
        <img src={imageUrl+ backdrop_path} alt=""/>

      </div>
      <div className="card-title">
<p>{original_title}</p>
      </div>
      <div className="rate">
        <p>{vote_average}</p>

      </div>
      <div className="bookmark">
        { <img src={ bookmarked? isbookmarked:bookmark} alt="" onClick={()=>{ 
          if(bookmarked){

            dispatch(addtobookmark(id))
            dispatch(deletefrombookmark(id))

          }else{

            dispatch(addtobookmark(id))
            dispatch(actgetbookmark(id))


          }
        }}/>
      }
      </div>
        <Link to={`/Showdetails/${id}`}>  
        <div className="over-view">
        


          {overview}
        </div>
          </Link>
      
    </div>
  )
}

export default Carditem
