
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellers from './pages/BestSellers/BestSellers'
import Products from'./pages/Products/Products'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <BestSellers/>
      <Products/>
      <Footer />
    </>
  )
}

export default App
