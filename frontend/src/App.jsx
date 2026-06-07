import Counter from './components/Counter'
import Parent from './components/Parent'
import About from './Pages/about'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Services from './Services'
const App = () => {
  return (
    // fragment tag 
    <>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <Parent/>
    <About/>
    <Home/>
    <Contact/>
    <Services/>
    <Navbar/>
    <Counter/>
    

</>
  )
} 
export default App 