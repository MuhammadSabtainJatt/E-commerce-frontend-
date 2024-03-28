import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Frountend/Pages/Contact'

export default function Index() {
  return (
    <Routes>
        <Route path='/' element={<Home /> } />
    </Routes>
  )
}
