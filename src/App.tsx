import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from "./pages/Welcome/Welcome"
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Create from './pages/Create/Create'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
