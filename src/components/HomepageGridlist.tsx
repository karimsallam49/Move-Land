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
    slidesPerView={5}
    spaceBetween={200}
   >

  {record.length >0 ?record.map((item)=>(
    <SwiperSlide>
   {renderitem(item)}
   
   
   </SwiperSlide>
  )):"there is no movie"}
  </Swiper>
  return (
    <Row>{renderitems}</Row>
  )
}

export default Gridlist
