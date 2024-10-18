import { useAppSelector,useAppDispatch } from "../store/hooks"
import Gridlist from "../components/Gridlist"
import Carditem from "../components/card/Cartitem"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import { cleanup } from "../store/SearchResalut/SearchResalutslice"

const Searchresalut = () => {
  const dispatch=useAppDispatch()
  const {record}=useAppSelector((state)=>state.seacrhresalutslice)
  const {itemid}=useAppSelector((state)=>state.bookmarkslice)
  const result=record.results
  const renderresults=result.map((el)=>({
    ...el,
    bookmarked:itemid.includes(el.id)
    
  }))

  useEffect(()=>{
    return()=>{
      dispatch(cleanup())
    }
  },[dispatch])
  return (
    <Container>

      <Gridlist record={renderresults}  renderitem={(record)=><Carditem{...record}/>}></Gridlist>
    </Container>
  )
}

export default Searchresalut
