import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Data from './components/Data'


function App() {
  
  return (
    <div>
    <Header/>
    <div className="App">
      <Sidebar/>
      <Data/>
    </div>
    </div>
  )
}

export default App
