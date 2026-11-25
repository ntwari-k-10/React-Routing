import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../components/about'
import Home from '../components/home'
import Footer from '../components/footer'
import Header from '../components/header'
function App() {
return(
  <BrowserRouter>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)
}

export default App
