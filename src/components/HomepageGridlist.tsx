import { Row } from "react-bootstrap"
import { Trecords } from "../shared/Trecords"
import { Swiper,SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

type Gridlistprops={

  record:Trecords[];
  renderitem:(record:Trecords

  )=>React.JSX.Element
}


const Gridlist = ({record,renderitem}:Gridlistprops) => {
   const renderitems= <Swiper
   freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    className='myswiper'
    slidesPerView={"auto"}
    spaceBetween={10}
   >

  {record.length >0 ?record.map((item)=>(
    <SwiperSlide style={{width:"200px"}}>
   {renderitem(item)}
   
   
   </SwiperSlide>
  )):"there is no movie"}
  </Swiper>
  return (
    <Row>{renderitems}</Row>
  )
}

export default Gridlist
