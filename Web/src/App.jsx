import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Dramaturgia from './components/Dramaturgia'
import Guiones from './components/Guiones'
import Escritos from './components/Escritos'
import Articulos from './components/Escritos/Articulos'
import Reseñas from './components/Escritos/Reseñas'
import Reflexiones from './components/Escritos/Reflexiones'
import Investigaciones from './components/Escritos/Investigaciones'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dramaturgia' element={<Dramaturgia />} />
          <Route path='/guiones' element={<Guiones />} />
          <Route path='/escritos' element={<Escritos />} />
          {/* LateralMenu */}
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/reseñas' element={<Reseñas />} />
          <Route path='/reflexiones' element={<Reflexiones />} />
          <Route path='/investigaciones' element={<Investigaciones />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
