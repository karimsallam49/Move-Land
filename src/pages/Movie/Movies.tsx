import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import actGetmovies from "../../store/movies/actGetMovies"
import Gridlist from "../../components/Gridlist"
import Carditem from "../../components/card/Cartitem"
import { Container } from "react-bootstrap"
import { cleanup } from "../../store/movies/MoviesSlice"


const Movies = () => {
  const {record}=useAppSelector((state)=>state.movieslice)
  const{itemid}=useAppSelector((state)=>state.bookmarkslice)
  const dispatch=useAppDispatch()
  useEffect(()=>{

    const promise=dispatch(actGetmovies())
    return()=>{
      dispatch(cleanup())
      promise.abort()
    }
  },[dispatch])
  const results=record.results
  const renderresults=results.map((el)=>({
    ...el,
    bookmarked:itemid.includes(el.id)
    
  }))

  return (
    <Container>
      <h1>Movies</h1>

    <Gridlist record={renderresults} renderitem={(record)=><Carditem{...record}/>}>


    
    </Gridlist>
    </Container>

  )
}

export default Movies
