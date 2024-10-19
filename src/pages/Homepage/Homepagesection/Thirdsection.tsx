import { useAppDispatch,useAppSelector } from "../../../store/hooks"
import { useEffect } from "react"
import actGetmovies from "../../../store/movies/actGetMovies"
import Gridlist from "../../../components/HomepageGridlist"
import Carditem from "../../../components/card/Cartitem"
import { Container } from "react-bootstrap"
import"./sectiontyle.css"
const Thirdsection = () => {
    const {record}=useAppSelector((state)=>state.movieslice)
    const{itemid}=useAppSelector((state)=>state.bookmarkslice)

    const dispatch=useAppDispatch()
    useEffect(()=>{
  
      dispatch(actGetmovies())
    },[dispatch])
  
    const results=record.results
    const renderresults=results.map((el)=>({
      ...el,
      bookmarked:itemid.includes(el.id)
      
    }))    
    return (

      <div className="Third-section">

        <h3>Last Updated</h3>
        <Container>

          <Gridlist record={renderresults} renderitem={(record)=><Carditem{...record}/>}></Gridlist>
      </Container>
      </div>

  
      
    )
  }

export default Thirdsection
