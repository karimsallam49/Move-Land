import {  useAppSelector } from "../../store/hooks"
import Gridlist from "../../components/Gridlist"
import Carditem from "../../components/card/Cartitem"
import { Container } from "react-bootstrap"

const Bookmark = () => {
  const{record,itemid}=useAppSelector((state)=>state.bookmarkslice)



  const renderresults=record.map((el)=>({
    ...el,
    bookmarked:itemid.includes(el.id)
    
  }))
  return (

    <Container>

      <h1>Bookmarks</h1>


   <Gridlist record={renderresults} renderitem={(record)=><Carditem{...record}/>}>

   </Gridlist>
    </Container>

   
      
  )
}

export default Bookmark
