import './styles/style.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import { useState} from 'react';

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [imageActive, setImageActive] = useState(false)
  return (
        <Routes>
          <Route path='/' element={<Layout active={modalActive} setActive={setModalActive}/>}>
            <Route path='' element={<Home active={modalActive} setActive={setModalActive} imageActive={imageActive} setImageActive={setImageActive}/>}/>
          </Route>
        </Routes>
  )
}

export default App
