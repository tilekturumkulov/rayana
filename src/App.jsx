import { useState } from 'react'
import './styles/style.scss'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
