import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Dramaturgia from './components/Dramaturgia'
import Guiones from './components/Guiones'
import Escritos from './components/Escritos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dramaturgia' element={<Dramaturgia />} />
          <Route path='/guiones' element={<Guiones />} />
          <Route path='/escritos' element={<Escritos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
