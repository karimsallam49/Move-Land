import Firstsection from "./Homepagesection/Firstsection"
import Secondsection from "./Homepagesection/Secondsection"
import Thirdsection from "./Homepagesection/Thirdsection"
import Searchbare from "./searchbare"

const Homepage = () => {
  return (
    <div>
      
      <Searchbare/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
    </div>
  )
}

export default Homepage
