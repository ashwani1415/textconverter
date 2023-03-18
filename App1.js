import React from 'react'
import Header from './component/Header'
import RecipeLists from './component/RecipeLists'
import Tabs from './component/Tabs'
import './App.scss'

function App1() {
  return (
    <div className='main'>
      <Header/>
      <Tabs/>
      <RecipeLists/>
    </div>
  )
}

export default App1
