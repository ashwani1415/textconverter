import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import TextForm from './components/TextForm';
export default function Home() {
  return (<>
    <div>
      <TextForm/>
    </div>
    <BrowserRouter>
    <Routes>
        <Route path="TextForm" element={<TextForm/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
