import React from 'react'
import { Route, Routes } from 'react-router'
import { Country } from '../Pages/Country'
import { Details } from '../Pages/Details'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Country/>} exact ></Route>
            <Route path="/details/:name" element={<Details/>} ></Route>

       
        </Routes>
    </div>
  )
}
