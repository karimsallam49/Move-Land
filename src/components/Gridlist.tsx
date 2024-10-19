import { Row,Col } from "react-bootstrap"
import { Trecords } from "../shared/Trecords"

type Gridlistprops={

  record:Trecords[];
  renderitem:(record:Trecords

  )=>React.JSX.Element
}


const Gridlist = ({record,renderitem}:Gridlistprops) => {
  const renderitems=record.length >0 ?record.map((item)=>(
    <Col
    xs={15} md={3}
    key={item.id}
    className="d-flex justfiy-content-center- mb-5 mt-2"
    >
   {renderitem(item)}
   
   
    </Col>
  )):"there is no movie"
  return (
    <Row>{renderitems}</Row>
  )
}

export default Gridlist
