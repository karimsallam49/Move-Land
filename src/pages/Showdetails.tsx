import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector,useAppDispatch } from "../store/hooks"
import actGetmovies from "../store/movies/actGetMovies"
import { cleanup } from "../store/movies/MoviesSlice"
import { Container } from "react-bootstrap"
import Showcomponent from "../components/Showdetatis/Showcomponent"

const Showdetails = () => {
  const dispatch=useAppDispatch()
    useEffect(()=>{
  
      const promise=dispatch(actGetmovies())
      return()=>{
        dispatch(cleanup())
        promise.abort()
      }
    },[dispatch])
    const params=useParams()
    const movieid=params.MovieId
    const {record}=useAppSelector((state)=>state.movieslice)
    const results=record.results

    const renderitems=results.filter((el)=>el.id==Number(movieid))

    const render=renderitems.map((records)=>(
<Showcomponent {...records}/>

    ))



  return (
    <Container>
     {render}
    </Container>
  
  )
}

export default Showdetails
