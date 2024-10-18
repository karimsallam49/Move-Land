import { Button, Row,Col } from "react-bootstrap"
import { Trecords } from "../../shared/Trecords"
import { imageUrl } from "../../shared/imageurl"
import "./showdetaisstyle.css"



type showprops=Trecords

const Showcomponent = ({ original_title,backdrop_path,overview,vote_average}:showprops) => {

  return (

    
    <div className="show-container">
      <Row>
        <Col  xs={815} md={4} className="mb-4">
      <div className="tite">

        <h1>{original_title}</h1>
      </div>
      <div className="detais">

      <div className="show-image">
      <img src={imageUrl+ backdrop_path} alt="" />
      </div>
      </div>

      </Col>
      <Col xs={15} md={8} >
      <div className="show-detais">
        <p className="vote">{vote_average}</p>
        <p>{overview}</p>
        <Button variant="danger">Watch Now</Button>
      </div>
      </Col>

      
    </Row>
    </div>
  )
}

export default Showcomponent
