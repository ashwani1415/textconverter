import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home1 from './Home1'
import Signup from './Signup'
const App2 = () => {
  return (
    <>
    <BrowserRouter>
 <Routes>
  <Route  path='/' element={<Home1/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='Signup' element={<Signup/>}></Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App2
