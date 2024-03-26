import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Index() {
  return (
    <Routes>
        <Route path='/' element={<Home /> } />
    </Routes>
  )
}
