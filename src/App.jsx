
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nofound from './pages/Nofound'
import { CartProvider } from 'react-use-cart'

function App() {

  return (
    <>
    <CartProvider>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-propos' element={<About />} />
          <Route path="*" element={<Nofound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
    </>
  )
}

export default App
