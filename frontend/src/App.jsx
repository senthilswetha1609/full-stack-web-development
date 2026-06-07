import Counter from './components/Counter'
import Effects from './components/Effects'
import Parent from './components/Parent'
import About from './Pages/about'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Services from './Services'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    // fragment tag 
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/useState' element={<Counter/>}></Route>
      <Route path='/useEffects' element={<Effects/>}></Route>
    </Routes>
</>
  )
} 
export default App 