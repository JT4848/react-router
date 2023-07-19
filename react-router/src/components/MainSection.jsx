import { Route, Routes } from 'react-router-dom'
import Red from './Red';
import Blue from './Blue';
import Home from './Home';



const MainSection = () => {
  return(
    <div id="main-section"><Routes>
        <Route path='/red' element={<Red />}/>
        <Route path='/blue' element={<Blue />}/>
        <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  )
}


export default MainSection;