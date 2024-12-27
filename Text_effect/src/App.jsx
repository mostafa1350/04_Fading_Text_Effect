import { useState } from 'react'
import Text_effect from './Text_effect'
import Text_flying from './Text.flying'
import { Route , Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Text_effect />} />
      <Route path='/textflying' element={<Text_flying />} />
    </Routes>      
    </>
  )
}

export default App
