import './App.css'
import Button from '@components/ui/Button'
import NavBar from '@components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar />} />
            <Route path='/about' element={<NavBar />} />
            <Route path='/contact' element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
