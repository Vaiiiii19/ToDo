import React from 'react'
import Baground from './Components/Baground'
import Foreground from './Components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
        <Baground />
        <Foreground />
      </div>
  )
}

export default App
