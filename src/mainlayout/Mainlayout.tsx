import { Outlet } from "react-router-dom"
import Pagelayout from "../layout/Pagelayout/Pagelayout"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const Mainlayout = () => {
  return (
    <Pagelayout>

        <Outlet/>
    </Pagelayout>
  )
}

export default Mainlayout
